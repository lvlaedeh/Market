import React, { useEffect } from 'react'
import { Button, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { productAction } from '../Action/productAction'

const Product = ({history,match}) => {

    const singleProduct = useSelector((state) => state.singleProduct)
    const {loading , product} = singleProduct
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productAction(match.params.id))
    },[dispatch,match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}`)
    }

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                بازگشت به سبد خرید
            </Link>
            {loading ? <h2>loadind...</h2> : 
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
                            <Button 
                                onClick={addToCartHandler}
                                className="btn-block" type="button">
                                افزودن به سبد خرید
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            }
           
        </div>
    )
}

export default Product
