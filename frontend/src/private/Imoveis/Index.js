import React from 'react';
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';

function Imoveis(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Imóveis" />
        
        <div className="row">
         
          <h2>Estamos em Imóveis!</h2>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Imoveis;