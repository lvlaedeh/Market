import axios from "axios"

export const productListAction = () => async (dispath) =>{
    try {
        dispath({type : 'PRODUCT-LIST-REQUEST'})

        const {data} = await axios.get('http://localhost:8000/api/products')

        dispath({
            type : 'PRODUCT-LIST-SUCCESS' , 
            payload : data ,
        })

    } catch (error) {
        console.log(error);
    }
}