import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';
import { retrieveClient, deleteClient } from "./actions";
import { FaTrashAlt, FaEdit } from "react-icons/fa";


class ClientList extends Component {
  componentDidMount() {
    this.props.retrieveClient();
  }

  removeClient = (id) => {
    this.props.deleteClient(id).then(() => {
      this.props.retrieveClient();
    });
  };

  render() {

    const iconDelete = <FaTrashAlt />;
    const iconEdit = <FaEdit />;

    const { clients } = this.props;

    return (
      <React.Fragment>

      <Menu />

      <main className="content">
      <Header text="Lista de Clientes" />
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
                <tr>
                  <th class="border-0 rounded-start">Id</th>
                  <th class="border-0">Cliente</th>
                  <th class="border-0">Endereço</th>
                  <th class="border-0">Fone</th>
                  <th class="border-0" style={{"text-align":"right"}}>Opções</th>
                </tr>
              </thead>

              <tbody>
                {clients &&
                  clients.map(
                    ({id, nomeCompleto,
                      nacCliente,
                      profCliente,
                      estCivilCliente,
                      endCliente,
                      bairroCliente,
                      cidadeCliente,
                      ufCliente,
                      cepCliente,
                      foneRes,
                      foneCel1,
                      rgCliente,
                      cpfCliente,
                      email,
                      site,
                      nomeConjuge,
                      nacConjuge,
                      profConjuge,
                      rgConjuge,
                      cpfConjuge,
                      dataNasc,
                      sexo,
                      foneCel2}, i) => (
                      <tr key={i}>
                        <td>{id}</td>
                        <td>{nomeCompleto}</td>
                        <td>{endCliente}</td>
                        <td>{foneRes}</td>
                        <td style={{"text-align":"right"}}>
                            <div class="btn-group" role="group">
                              <button class="btn btn-danger btn-sm" onClick={() => this.removeClient(id)}>
                                { iconDelete }
                              </button>
                            </div>
                            <div class="btn-group" role="group">
                              <button class="btn btn-primary btn-sm">
                                { iconEdit }
                              </button>
                            </div>
                        </td>
                      </tr>
                      )
                  )}
                 
              </tbody>
            </table>
            
        </div>
        </div>
      </div>
      </main>
                  
      </React.Fragment>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients,
  };
};

export default connect(mapStateToProps, { retrieveClient, deleteClient })(ClientList);
