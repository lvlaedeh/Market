import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({match}) => {

    const [product,setProduct] = useState({})

    useEffect(()=>{
        const sentReqest = async () =>{
            const reponse = await axios.get(`http://localhost:8000/api/products/${match.params.id}`)
            setProduct(reponse.data)
        }
        sentReqest()
    },[match])

    // const product = products.find((item)=>{
    //     return item._id === match.params.id
    // })

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                بازگشت به سبد خرید
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image}/>
                </Col>
                <Col md={3} >
                    <ListGroup variant="flush">
                        <ListGroup.Item><h3>{product.name}</h3></ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                        <ListGroup.Item>{product.price}</ListGroup.Item>
                    </ListGroup>              
                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button">
                                افزودن به سبد خرید
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default Product
