import { useConfig } from '../context/ConfigContext'
import assets from '../assets.js'

export default function Couple() {
  const { couple } = useConfig()

  const cardStyle = {
    flex: 1, minWidth: '280px', display: 'flex', flexDirection: 'column',
    alignItems: 'center', textAlign: 'center',
  }

  const photoContainerStyle = {
    width: '268px', height: '340px',
    borderRadius: '134px 134px 68px 68px',
    overflow: 'hidden', border: '3px solid #EAD8C8',
    marginBottom: '32px',
    boxShadow: '0 12px 40px rgba(196,120,126,0.13)',
  }

  const imgStyle = { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }

  function PersonCard({ imageKey, role, name, nickname, bio }) {
    return (
      <div style={cardStyle}>
        <div style={photoContainerStyle}>
          <img src={assets[imageKey]} style={imgStyle} alt={name} />
        </div>
        <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '10px', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: 500, marginBottom: '8px' }}>
          {role}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', color: '#2C1A12', fontSize: '52px', lineHeight: 1, marginBottom: '5px' }}>
          {name}
        </h3>
        <p style={{ fontFamily: 'var(--font-serif)', color: '#B09080', fontSize: '16px', fontStyle: 'italic', marginBottom: '20px' }}>
          &ldquo;{nickname}&rdquo;
        </p>
        <div style={{ height: '1px', width: '44px', background: '#EAD8C8', marginBottom: '18px' }} />
        <p style={{ fontFamily: 'var(--font-sans)', color: '#8B6355', fontSize: '15px', lineHeight: 1.85, fontWeight: 300, maxWidth: '300px' }}>
          {bio}
        </p>
      </div>
    )
  }

  return (
    <section id="couple" className="section-pad" style={{ background: '#FBF5EE' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
          <div style={{ height: '1px', width: '44px', background: '#EAD8C8' }} />
          <p style={{ fontFamily: 'var(--font-sans)', color: '#C4787E', fontSize: '11px', letterSpacing: '5px', textTransform: 'uppercase', fontWeight: 500 }}>The Couple</p>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', color: '#2C1A12', fontSize: '54px', fontWeight: 400, fontStyle: 'italic', marginBottom: '72px', lineHeight: 1.1 }}>
          Meet the lovebirds
        </h2>

        <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap', justifyContent: 'center' }}>
          <PersonCard
            imageKey={couple.brideImageKey}
            role="The Bride"
            name={couple.brideName}
            nickname={couple.brideNickname}
            bio={couple.brideBio}
          />

          <div className="couple-divider-desktop" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 12px 0' }}>
            <div style={{ height: '80px', width: '1px', background: '#EAD8C8' }} />
            <p style={{ fontFamily: 'var(--font-serif)', color: '#C4787E', fontSize: '36px', fontWeight: 300, margin: '14px 0' }}>&amp;</p>
            <div style={{ height: '80px', width: '1px', background: '#EAD8C8' }} />
          </div>
          <div className="couple-divider-mobile" style={{ width: '100%', textAlign: 'center', padding: '8px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', color: '#C4787E', fontSize: '36px', fontWeight: 300, margin: 0 }}>&amp;</p>
          </div>

          <PersonCard
            imageKey={couple.groomImageKey}
            role="The Groom"
            name={couple.groomName}
            nickname={couple.groomNickname}
            bio={couple.groomBio}
          />
        </div>
      </div>
    </section>
  )
}
