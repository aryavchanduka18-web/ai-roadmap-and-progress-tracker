import { ImageResponse } from 'next/og';

// Next.js auto-generates /opengraph-image when this file exists and adds the
// matching <meta property="og:image"> tag. Twitter falls back to og:image when
// twitter:image is not set, so this single file covers both surfaces.

export const runtime = 'edge';
export const alt = 'The Complete AI Engineer Roadmap — 10 months, 40 weeks, 5 portfolio projects';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#09090b',
          padding: '72px 80px',
          position: 'relative',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Orange radial glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: '-220px',
            right: '-180px',
            width: '600px',
            height: '600px',
            borderRadius: '9999px',
            background:
              'radial-gradient(circle, rgba(249,115,22,0.28) 0%, transparent 65%)',
            display: 'flex',
          }}
        />
        {/* Amber radial glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: '-160px',
            left: '-120px',
            width: '440px',
            height: '440px',
            borderRadius: '9999px',
            background:
              'radial-gradient(circle, rgba(251,191,36,0.14) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Top row — brand mark + wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
              display: 'flex',
            }}
          />
          <div
            style={{
              fontSize: '22px',
              color: '#a1a1aa',
              letterSpacing: '0.12em',
              fontWeight: 600,
            }}
          >
            AI ROADMAP — PROGRESS TRACKER
          </div>
        </div>

        {/* Middle — headline + subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '26px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '92px',
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: '-0.035em',
              color: '#fafafa',
            }}
          >
            <div style={{ display: 'flex' }}>The Complete</div>
            <div style={{ display: 'flex' }}>AI Engineer Roadmap</div>
          </div>
          <div
            style={{
              fontSize: '34px',
              color: '#f97316',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              display: 'flex',
            }}
          >
            10 months · 40 weeks · 5 portfolio projects
          </div>
        </div>

        {/* Bottom — divider + meta row */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div
            style={{
              height: '1px',
              background: '#27272a',
              display: 'flex',
            }}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '22px',
              color: '#71717a',
              fontWeight: 400,
            }}
          >
            <div style={{ display: 'flex' }}>ai-roadmap--tracker.vercel.app</div>
            <div style={{ display: 'flex' }}>Free · Self-paced · Open</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
