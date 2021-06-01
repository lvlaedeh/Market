import React, { useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productListAction } from '../../Action/productAction'

import Product from '../product/product'

const Home = () => {
    // const [products,setproducts] = useState([])

    const productList = useSelector((state)=> state.productList)
    const {loading , products} = productList

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(productListAction())
        // const sendReqest = async () => {
        //      const response = await axios.get('http://localhost:8000/api/products')
        //      setproducts(response.data)
        // }
        // sendReqest()
    },[dispatch])

    return (
        <div>
            <h1>محصولات</h1>
            {loading ? <h2>loading...</h2> : 
            <Row>
                {products.map((item)=>{
                    return (
                        <Col key={item._id} sm={12} md={6} lg={4}>
                            <Product product={item} />
                        </Col>
                    )
                })}
            </Row> 
            }
           
        </div>
    )
}

export default Home
