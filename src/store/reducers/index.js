import { combineReducers } from 'redux'
import { PurchasesReducer } from './purchasesReducer';


const RootReducer = combineReducers({
    purchases: PurchasesReducer
})

export default RootReducer;