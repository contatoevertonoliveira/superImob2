import React, { useState, useEffect } from "react";
import Menu from '../../components/Menu/Index';
import Cards from '../../components/Cards/Cards';
import Header from '../../components/Header/Index';
import http from '../../services/http';

function Dashboard(props){

  const classShapePrimary = "icon-shape icon-shape-primary rounded me-4 me-sm-0";
  const classShapeSecondary = "icon-shape icon-shape-secondary rounded me-4 me-sm-0";
  const classShapeTertiary = "icon-shape icon-shape-tertiary rounded me-4 me-sm-0";

  const infoPrimary = "Clientes";
  const infoSecondary = "Contratos";
  const infoTertiary = "Contas a Pagar";
  const infoQuaternary = "Contas a Receber";
  const infoQuinary = "Aluguéres em Dia";
  const infoSenario = "Aluguéres Atrasados";
  const infoSeptenary = "Vende-se";
  const infoOctane = "Aluga-se";
  const infoNonary = "Vendas | Mês";
  const infoDecenary = "Locações | Mês";
  const infoEleventh = "Total Aluguéres";
  const infoTwelfth = "Total Admins";

  const [ clients, setClients ] = useState([]);

  useEffect(() => {
    http.get('/clientes')
      .then((response) => {
        setClients(response.data);
      });
  }, []);


    return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Dashboard" />

        <div className="row">

          <Cards
            classShape={classShapePrimary}  
            Svg={
                  <svg className="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                } 
            Title={infoPrimary}
            TitleMobile={infoPrimary}
            Qte={ clients.length }
            QteMobile="000" 
          />
          <Cards
            classShape={classShapeSecondary} 
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                }
            Title={infoSecondary}
            TitleMobile={infoSecondary}
            Qte="000"
            QteMobile="000"
          />
          <Cards
            classShape={classShapeTertiary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                }
            Title={infoTertiary}
            TitleMobile={infoTertiary}
            Qte="000"
            QteMobile="000"
          />

          {/* ------------------ Primary Colunm ------------------- */}

          <Cards
            classShape={classShapeSecondary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
                    <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
                  </svg>
                }
            Title={infoQuaternary}
            TitleMobile={infoQuaternary}
            Qte="000"
            QteMobile="000"
          />

          <Cards
            classShape={classShapePrimary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#039403" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
            Title={infoQuinary}
            TitleMobile={infoQuinary}
            Qte={<span style={{"color":"green"}}>000</span>}
            QteMobile={<span style={{"color":"green"}}>000</span>}
          />

          <Cards
            classShape={classShapeTertiary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#df0505" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
            Title={infoSenario}
            TitleMobile={infoSenario}
            Qte={<span style={{"color":"red"}}>000</span>}
            QteMobile={<span style={{"color":"red"}}>000</span>}
          />

          {/* ------------------ Secondary Colunm ------------------- */}

          <Cards
            classShape={classShapeTertiary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                }
            Title={infoSeptenary}
            TitleMobile={infoSeptenary}
            Qte="000"
            QteMobile="000"
          />

          <Cards
            classShape={classShapePrimary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                }
            Title={infoOctane}
            TitleMobile={infoOctane}
            Qte="000"
            QteMobile="000"
          />

          <Cards
            classShape={classShapeSecondary}
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                }
            Title={infoNonary}
            TitleMobile={infoNonary}
            Qte="000"
            QteMobile="000"
          />

          {/* ------------------ Terciary Colunm ------------------- */}

          <Cards
            classShape={classShapePrimary}  
            Svg={
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                } 
            Title={infoDecenary}
            TitleMobile={infoDecenary}
            Qte="000"
            QteMobile="000" 
          />

          <Cards
            classShape={classShapeSecondary}
            Svg={
                  <svg className="w-6 h-6" fill="#039403" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                }
            Title={infoEleventh}
            TitleMobile={infoEleventh}
            Qte="000"
            QteMobile="000"
          />

          <Cards
            classShape={classShapeSecondary}
            Svg={
                  <svg className="w-6 h-6" fill="#039403" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                }
            Title={infoTwelfth}
            TitleMobile={infoTwelfth}
            Qte="000"
            QteMobile="000"
          />

        </div>
      </main>
    </React.Fragment>
  )
}

export default Dashboard;