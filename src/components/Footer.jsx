import { useConfig } from '../context/ConfigContext'

export default function Footer() {
  const { couple, wedding, footer } = useConfig()

  return (
    <footer style={{ background: '#2C1A12', padding: '72px 52px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', color: '#F5E6C8', fontSize: '72px', lineHeight: 1, marginBottom: '16px' }}>
        {couple.brideNickname} &amp; {couple.groomNickname}
      </h2>
      <p style={{ fontFamily: 'var(--font-sans)', color: '#7a5a4a', fontSize: '11px', letterSpacing: '3.5px', textTransform: 'uppercase', marginBottom: '36px' }}>
        {wedding.displayDate} · {wedding.primaryVenue}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', justifyContent: 'center', marginBottom: '36px' }}>
        <div style={{ height: '1px', width: '72px', background: 'rgba(245,230,200,0.12)' }} />
        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 0.5 L8.3 5.7 L13.5 7 L8.3 8.3 L7 13.5 L5.7 8.3 L0.5 7 L5.7 5.7 Z" fill="#C4787E" opacity="0.4"/>
        </svg>
        <div style={{ height: '1px', width: '72px', background: 'rgba(245,230,200,0.12)' }} />
      </div>
      <p style={{ fontFamily: 'var(--font-serif)', color: 'rgba(245,230,200,0.25)', fontSize: '14px', fontStyle: 'italic' }}>
        {footer.tagline}
      </p>
    </footer>
  )
}
