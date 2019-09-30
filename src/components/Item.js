/**
 * 万物之始，以为元初
 */
import React from "react"
import {actionTypes} from "@/src/store/actions"
import {connect} from "react-redux"

const ItemValue = {
    name: "explain-home item",
    desc: "the beginning of this project"
}

class ItemC extends React.Component {

    constructor(props) {
        super(props)
        // this.state = ItemValue
    }

    render() {
        const {ItemValue, actual} = this.props
        return (
            <dev>
                <p>{ItemValue.name}</p>
                <p>{ItemValue.desc}</p>
                <button onClick={actual}>change</button>
            </dev>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ItemValue: state.itemReducer.ItemValue
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actual: () => dispatch({type: actionTypes.ACTUAL, ItemValue}),
    }
}

let Item = connect(mapStateToProps, mapDispatchToProps)(ItemC)


export default Item