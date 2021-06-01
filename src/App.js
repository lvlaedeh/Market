import React from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header'
import Cart from './component/pages/Cart'
import Home from './component/pages/Home'
import Product from './component/pages/Product'


const App = () => {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
        </Container>
      </main>
      <Footer/>
    </Router>
  )
}

export default App

