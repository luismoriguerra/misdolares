
import { PurchasesActionTypes } from '../actions/PurchaseActions';


export const getAll = (purchases) => {
  return Object.keys(purchases).map( key => purchases[key] );
}



export function PurchasesReducer ( state = {}, action) {
    switch (action.type) {
        case PurchasesActionTypes.add:
        case PurchasesActionTypes.edit:
            return { ...state , [action.payload.id]: {...action.payload}};
        case PurchasesActionTypes.remove: 
            const newState = {...state };
            delete newState[action.payload];
            return { ...newState }
        default:
            break;
    }

    return state;
}