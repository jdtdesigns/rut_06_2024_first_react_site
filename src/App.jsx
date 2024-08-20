import { useState } from 'react'

import Header from './components/Header'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const title = 'My Portfolio'
  const [page, setPage] = useState('Home')

  const renderPage = (pageName) => {
    switch (pageName) {
      case 'Home':
        return <Home />
      case 'About':
        return <About />
      default:
        return <Contact />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} title={title} />

      {renderPage(page)}
    </>
  )
}

export default App