import React from 'react';
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';

function Clientes(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Contratos" />
        
        <div className="row">
         
          <h2>Estamos em contratos!</h2>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Clientes;