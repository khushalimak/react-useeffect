import { BUY_CAKE} from "./type";

const initialState = {
    numOfCakes:10,
}

 export const Cakereducer = (state = initialState , action) => {
    switch(action.type){
         case BUY_CAKE:return{
              ...state,
              numOfCakes:state.numOfCakes - 1
         }
         default:return state
    }
}
