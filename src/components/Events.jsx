import { useConfig } from '../context/ConfigContext'

function EventCard({ event }) {
  return (
    <div style={{ flex: 1, minWidth: '280px', background: '#FFFCF8', border: '1px solid #EAD8C8', borderRadius: '14px', padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #C4787E, #C9A87C)' }} />
      <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 600, marginBottom: '18px' }}>{event.title}</p>
      <h3 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '34px', fontWeight: 400, lineHeight: 1, marginBottom: '3px' }}>{event.date}</h3>
      <p style={{ fontFamily: 'var(--font-serif)', color: '#8B6355', fontSize: '18px', fontWeight: 300, fontStyle: 'italic', marginBottom: '22px' }}>{event.year}</p>
      <div style={{ height: '1px', background: '#F0E0D0', marginBottom: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#C4787E" strokeWidth="1.1"/>
            <path d="M7.5 4.5 L7.5 7.5 L10 10" stroke="#C4787E" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '14px', fontWeight: 300 }}>{event.time}</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0, marginTop: '1px' }}>
            <path d="M7.5 1.5 C5 1.5 3 3.5 3 6 C3 9.5 7.5 13.5 7.5 13.5 C7.5 13.5 12 9.5 12 6 C12 3.5 10 1.5 7.5 1.5Z" stroke="#C4787E" strokeWidth="1.1"/>
            <circle cx="7.5" cy="6" r="1.8" stroke="#C4787E" strokeWidth="1.1"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '14px', fontWeight: 300 }}>{event.venue}</span>
        </div>
      </div>
      {event.mapUrl && (
        <a href={event.mapUrl} target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F5EDE3', border: '1px solid #EAD8C8', borderRadius: '22px', padding: '9px 20px', fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#8B6355', letterSpacing: '1.5px', textTransform: 'uppercase', fontWeight: 500 }}>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M5.5 1 C3.6 1 2 2.6 2 4.5 C2 7.5 5.5 10.5 5.5 10.5 C5.5 10.5 9 7.5 9 4.5 C9 2.6 7.4 1 5.5 1Z" stroke="#C4787E" strokeWidth="1.1"/>
            <circle cx="5.5" cy="4.5" r="1.5" fill="#C4787E"/>
          </svg>
          Get Directions
        </a>
      )}
    </div>
  )
}

export default function Events() {
  const { locations } = useConfig()

  return (
    <section id="events" className="section-pad" style={{ background: '#FAF0E8' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <div style={{ height: '1px', width: '44px', background: '#E0C8B8' }} />
          <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500 }}>Celebrations</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '54px', fontWeight: 400, fontStyle: 'italic', marginBottom: '20px', lineHeight: 1.1 }}>
          Schedule of events
        </h2>
        <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '15px', fontWeight: 300, lineHeight: 1.8, marginBottom: '64px', maxWidth: '600px' }}>
          We would be overjoyed to have you celebrate with us. Mark your calendars and join us for an evening of love, laughter, and togetherness — your presence is what makes it truly special.
        </p>

        {locations.map((location, li) => (
          <div key={li} style={{ marginBottom: li < locations.length - 1 ? '52px' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
              <div style={{ height: '1px', flex: 1, background: '#E0C8B8' }} />
              <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 600 }}>{location.name}</p>
              <div style={{ height: '1px', flex: 1, background: '#E0C8B8' }} />
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {location.events.map((event, ei) => (
                <EventCard key={ei} event={event} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
