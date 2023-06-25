import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import {baseApi} from "../api";

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        ...asyncReducers,
        [baseApi.reducerPath]:baseApi.reducer
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
