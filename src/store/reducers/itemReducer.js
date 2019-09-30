import {actionTypes} from "@/src/store/actions"

const defaultValue = {
    ItemValue:
        {
            name: "item",
            desc: "item"
        },
    com_name:"item"
}

const itemReducer = (state = defaultValue, action) => {
    switch (action.type) {
        case actionTypes.ACTUAL:
            // return Object.assign({}, state,{com_name:"jerry"})
            return Object.assign({}, state,{ItemValue:action.ItemValue,com_name:"jerry"})
        default:
            return state
    }

}


export default itemReducer





