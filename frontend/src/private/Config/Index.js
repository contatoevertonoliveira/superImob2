import React from 'react';
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';

function Config(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Configurações" />
        
        <div className="row">
         
          <h2>Estamos em Configurações!</h2>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Config;