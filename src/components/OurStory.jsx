import { useConfig } from '../context/ConfigContext'
import assets from '../assets.js'

export default function OurStory() {
  const { couple, story } = useConfig()

  return (
    <section id="story" style={{ background: '#FAF8F4', padding: '108px 52px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <div style={{ height: '1px', width: '44px', background: '#EAD8C8' }} />
          <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500 }}>Our Story</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '54px', fontWeight: 400, fontStyle: 'italic', marginBottom: '60px', lineHeight: 1.1 }}>
          {story.heading}
        </h2>

        {/* Two-column */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '72px', flexWrap: 'wrap' }}>

          {/* Photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ width: '300px', height: '400px', borderRadius: '150px 150px 80px 80px', overflow: 'hidden', border: '3px solid #EAD8C8', boxShadow: '0 16px 48px rgba(196,120,126,0.12)' }}>
              <img
                src={assets[couple.coupleImageKey]}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                alt="Our Story"
              />
            </div>
          </div>

          {/* Timeline */}
          <div style={{ flex: 1, minWidth: '280px', paddingTop: '8px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '44px' }}>
              {story.chapters.map((chapter, i) => (
                <div key={i} style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#C4787E', marginTop: '5px' }} />
                    {i < story.chapters.length - 1 && (
                      <div style={{ width: '1px', flex: 1, background: '#EAD8C8', marginTop: '8px' }} />
                    )}
                  </div>
                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '8px' }}>
                      {chapter.label}
                    </p>
                    <h3 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '26px', fontWeight: 500, marginBottom: '10px' }}>
                      {chapter.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '15px', lineHeight: 1.85, fontWeight: 300 }}>
                      {chapter.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
