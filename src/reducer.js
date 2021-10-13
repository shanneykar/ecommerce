import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex(
                    (basketItem)=>basketItem.id === action.id
                )
                let newBasketItem = [...state.basket]

                if (index >= 0){
                    newBasketItem.splice(index,1);
                }
                else{
                    console.warn("cant remove");
                }
                return{
                    ...state,
                    basket: newBasketItem,
                };
        
                case 'SET_USER':
                    return{
                        ...state,
                        user:action.user
                    };

        default: 
            return state;
    }
};

export default reducer;
