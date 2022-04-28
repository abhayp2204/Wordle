import React, { useState } from "react"
import Word from "./Word"
import "../css/Space.css"

function Space() {
    return (
        <div className="space">
            <div className="pad">
                <Word word="RUTHU"/>
                <Word word="ABHAY"/>
                <Word word="HELLO"/>
                <Word word="SEEMA"/>
                <Word word="NEHAA"/>
                <Word word="SARAH"/>
            </div>
        </div>
    )
}

export default Space