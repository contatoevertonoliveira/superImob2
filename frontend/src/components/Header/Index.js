import React from 'react';

function Header(props){

  return(
    <React.Fragment>
      <div class="alert alert-primary mt-3 alert-link" role="alert">
          {props.text}
      </div>
    </React.Fragment>
  )
}

export default Header;