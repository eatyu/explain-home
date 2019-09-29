import {actionTypes} from "@/src/store/actions"

const defaultValue = {
    name: "item",
    desc: "item"
}

const itemReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case actionTypes.ACTUAL:
            return state
        default:
            return defaultValue
    }

}


export default itemReducer





