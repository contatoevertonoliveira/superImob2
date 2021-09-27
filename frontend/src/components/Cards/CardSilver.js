import React from 'react';

function CardSilver(props){

  return(
    <React.Fragment>
      <div className="col-sm">
        <div class="card bg-light mb-3" style={{"max-width": "18rem"}}>
          <div class="card-header">{ props.cab }</div>
          <div class="card-body">
            <h5 class="card-title text-success">{ props.info }</h5>
            <p class="card-text">{ props.text }</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardSilver;