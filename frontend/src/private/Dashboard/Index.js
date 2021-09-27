import React from 'react';
import Menu from '../../components/Menu/Index';
import CardGreen from '../../components/Cards/CardGreen';
import CardRed from '../../components/Cards/CardRed';
import CardSilver from '../../components/Cards/CardSilver';
import Header from '../../components/Header/Index';

function Dashboard(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Dashboard" />
        
        <div className="row">
          <div className="col-sm">
            <CardSilver cab="Clientes" info="Quantidade" text="0" />
          </div>

          <div className="col-sm">
            <CardGreen cab="Contratos Ativos" info="Quantidade" text="0" />
          </div>

          <div className="col-sm">
            <CardGreen cab="Aluguéres | Mês" info="Quantidade" text="0" />
          </div>

        </div>

        <li role="separator" className="dropdown-divider mt-4 mb-3 border-gray-700"></li>

        <div className="row">
          <div className="col-sm">
            <CardRed cab="Aluguéres | Vencidos" info="Quantidade" text="0" />
          </div>

          <div className="col-sm">
            <CardGreen cab="Prestações" info="Quantidade" text="0" />
          </div>

          <div className="col-sm">
            <CardGreen cab="Aluguéis | Mês" info="à Receber" text="0" />
          </div>

        </div>
      </main>
    </React.Fragment>
  )
}

export default Dashboard;