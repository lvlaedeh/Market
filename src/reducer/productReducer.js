export const productListReducer = (state={products : []},action) =>{
    switch (action.type){
        case 'PRODUCT-LIST-REQUEST' :
            return {loading : true , products: []}
        case 'PRODUCT-LIST-SUCCESS' :
            return {loading : false , products: action.payload}
        default : return state        
    }
}