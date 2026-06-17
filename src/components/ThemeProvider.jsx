import { useEffect } from 'react'
import { useConfig } from '../context/ConfigContext'

export default function ThemeProvider({ children }) {
  const { theme } = useConfig()

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--color-bg', theme.colorBg)
    root.style.setProperty('--color-accent', theme.colorAccent)
    root.style.setProperty('--color-text', theme.colorText)
    root.style.setProperty('--color-muted', theme.colorMuted)
    root.style.setProperty('--color-border', theme.colorBorder)
    root.style.setProperty('--font-display', theme.fontDisplay)
    root.style.setProperty('--font-serif', theme.fontSerif)
    root.style.setProperty('--font-sans', theme.fontSans)
    document.body.style.background = theme.colorBg
    document.body.style.color = theme.colorText
  }, [theme])

  return <>{children}</>
}
