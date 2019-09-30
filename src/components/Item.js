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

class Item extends React.Component {

    constructor(props) {
        super(props)
        // this.state = ItemValue
    }

    render() {
        const { ItemValue,actual} = this.props
        return (
            <div>
                <p>{ItemValue.name}</p>
                <p>{ItemValue.desc}</p>
                <p>{this.props.com_name}</p>
                <button onClick={actual}>change</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // return {
    //     ItemValue: state.itemReducer.ItemValue
    // }
    return state.itemReducer
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actual: () => dispatch({type: actionTypes.ACTUAL, ItemValue}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item)
