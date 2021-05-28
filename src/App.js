import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'


const App = () => {
  return (
    <div>
      <Header/>
      <main className="py-3">
        <Container>
          <h2>FC Market</h2>
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default App

