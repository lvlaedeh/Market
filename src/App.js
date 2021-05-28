import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/pages/Home'


const App = () => {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          <Home/>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App

