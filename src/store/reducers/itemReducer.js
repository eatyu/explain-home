import {actionTypes} from "@/src/store/actions"

const defaultValue = {
    ItemValue:
        {
            name: "item",
            desc: "item"
        }
}

const itemReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case actionTypes.ACTUAL:
            return {ItemValue:action.ItemValue}
        default:
            return state
    }

}


export default itemReducer





