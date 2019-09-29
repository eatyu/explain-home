/**
 * 万物之始，以为元初
 */
import React from "react"

class Item extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:"explain-home item",
            desc:"the beginning of this project"
        }
    }



    render() {
        return (
            <dev>
                <p>{this.state.name}</p>
                <p>{this.state.desc}</p>
            </dev>
        )
    }


}


export default Item