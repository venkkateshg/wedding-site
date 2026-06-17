import './index.css'
import { ConfigProvider } from './context/ConfigContext'
import ThemeProvider from './components/ThemeProvider'
import Layout from './components/Layout'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Couple from './components/Couple'
import Events from './components/Events'

export default function App() {
  return (
    <ConfigProvider>
      <ThemeProvider>
        <Layout>
          <Hero />
          <OurStory />
          <Couple />
          <Events />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  )
}
