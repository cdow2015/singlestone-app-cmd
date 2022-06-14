import React from 'react'

function Step({stepNumber, title, text}) {
 
  //Display a div with the step number, title, and text
  //This component is reusable so that as many Steps can be rendered as needed based on retrieved data.
  return (
    <div className="step">
        <p className="stepNumber">{"0"+stepNumber}</p>
        <p className="stepTitle">{title}</p>
        <p className="stepText">{text} </p>

    </div>
  )
}

export default Step;