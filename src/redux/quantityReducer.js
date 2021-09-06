import { DECREASE_ITEM, INCREASE_ITEM } from "./Types"

const initialState = {
    quantity : 0
}

const quantityReducer = (state=initialState,action) =>{
    switch(action.type){
        case INCREASE_ITEM:return{
            ...state,
            quantity:state.quantity+1
        }
        case DECREASE_ITEM:return{
            ...state,
            quantity:state.quantity<=0 ? 0 : state.quantity-1
        }
        default:return state
    }
}

export default quantityReducer