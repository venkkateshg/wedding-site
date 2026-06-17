import './index.css'
import { ConfigProvider } from './context/ConfigContext'
import ThemeProvider from './components/ThemeProvider'
import Layout from './components/Layout'

export default function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <Layout>
          <section id="hero" style={{ minHeight: '100vh' }} />
          <section id="story" style={{ minHeight: '50vh' }} />
          <section id="couple" style={{ minHeight: '50vh' }} />
          <section id="events" style={{ minHeight: '50vh' }} />
          <section id="info" style={{ minHeight: '50vh' }} />
          <section id="rsvp" style={{ minHeight: '50vh' }} />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  )
}
