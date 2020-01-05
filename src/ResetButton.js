import React from 'react'
import "./ResetButton.css"
const ResetButton = (props) => {
    
    const clickHandler = () => {
        props.resetDates()
    }

    return (
        
        <div className="reset">
        <button className="resetButton" onClick={clickHandler}>RESET</button>
        <span><p style={{marginLeft: "10px", fontWeight:"600"}}>
      Click to reset the page to the last 7 days</p>
        </span>
        </div>
    )

}

export default ResetButton