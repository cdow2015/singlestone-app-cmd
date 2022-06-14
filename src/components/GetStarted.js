import React from 'react'
import Button from './Button'

function GetStarted() {
  return (
    //Background photo covers whole section
    <section className="photoBackground">
        {/* But text needs to be addressed and styled differently */}
        <div className="gettingStarted">
        <p>New Games & Accessories</p>
        {/* Below is an example of using in-line css styling for specific small elements. The rest of the styling for this app is done
        in App.css. Styled components or style objects could also be used, if desired, but were not used in this app.*/}
        <p style={{fontSize: 'xx-large', margin: '0px'}}>Montly packages. Excitment delivered daily.</p>
        <p style={{fontSize: 'small', fontWeight:'400'}}>What's the best way to shop for the latest video games
            and peripherals? How about never shopping at all?
            You'll get new stuff on your doorstep - every month.</p>
          {/* Pass desired text and link to the Button component */}
        <Button text="GET STARTED" link="https://www.google.com" />
        </div>
    </section>
  )
}

export default GetStarted;