export const productListReducer = (state={product : []},action) =>{
    switch (action.type){
        case 'PRODUCT-LIST-REQUEST' :
            return {loding : true , product: []}
        case 'PRODUCT-LIST-SUCCESS' :
            return {loding : false , product: action.payload}
        default : return state        
    }
}