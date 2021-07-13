import React from 'react'
import './Loader.scss'
function Loader({ message }) {
  return (

    <div id="maincontainer">
      <h3 style={{textAlign:"center"}}>{message}
        <div className="loader" style={{marginTop:"2rem"}}>
          <span key="1"></span>
          <span key="12"></span>
          <span key="13"></span>
          <span key="14"></span>
          <span key="15"></span>
        </div>
      </h3>
    </div>

  )
}

export default Loader