import React from 'react'
import { useHistory } from 'react-router-dom'

function Head() {
    const history = useHistory();
    function handleClick() {
        history.push("/register");
    }
    return (
        <>
            <h1 className="main-head">
                <span>HEAL</span> MACROSYSTEMS
            </h1>
            <h4>
                THE ONES WHO CARE ABOUT YOUR <span>HEAL</span>-TH
            </h4>
            <div className="head-btns">

                <button >Learn More</button>
                <button onClick={handleClick}>JOIN US</button>
            </div>
        </>
    )
}

export default Head
