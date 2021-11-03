import React from 'react';

function Header(props){

  return(
    <React.Fragment>

      <nav className="navbar navbar-light" style={{"backgroundColor":"#e3f2fd","padding":"10px","marginBottom":"10px"}}>
          <b>* {props.text}</b>
          {props.icon}
      </nav>
    
    </React.Fragment>
  )
}

export default Header;