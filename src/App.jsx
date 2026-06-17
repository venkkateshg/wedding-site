import './index.css'
import { ConfigProvider } from './context/ConfigContext'
import ThemeProvider from './components/ThemeProvider'
import Layout from './components/Layout'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Couple from './components/Couple'
import Events from './components/Events'
import InfoCards from './components/InfoCards'
import RsvpForm from './components/RsvpForm'

export default function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <Layout>
          <Hero />
          <OurStory />
          <Couple />
          <Events />
          <InfoCards />
          <RsvpForm />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  )
}
