import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from '../../products'
import Product from '../product/product'

const Home = () => {
    return (
        <div>
            <h1>محصولات</h1>
            <Row>
                {products.map((item)=>{
                    return (
                        <Col key={item._id} sm={12} md={6} lg={4}>
                            <Product product={item} />
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Home
