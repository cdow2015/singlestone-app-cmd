import React from 'react'

function Button({text, link}) {
  //Create reusable link button component, so that it can be used again througout the app with the same styling-- 
  //only need to change link and text if necessary. 
  //This button opens the link in a new tab, but that can be changed by deleted 'target' and 'rel' props.
  //Or, if this button will go to an internal link/another page within the app, something like React Router could be used instead of a link.
  return (
    <a class="btn" className={"linkButton"} href={link} target="_blank" rel="noreferrer">{text}</a>
  )
}

export default Button;