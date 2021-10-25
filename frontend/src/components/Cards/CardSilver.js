import React from 'react';

function CardSilver(props){

  return(
    <React.Fragment>
      <div className="col-sm">
        <div className="card bg-light mb-3" style={{"maxWidth": "18rem"}}>
          <div className="card-header">{ props.cab }</div>
          <div className="card-body">
            <h5 className="card-title text-success">{ props.info }</h5>
            <p className="card-text">{ props.text }</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardSilver;