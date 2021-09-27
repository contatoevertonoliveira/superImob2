import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ItemMenu from './ItemMenu';

import {doLogout} from '../../services/AuthService';

function SideBar(){

  const history = useHistory();

  function cleanAndRedirect(){
    localStorage.removeItem('jwToken');
    history.push('/');
  }

  function onLogoutClick(event){
    doLogout(localStorage.getItem('jwToken'))
      .then(response => cleanAndRedirect())
      .catch(error=>{
        console.error(error);
        cleanAndRedirect();
      })
  }

  return(
    <React.Fragment>
      <div className="sidebarMenu">
        <div className="header">ongR.B.</div>

        <Button text="Dashboard" />
        {/* <ToggleGroup icon={faplus} text="Cadastro"/>
        <Button icon={fastream} text="Cursos"/>
        <Button icon={fachalkboard} text="Professores"/>
        <Button icon={facalendar} text="Lembretes"/> */}

      </div>
    </React.Fragment>
  )
}

export default SideBar;