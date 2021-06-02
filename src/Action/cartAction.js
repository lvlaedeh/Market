import axios from "axios"

export const addToCart = (id) => async (dispatch,getState) =>{
    try {
        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
        dispatch({
                    type: 'CART-ADD-ITEM' , 
                    paylod:{
                        product : data._id,
                        name: data.name,
                        image:data.image,
                        price:data.price,
                    }     
                })
        localStorage.getItem('cartItems',JSON.stringify(getState().cart.cartItems))
                
    } catch (error) {
        console.log(error)
    }
}