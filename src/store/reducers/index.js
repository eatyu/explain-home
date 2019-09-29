import {actions} from "@/src/store/actions"
import {combineReducers} from "redux"
import itemReducer from "@/src/store/reducers/ItemReducer"


const rootReducer = combineReducers({itemReducer})


export default rootReducer