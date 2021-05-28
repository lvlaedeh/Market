import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <a href={`/product/${product._id}`}>
                    <Card.Img src={product.image} variant="top" />
                </a>
                <Card.Body>
                    <a href={`/product/${product._id}`}>
                        <Card.Title as='div'>{product.name}</Card.Title>
                    </a>
                    <Card.Text>Price : {product.price}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product

