import React from 'react'
import './Loader.scss'
function Loader({ message }) {
  return (

    <h3>{message}
      <div id="maincontainer">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </h3>

  )
}

export default Loader