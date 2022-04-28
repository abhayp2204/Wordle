import React from "react"
import Letter from "./Letter"
import "../css/Word.css"

function Word(props) {
    const { word } = props
    const wordLength = 5
    let letters = []

    for(let i = 0; i < wordLength; i++) {
        letters.push(
            <Letter alphabet={word[i]} />
        )
    }

    return (
        <div className="word">
            {letters}
        </div>
    )
}

export default Word