import { DECREASE_ITEM, INCREASE_ITEM } from "./Types"

export const increaseItem = () => {
    return {
        type: INCREASE_ITEM
    }
}
export const decreaseItem = () =>{
    return {
        type: DECREASE_ITEM
    }
}