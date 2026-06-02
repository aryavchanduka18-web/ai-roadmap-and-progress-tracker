import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { sanitizeProgressSnapshot, type ProgressSnapshot } from '@/lib/progress';
import { getRedis } from '@/lib/redis';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const MAX_BODY_BYTES = 64 * 1024;
const NO_STORE_HEADERS = { 'Cache-Control': 'no-store' };

function progressKey(userId: string) {
  return `roadmap-progress:${userId}`;
}

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const progress = await getRedis().get<ProgressSnapshot>(
      progressKey(userId)
    );

    return NextResponse.json(
      {
        progress:
          progress === null
            ? null
            : sanitizeProgressSnapshot(progress),
      },
      { headers: NO_STORE_HEADERS }
    );
  } catch (error) {
    console.error('REDIS GET ERROR:', error);

    return NextResponse.json(
      { error: 'Progress storage is unavailable.' },
      { status: 503 }
    );
  }
}

export async function PUT(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const contentLength = Number(
    request.headers.get('content-length') ?? 0
  );

  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Progress payload is too large.' },
      { status: 413 }
    );
  }

  const rawBody = await request.text();

  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json(
      { error: 'Progress payload is too large.' },
      { status: 413 }
    );
  }

  let progress: ProgressSnapshot;

  try {
    progress = sanitizeProgressSnapshot(
      JSON.parse(rawBody)
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid progress payload.' },
      { status: 400 }
    );
  }

  try {
    await getRedis().set(
      progressKey(userId),
      progress
    );

    return NextResponse.json(
      { progress },
      { headers: NO_STORE_HEADERS }
    );
  } catch (error) {
    console.error('REDIS SET ERROR:', error);

    return NextResponse.json(
      { error: 'Progress storage is unavailable.' },
      { status: 503 }
    );
  }
}
