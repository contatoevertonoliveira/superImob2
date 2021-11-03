import React, { useEffect, useState } from "react";
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';
import http from '../../services/http';
import NewButton from '../../components/Button/Index';
import ClientModal from './ClientModal';



function ListClient(){

  const [ clients, setClients ] = useState([]);

  useEffect(() => {
    http.get('/clientes')
      .then((response) => {
        setClients(response.data);
      });
  }, []);

    return (
      <React.Fragment>

      <Menu />

      <main className="content">
        <Header 
                text="Lista de Clientes"
                icon={ <NewButton Title="Novo Cliente" newButton="newClient" dataBsTarget="#modalNewClient" /> }
        />

        <div className="card border-0 shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-centered table-nowrap mb-0 rounded">
                <thead className="thead-light">
                  <tr>
                    <th className="border-0">Cliente</th>
                    <th className="border-0">Endereço</th>
                    <th className="border-0">Bairro</th>
                    <th className="border-0">Fone</th>
                    <th className="border-0" style={{"textAlign":"right"}}>Opções</th>
                  </tr>
                </thead>

                <tbody>
                  { clients.map((client) => (
                    <tr key={client.id}>
                      <td>{client.nomeCompleto}</td>
                      <td>{client.endCliente}</td>
                      <td>{client.bairroCliente}</td>
                      <td>{client.foneRes}</td>
                      <td style={{"textAlign":"right"}}>
                        <div className="btn-group" role="group">
                          <button className="btn btn-danger btn-sm">
                            <svg className="icon icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                        <div className="btn-group" role="group">
                          <button className="btn btn-primary btn-sm">
                            <svg className="icon icon-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
        <ClientModal />          
      </React.Fragment>
     );
}
export default ListClient;
