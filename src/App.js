import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Home from './component/pages/Home'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App

