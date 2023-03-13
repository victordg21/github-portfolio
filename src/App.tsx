import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/About'
import Projects from './containers/Projects'
import temaLight from './themes/light'
import temaDark from './themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function changeTheme() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <Sobre />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
