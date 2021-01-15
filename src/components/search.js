import React from "react"

function Search(props) {
    return (

        <input type="text" placeholder="Search for a name here" onChange={props.handleInputChange}></input>
    )
}
export default Search