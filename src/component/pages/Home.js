import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import Product from '../product/product'

const Home = () => {
    const [products,setproducts] = useState([])

    useEffect(()=>{
        const sendReqest = async () => {
             const response = await axios.get('http://localhost:8000/api/products')
             setproducts(response.data)
        }
        sendReqest()
    },[])

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
