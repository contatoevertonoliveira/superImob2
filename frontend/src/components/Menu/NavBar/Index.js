import React from 'react';
import ItemMenu from '../ItemMenu/Index';
import './style.scss';

function NavBar(){
  
  return(
    <React.Fragment>
      <nav>
        <header><h5>superImob 1.0</h5></header>
        <ItemMenu />
      </nav>
    </React.Fragment>    
  );
}

export default NavBar;