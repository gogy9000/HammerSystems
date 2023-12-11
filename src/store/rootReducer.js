import { combineReducers } from 'redux'
import theme from './slices/themeSlice'
import auth from './slices/authSlice'
import {baseApi} from "../api";
import { constructionReducer } from "../features/planner/Canvas/Constructions/slice";
import { furnitureReducer } from "../features/planner/Canvas/Furniture/slice";
import { sharedReducer } from "../features/planner/Canvas/shared/sharedSlice";

const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        theme,
        auth,
        constructionReducer,
        furnitureReducer,
        sharedReducer,
        ...asyncReducers,
        [baseApi.reducerPath]:baseApi.reducer
    })
    return combinedReducer(state, action)
}
  
export default rootReducer
