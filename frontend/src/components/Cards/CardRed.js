import React from 'react';

function CardRed(props){

  return(
    <React.Fragment>
      <div className="col-sm">
        <div class="card bg-danger mb-3" style={{"max-width": "18rem"}}>
          <div class="card-header text-white bg-dark">{ props.cab }</div>
          <div class="card-body">
            <h5 class="card-title text-warning">{ props.info }</h5>
            <p class="card-text text-white bg-dark">{ props.text }</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default CardRed;