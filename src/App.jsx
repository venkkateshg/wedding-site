import './index.css'
import { ConfigProvider } from './context/ConfigContext'
import ThemeProvider from './components/ThemeProvider'

export default function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <div>
          <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-accent)', fontSize: '3rem' }}>
            Wedding App — Coming Soon
          </h1>
        </div>
      </ThemeProvider>
    </ConfigProvider>
  )
}
