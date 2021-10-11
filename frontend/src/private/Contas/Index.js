import React from 'react';
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';

function Contas(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Contas" />
        
        <div className="row">
         
          <h2>Estamos em contas!</h2>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Contas;