import { useState } from 'react'
import { useConfig } from '../context/ConfigContext'

const inputStyle = {
  width: '100%', background: '#FAF8F4', border: '1px solid #EAD8C8',
  borderRadius: '8px', padding: '13px 16px',
  fontFamily: 'var(--font-sans)', fontSize: '15px', color: '#2C1A12', fontWeight: 300,
}

const labelStyle = {
  display: 'block', fontFamily: 'var(--font-sans)', fontSize: '11px',
  color: '#8B6355', letterSpacing: '2px', textTransform: 'uppercase',
  fontWeight: 500, marginBottom: '8px',
}

export default function RsvpForm() {
  const { rsvp } = useConfig()
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [attending, setAttending] = useState('yes')
  const [guests, setGuests] = useState('2')
  const [dietary, setDietary] = useState('')
  const [song, setSong] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) { setError('Please enter your full name.'); return }
    if (!email.trim() || !email.includes('@')) { setError('Please enter a valid email address.'); return }
    setError('')
    const { actionUrl, entryIds } = rsvp.googleForm
    if (actionUrl) {
      fetch(actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams({
          [entryIds.name]: name,
          [entryIds.email]: email,
          [entryIds.attending]: attending,
          [entryIds.guests]: guests,
          [entryIds.dietary]: dietary,
          [entryIds.song]: song,
        }),
      })
    }
    setSubmitted(true)
  }

  return (
    <section id="rsvp" style={{ background: '#F5EDE3', padding: '108px 52px' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <div style={{ height: '1px', width: '44px', background: '#E0C8B8' }} />
          <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500 }}>RSVP</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '54px', fontWeight: 400, fontStyle: 'italic', marginBottom: '12px', lineHeight: 1.1 }}>
          Will you join us?
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, marginBottom: '52px' }}>
          {rsvp.deadlineText} We can't wait to celebrate with you!
        </p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '72px 48px', background: '#FFFCF8', borderRadius: '16px', border: '1px solid #EAD8C8' }}>
            <div style={{ width: '64px', height: '64px', background: '#F5EDE3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <circle cx="13" cy="13" r="11" stroke="#C4787E" strokeWidth="1.4"/>
                <path d="M7.5 13 L11.5 17 L18.5 9.5" stroke="#C4787E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: '#2C1A12', fontSize: '52px', marginBottom: '14px' }}>Thank you!</h3>
            <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '15px', fontWeight: 300, lineHeight: 1.75, maxWidth: '360px', margin: '0 auto' }}>
              We've received your RSVP and we absolutely cannot wait to celebrate with you. See you on August 31st! 🌸
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ background: '#FFFCF8', border: '1px solid #EAD8C8', borderRadius: '16px', padding: '48px 44px', display: 'flex', flexDirection: 'column', gap: '26px' }}>
            <div>
              <label htmlFor="rsvp-name" style={labelStyle}>Your Full Name *</label>
              <input id="rsvp-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Firstname Lastname" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="rsvp-email" style={labelStyle}>Email Address *</label>
              <input id="rsvp-email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="rsvp-attending" style={labelStyle}>Will you be attending?</label>
              <select id="rsvp-attending" value={attending} onChange={e => setAttending(e.target.value)} style={inputStyle}>
                <option value="yes">Yes, I'll be there! 🎉</option>
                <option value="no">Sorry, can't make it</option>
              </select>
            </div>
            <div>
              <label htmlFor="rsvp-guests" style={labelStyle}>Number of Guests</label>
              <select id="rsvp-guests" value={guests} onChange={e => setGuests(e.target.value)} style={inputStyle}>
                <option value="1">Just me</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
                <option value="5">5+ guests</option>
              </select>
            </div>
            <div>
              <label htmlFor="rsvp-dietary" style={labelStyle}>Dietary Requirements</label>
              <input id="rsvp-dietary" type="text" value={dietary} onChange={e => setDietary(e.target.value)} placeholder="Vegetarian, vegan, allergies…" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="rsvp-song" style={labelStyle}>🎵 Song Dedication</label>
              <input id="rsvp-song" type="text" value={song} onChange={e => setSong(e.target.value)} placeholder="Song name · Artist — we'll add it to our playlist!" style={inputStyle} />
            </div>
            {error && (
              <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '14px', fontWeight: 400, marginTop: '-8px' }}>{error}</p>
            )}
            <button type="submit" style={{ background: '#C4787E', color: '#fff', border: 'none', borderRadius: '28px', padding: '16px 44px', fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500, letterSpacing: '2px', textTransform: 'uppercase', alignSelf: 'flex-start', cursor: 'pointer' }}>
              Send RSVP ✦
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
