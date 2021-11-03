import React from 'react';

function Cards(props){

  return(
    <React.Fragment>
     <div className="col-12 col-sm-6 col-xl-4 mb-4">
      <div className="card border-0 shadow">
        <div className="card-body">
          <div className="row d-block d-xl-flex align-items-center">
            <div className="col-12 col-xl-5 text-xl-center mb-3 mb-xl-0 d-flex align-items-center justify-content-xl-center">
                <div className={props.classShape}>
                    {props.Svg}
                </div>
                <div className="d-sm-none">
                  <h2 className="h5">{props.TitleMobile}</h2>
                  <h3 className="fw-extrabold mb-1">{props.QteMobile}</h3>
                </div> 
            </div>
            <div className="col-12 col-xl-7 px-xl-0">
                <div className="d-none d-sm-block">
                    <h2 className="h6 text-gray-400 mb-0">{props.Title}</h2>
                    <h3 className="fw-extrabold mb-2">{props.Qte}</h3>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </React.Fragment>
  )
}

export default Cards;