import { useState } from 'react'
import useScrollY from '../hooks/useScrollY'
import { useConfig } from '../context/ConfigContext'

export default function Nav() {
  const { couple } = useConfig()
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = scrollY > 60

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
    padding: '20px 52px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'background 0.4s, box-shadow 0.4s',
    background: scrolled ? 'rgba(251,245,238,0.97)' : 'transparent',
    boxShadow: scrolled ? '0 1px 24px rgba(44,26,18,0.07)' : 'none',
  }

  const links = [
    { href: '#story', label: 'Our Story' },
    { href: '#couple', label: 'The Couple' },
    { href: '#events', label: 'Events' },
  ]

  return (
    <nav style={navStyle}>
      <a href="#hero" style={{ fontFamily: 'var(--font-display)', color: '#2C1A12', fontSize: '24px', lineHeight: 1 }}>
        {couple.brideNickname} &amp; {couple.groomNickname}
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#8B6355', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
            {l.label}
          </a>
        ))}
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        className="md:hidden"
        style={{ background: 'none', border: 'none', fontSize: '22px', color: '#2C1A12', padding: '4px 8px' }}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#FBF5EE', borderTop: '1px solid #EAD8C8',
          padding: '20px 52px', display: 'flex', flexDirection: 'column', gap: '20px',
        }} className="md:hidden">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#8B6355', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
