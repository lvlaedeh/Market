import React, { useEffect } from 'react'
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCartItem } from '../Action/cartAction'

const Cart = ({match}) => {

    const cart = useSelector((state)=>state.cart)
    const {cartItems} = cart
    const productId = match.params.id
    const dispatch = useDispatch()

    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId))
        }
    },[dispatch,productId])
    console.log(cartItems);

    const removeItems = (id) => {
        dispatch(removeCartItem(id))
    }

    return (
        <div>
            <Row>
                <Col md={8}>
                    <h2>سبد خرید</h2>
                    {cartItems.length === 0 ? <p>سبد خرید خالی است</p> :(
                        <ListGroup variant="flush">
                           {cartItems.map((item)=>(
                            
                               <ListGroup.Item key={item.product}>
                                   <Row>
                                       <Col md={2}>
                                           <Image src={item.image} alt={item.name} fluid rounded/> 
                                       </Col>
                                       <Col md={3}>
                                           {item.name}
                                       </Col>
                                       <Col md={2}>
                                           {item.price}
                                       </Col>
                                       <Button type="button" variant="light" onClick={()=> removeItems(item.product)}>
                                           <i className="fa fa-trash"></i>
                                       </Button>
                                   </Row>
                               </ListGroup.Item>
                                ))} 
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                مجموع قیمت : {cartItems.reduce((acc,item)=> acc + item.price,0)}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            
            </Row>
        </div>
    )
}

export default Cart
