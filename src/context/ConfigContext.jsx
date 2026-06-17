import { createContext, useContext } from 'react'
import config from '../config/wedding.config.json'

const ConfigContext = createContext(config)

export function ConfigProvider({ children }) {
  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  )
}

export function useConfig() {
  return useContext(ConfigContext)
}
