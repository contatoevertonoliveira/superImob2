import React from 'react';
import './styles.scss';

function Button(props){

  const links = [props.text]

  return(
    <React.Fragment>
      {links.map(text => (
        <button
          className='linkButton'
          key={text}
          type="submit"
          onClick={props.handleClick}
          >
          {props.icon}
          {props.text}
        </button>
      ))}
    </React.Fragment>
  )
}



export default Button;