import { useState, useEffect } from 'react'

export default function useCountdown(targetIso) {
  const [time, setTime] = useState({ days: '00', hours: '00', mins: '00', secs: '00' })

  useEffect(() => {
    function tick() {
      const diff = new Date(targetIso) - Date.now()
      if (diff <= 0) {
        setTime({ days: '00', hours: '00', mins: '00', secs: '00' })
        return
      }
      const p = n => String(Math.floor(n)).padStart(2, '0')
      setTime({
        days:  p(diff / 86400000),
        hours: p((diff % 86400000) / 3600000),
        mins:  p((diff % 3600000) / 60000),
        secs:  p((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetIso])

  return time
}
