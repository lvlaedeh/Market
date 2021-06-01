import axios from "axios"

export const productListAction = () => async (dispatch) =>{
    try {
        dispatch({type : 'PRODUCT-LIST-REQUEST'})

        const {data} = await axios.get('http://localhost:8000/api/products')

        dispatch({
            type : 'PRODUCT-LIST-SUCCESS' , 
            payload : data ,
        })

    } catch (error) {
        console.log(error);
    }
}

export const productAction = (id) => async (dispatch) => {
    try {
        dispatch({type : 'PRODUCT-REQUEST'})
        const {data} = await axios.get(`http://localhost:8000/api/products/${id}`)
        dispatch ({type :'PRODUCT-SUCCESS' , payload : data})
    } catch (error) {
        console.log(error);
    }
}