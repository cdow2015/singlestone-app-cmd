import React from 'react';
import {ReactComponent as Image} from '../images/logo-endless.svg';

function Header() {
  return (
    <div className="header">
      {/* Use imported image/class and pass fill color and class name */}
        <Image className="logoImage" fill="#5adac5"></Image>
    </div>
  )
}

export default Header;