import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #f97316 0%, #fbbf24 100%)',
          fontFamily: 'sans-serif',
          fontSize: '20px',
          fontWeight: 800,
          color: '#09090b',
        }}
      >
        AI
      </div>
    ),
    { ...size }
  );
}
