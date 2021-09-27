import React from 'react';
import Button from '../../Button/Index';
import { FaAddressCard, FaFileSignature, FaFileInvoiceDollar, FaTools, FaDoorOpen, FaFileImage } from "react-icons/fa";

function ItemMenu(){

  const iconDashboard = <FaFileImage style={{"margin-right":"5px"}}/>;
  const iconClientes = <FaAddressCard style={{"margin-right":"5px"}}/>;
  const iconContratos = <FaFileSignature style={{"margin-right":"5px"}}/>;
  const iconContas = <FaFileInvoiceDollar style={{"margin-right":"5px"}}/>;
  const iconConfig = <FaTools style={{"margin-right":"5px"}}/>;
  const iconSair = <FaDoorOpen style={{"margin-right":"5px"}}/>;
  
  return(
    <React.Fragment>
      <div className="sidebar">
        <div className="header">superImob 1.0</div>

        <Button icon={iconDashboard} text="Dashboard" />
        <Button icon={iconClientes} text="Clientes" />
        <Button icon={iconContratos} text="Contratos" />
        <Button icon={iconContas} text="Contas" />
        <Button icon={iconConfig} text="Config" />
        <Button icon={iconSair} text="Sair" />

      </div>
    </React.Fragment>    
  );
}

export default ItemMenu;