import React from 'react'
// import { useHistory } from 'react-router-dom'

function Head() {
    // const history = useHistory();
    // function handleClick() {
    //     history.push("/register");
    // }
    return (
        <div className="head">
            <div className="article">
                <h1>HEAL Macrosystem</h1>
                <h2>It's not only your health that matters to us</h2>
                <p>
                    Heal macrosystem is an integrated health services system that gather all health services in one hand.
                    We value the time could be saved from automating the whole process of giving a healthcare service.
                    Hospitals, insurance companies, pharmacies, medical clinics and patients must be connected all together digitally in a way that
                    insures fast and reliable flow of information from one party to another to increase the accuracy and speed of giving a medical service.
                </p>
                <button>LEARN MORE</button>
            </div><div className="head-img"></div>
            {/* <h1 className="main-head">
                <span>HEAL</span> MACROSYSTEMS
            </h1>
            <h4>
                THE ONES WHO CARE ABOUT YOUR <span>HEAL</span>-TH
            </h4>
            <div className="head-btns">

                <button >Learn More</button>
                <button onClick={handleClick}>JOIN US</button>
            </div> */}

        </div>
    )
}

export default Head
