import { Provider } from 'jotai'
import { ThemeProvider } from 'styled-components'

import Home from './pages/Home'

import GlobalStyles from './styles/global'

function App() {
  return (
    <Provider>
      <GlobalStyles />
      <Home />
    </Provider>
  )
}

export default App
