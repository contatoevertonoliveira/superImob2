import React, { useState } from 'react';
import './styles.scss';

function Button(props){

  const links = [props.text]
  const [activeClass, setActiveClass] = useState("linkButton");


  return(
    <React.Fragment>
      {links.map(text => (
        <button
          className={activeClass}
          key={text}
          type="submit"
          onClick={props.handleClick}
          active={text ? true : false}
          >
          {props.icon}
          {text}
        </button>
      ))}
    </React.Fragment>
  )
}



export default Button;