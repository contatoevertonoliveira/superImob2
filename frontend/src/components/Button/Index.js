import React, { useState } from 'react';
import './styles.scss';

function Button(props){

  const links = [props.text]
  const [active, setActive] = useState(links[0]);

  return(
    <React.Fragment>
      {links.map(text => (
        <button
          className='linkButton'
          key={text}
          onClick={()=>setActive(text)}>
          {props.icon}
          {text}
        </button>
      ))}
    </React.Fragment>
  )
}



export default Button;