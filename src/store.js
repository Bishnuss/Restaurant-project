import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {restaurantListReducer} from './Reducers/restaurantReducer'

// Create Reducer
const reducers=combineReducers({

    restaurantReducer:restaurantListReducer
})

// middleware
const middleware=[thunk]

// Create store
const store=createStore(reducers,applyMiddleware(...middleware))


export default store