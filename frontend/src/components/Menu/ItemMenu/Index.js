import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../Button/Index';
import { FaAddressCard, FaFileSignature, FaFileInvoiceDollar, FaTools, FaDoorOpen, FaFileImage } from "react-icons/fa";

function ItemMenu(){

  const history = useHistory();

  const iconDashboard = <FaFileImage style={{"marginRight":"5px"}}/>;
  const iconClientes = <FaAddressCard style={{"marginRight":"5px"}}/>;
  const iconContratos = <FaFileSignature style={{"marginRight":"5px"}}/>;
  const iconContas = <FaFileInvoiceDollar style={{"marginRight":"5px"}}/>;
  const iconConfig = <FaTools style={{"marginRight":"5px"}}/>;
  const iconSair = <FaDoorOpen style={{"marginRight":"5px"}}/>;

  function cleanAndRedirect(){
    localStorage.removeItem('jwToken');
    history.push('/');
  }

  function handleClick(e){
    e.preventDefault();

    if(e.target.innerText === "DASHBOARD"){
      return history.push('/dashboard');
    }

    if(e.target.innerText === "CLIENTES"){
      return history.push('/clientes');
    }

    if(e.target.innerText === "CONTRATOS"){
      return history.push('/contratos');
    }

    if(e.target.innerText === "CONTAS"){
      return history.push('/contas');
    }

    if(e.target.innerText === "CONFIG"){
      return history.push('/conf');
    }

    if(e.target.innerText === "SAIR"){
      cleanAndRedirect();
    }
  }

  return(
    <React.Fragment>

          <Button icon={iconDashboard} text="Dashboard" handleClick={handleClick} />
          <Button icon={iconClientes} text="Clientes" handleClick={handleClick} />
          <Button icon={iconContratos} text="Contratos" handleClick={handleClick} />
          <Button icon={iconContas} text="Contas" handleClick={handleClick} />
          <Button icon={iconConfig} text="Config" handleClick={handleClick} />
          <Button icon={iconSair} text="Sair" handleClick={handleClick} />

    </React.Fragment>    
  );
}

export default ItemMenu;