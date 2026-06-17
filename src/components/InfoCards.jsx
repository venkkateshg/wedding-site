import { useConfig } from '../context/ConfigContext'

const CARD_ORDER = ['dressCode', 'giftRegistry', 'travelStay', 'songDedications']

function CardShell({ icon, title, children }) {
  return (
    <div style={{ background: '#FAF8F4', border: '1px solid #EAD8C8', borderRadius: '14px', padding: '32px 28px' }}>
      <div style={{ width: '46px', height: '46px', background: '#F5EDE3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">{icon}</svg>
      </div>
      <h4 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '22px', fontWeight: 500, marginBottom: '10px' }}>{title}</h4>
      {children}
    </div>
  )
}

export default function InfoCards() {
  const { infoCards } = useConfig()

  function renderCard(key) {
    const card = infoCards[key]
    if (!card || !card.enabled) return null

    const bodyStyle = { fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '14px', lineHeight: 1.8, fontWeight: 300 }

    if (key === 'dressCode') {
      return (
        <CardShell key={key} title={card.title} icon={
          <path d="M8 2 L5 7 L2 6 L5 11 L5 20 L17 20 L17 11 L20 6 L17 7 L14 2 L11 5.5 L8 2Z" stroke="#C4787E" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        }>
          <p style={bodyStyle}>{card.body}</p>
        </CardShell>
      )
    }

    if (key === 'giftRegistry') {
      return (
        <CardShell key={key} title={card.title} icon={<>
          <rect x="2" y="9" width="18" height="11" rx="1.5" stroke="#C4787E" strokeWidth="1.2"/>
          <path d="M2 9 L2 7.5 Q2 6 3.5 6 L18.5 6 Q20 6 20 7.5 L20 9" stroke="#C4787E" strokeWidth="1.2" fill="none"/>
          <path d="M11 6 Q11 3.5 9 3.5 Q7 3.5 7 6 Q7 8.5 11 9.5 Q15 8.5 15 6 Q15 3.5 13 3.5 Q11 3.5 11 6Z" stroke="#C4787E" strokeWidth="1.2" fill="none"/>
          <line x1="11" y1="9.5" x2="11" y2="20" stroke="#C4787E" strokeWidth="1.2"/>
        </>}>
          <p style={{ ...bodyStyle, marginBottom: card.items?.length ? '12px' : 0 }}>{card.intro}</p>
          {card.items?.map((item, i) => (
            <div key={i} style={{ marginBottom: '6px' }}>
              {item.url
                ? <a href={item.url} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '14px', fontWeight: 400 }}>{item.label}</a>
                : <span style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '14px', fontWeight: 400 }}>{item.label}</span>
              }
              {item.note && <span style={{ fontFamily: 'var(--font-sans)', color: '#B09080', fontSize: '13px', fontWeight: 300 }}> — {item.note}</span>}
            </div>
          ))}
        </CardShell>
      )
    }

    if (key === 'travelStay') {
      return (
        <CardShell key={key} title={card.title} icon={<>
          <path d="M3 19 L5 11 L11 5 L17 11 L19 19 Z" stroke="#C4787E" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
          <rect x="8" y="13" width="6" height="6" rx="0.5" stroke="#C4787E" strokeWidth="1.2"/>
          <line x1="11" y1="5" x2="11" y2="3" stroke="#C4787E" strokeWidth="1.2" strokeLinecap="round"/>
        </>}>
          {card.hotels?.map((hotel, i) => (
            <div key={i} style={{ marginBottom: i < card.hotels.length - 1 ? '12px' : 0 }}>
              <p style={{ fontFamily: 'var(--font-sans)', color: '#2C1A12', fontSize: '14px', fontWeight: 500 }}>{hotel.name}</p>
              <p style={bodyStyle}>{hotel.address}{hotel.note ? ` — ${hotel.note}` : ''}</p>
              {hotel.link && <a href={hotel.link} target="_blank" rel="noreferrer" style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '13px', fontWeight: 400 }}>View →</a>}
            </div>
          ))}
        </CardShell>
      )
    }

    if (key === 'songDedications') {
      return (
        <CardShell key={key} title={card.title} icon={<>
          <path d="M9 17 C9 18.7 7.7 20 6 20 C4.3 20 3 18.7 3 17 C3 15.3 4.3 14 6 14 C7.7 14 9 15.3 9 17Z" stroke="#C4787E" strokeWidth="1.2"/>
          <path d="M19 15 C19 16.7 17.7 18 16 18 C14.3 18 13 16.7 13 15 C13 13.3 14.3 12 16 12 C17.7 12 19 13.3 19 15Z" stroke="#C4787E" strokeWidth="1.2"/>
          <path d="M9 17 L9 6 L19 3 L19 15" stroke="#C4787E" strokeWidth="1.2"/>
          <line x1="9" y1="6" x2="19" y2="3" stroke="#C4787E" strokeWidth="1.2"/>
        </>}>
          <p style={bodyStyle}>{card.body}</p>
        </CardShell>
      )
    }

    return null
  }

  return (
    <section id="info" style={{ background: '#FBF5EE', padding: '108px 52px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <div style={{ height: '1px', width: '44px', background: '#EAD8C8' }} />
          <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500 }}>Good to Know</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '54px', fontWeight: 400, fontStyle: 'italic', marginBottom: '56px', lineHeight: 1.1 }}>
          Everything you need
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '22px' }}>
          {CARD_ORDER.map(key => renderCard(key))}
        </div>
      </div>
    </section>
  )
}
