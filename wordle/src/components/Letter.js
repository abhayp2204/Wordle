import React from "react"
import "../css/Letter.css"

function Letter(props) {
    const { alphabet } = props

    return (
        <div className="letter">
            {alphabet}
        </div>
    )
}

export default Letter