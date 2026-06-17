import './index.css'
import { ConfigProvider } from './context/ConfigContext'
import ThemeProvider from './components/ThemeProvider'
import Layout from './components/Layout'
import Hero from './components/Hero'
import OurStory from './components/OurStory'

export default function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <Layout>
          <Hero />
          <OurStory />
          <section id="couple" style={{ minHeight: '50vh' }} />
          <section id="events" style={{ minHeight: '50vh' }} />
          <section id="info" style={{ minHeight: '50vh' }} />
          <section id="rsvp" style={{ minHeight: '50vh' }} />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  )
}
