import { useConfig } from '../context/ConfigContext'
import useCountdown from '../hooks/useCountdown'

export default function Hero() {
  const config = useConfig()
  const { days, hours, mins, secs } = useCountdown(config.wedding.dateTimeUtc)

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#FBF5EE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '130px 48px 88px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid background */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.045, pointerEvents: 'none' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="44" height="44" patternUnits="userSpaceOnUse">
            <circle cx="22" cy="22" r="1.4" fill="#C4787E" />
            <circle cx="0" cy="0" r="1.4" fill="#C4787E" />
            <circle cx="44" cy="0" r="1.4" fill="#C4787E" />
            <circle cx="0" cy="44" r="1.4" fill="#C4787E" />
            <circle cx="44" cy="44" r="1.4" fill="#C4787E" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

      {/* Top-left floral ornament */}
      <svg
        style={{ position: 'absolute', top: '52px', left: '52px', opacity: 0.14, pointerEvents: 'none' }}
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
      >
        <path d="M55 10 C55 10 78 33 78 55 C78 77 55 90 55 90 C55 90 32 77 32 55 C32 33 55 10 55 10Z" stroke="#C4787E" strokeWidth="1.2" />
        <path d="M10 55 C10 55 33 32 55 32 C77 32 90 55 90 55 C90 55 77 78 55 78 C33 78 10 55 10 55Z" stroke="#C4787E" strokeWidth="1.2" />
        <circle cx="55" cy="55" r="10" stroke="#C4787E" strokeWidth="1.2" />
        <circle cx="55" cy="55" r="4" fill="#C4787E" opacity="0.4" />
      </svg>

      {/* Top-right floral ornament */}
      <svg
        style={{ position: 'absolute', top: '52px', right: '52px', opacity: 0.14, pointerEvents: 'none', transform: 'scaleX(-1)' }}
        width="110"
        height="110"
        viewBox="0 0 110 110"
        fill="none"
      >
        <path d="M55 10 C55 10 78 33 78 55 C78 77 55 90 55 90 C55 90 32 77 32 55 C32 33 55 10 55 10Z" stroke="#C4787E" strokeWidth="1.2" />
        <path d="M10 55 C10 55 33 32 55 32 C77 32 90 55 90 55 C90 55 77 78 55 78 C33 78 10 55 10 55Z" stroke="#C4787E" strokeWidth="1.2" />
        <circle cx="55" cy="55" r="10" stroke="#C4787E" strokeWidth="1.2" />
        <circle cx="55" cy="55" r="4" fill="#C4787E" opacity="0.4" />
      </svg>

      {/* Pre-heading */}
      <p
        className="animate-fadeUp"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          color: '#C4787E',
          fontSize: '11px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '36px',
          marginTop: 0,
        }}
      >
        The Wedding of
      </p>

      {/* Bride name */}
      <h1
        className="animate-fadeUp"
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '104px',
          color: '#2C1A12',
          margin: 0,
          lineHeight: 1.1,
          animationDelay: '0.1s',
        }}
      >
        {config.couple.brideName}
      </h1>

      {/* Ampersand */}
      <p
        className="animate-fadeUp"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontSize: '34px',
          color: '#C4787E',
          letterSpacing: '6px',
          margin: '8px 0',
          animationDelay: '0.18s',
        }}
      >
        &amp;
      </p>

      {/* Groom name */}
      <h1
        className="animate-fadeUp"
        style={{
          fontFamily: "'Great Vibes', cursive",
          fontSize: '104px',
          color: '#2C1A12',
          margin: 0,
          lineHeight: 1.1,
          marginBottom: '44px',
          animationDelay: '0.22s',
        }}
      >
        {config.couple.groomName}
      </h1>

      {/* Ornamental divider */}
      <div
        className="animate-fadeUp"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '28px',
          animationDelay: '0.3s',
        }}
      >
        <div style={{ width: '72px', height: '1px', background: '#D4C0B0', opacity: 0.7 }} />
        <svg width="13" height="13" viewBox="0 0 13 13">
          <path d="M6.5 0.5 L7.7 5.3 L12.5 6.5 L7.7 7.7 L6.5 12.5 L5.3 7.7 L0.5 6.5 L5.3 5.3 Z" fill="#C4787E" opacity="0.55" />
        </svg>
        <div style={{ width: '72px', height: '1px', background: '#D4C0B0', opacity: 0.7 }} />
      </div>

      {/* Display date */}
      <p
        className="animate-fadeUp"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '18px',
          color: '#5C3D2E',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginBottom: '6px',
          marginTop: 0,
          animationDelay: '0.34s',
        }}
      >
        {config.wedding.displayDate}
      </p>

      {/* Primary venue */}
      <p
        className="animate-fadeUp"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '12px',
          color: '#B8A090',
          letterSpacing: '2.5px',
          marginBottom: '54px',
          marginTop: 0,
          animationDelay: '0.38s',
        }}
      >
        {config.wedding.primaryVenue}
      </p>

      {/* Countdown grid */}
      <div
        className="animate-fadeUp"
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          animationDelay: '0.44s',
        }}
      >
        {[
          { value: days, label: 'DAYS' },
          { value: hours, label: 'HOURS' },
          { value: mins, label: 'MINS' },
          { value: secs, label: 'SECS', isSecs: true },
        ].map(({ value, label, isSecs }) => (
          <div
            key={label}
            style={{
              background: '#F5EDE3',
              border: '1px solid #EAD8C8',
              borderRadius: '10px',
              padding: '16px 22px',
              minWidth: '78px',
              textAlign: 'center',
            }}
          >
            <div
              className={isSecs ? 'animate-secTick' : undefined}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '40px',
                color: '#2C1A12',
                lineHeight: 1,
              }}
            >
              {value}
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                color: '#C4A090',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                marginTop: '8px',
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '38px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '9px',
            color: '#C4A090',
            letterSpacing: '3px',
            textTransform: 'uppercase',
          }}
        >
          SCROLL
        </span>
        <svg
          className="animate-bounce-scroll"
          width="18"
          height="26"
          viewBox="0 0 18 26"
          fill="none"
        >
          <rect x="1" y="1" width="16" height="24" rx="8" stroke="#D4C0B0" strokeWidth="1.4" />
          <circle cx="9" cy="9" r="2.5" fill="#C4787E" opacity="0.55" />
        </svg>
      </div>
    </section>
  )
}
