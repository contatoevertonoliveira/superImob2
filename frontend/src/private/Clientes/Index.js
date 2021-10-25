import React from 'react';
import { Link } from "react-router-dom";
import Menu from '../../components/Menu/Index';
import Header from '../../components/Header/Index';
import clientList from './clientList';

function Clientes(){
  return(
    <React.Fragment>
      <Menu />

      <main className="content">
        <Header text="Clientes" />
        
        <div style={{"padding":"5px"}}>
          <button className="btn btn-secondary d-inline-flex align-items-center me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg className="icon icon-xs me-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Novo Cliente
          </button>
          <button className="btn btn-secondary d-inline-flex align-items-center me-2 dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg className="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
            Pesquisar
          </button>
          <button>
            <Link to="/client-list">
              <clientList />
            </Link>
          </button>
        </div>

        <div className="row">
          <div className="col-8 col-xl-12">
            <div className="card card-body border-0 shadow mb-4">
              <form>
                <div className="row">
                  <div className="col-md-9 mb-3">
                    <div>
                      <label for="nomecompleto">Nome Completo:</label>
                      <input className="form-control" id="nomecompleto" type="text" placeholder="nome completo" required />
                    </div>
                  </div>

                  <div className="col-md-3 mb-3">
                    <div>
                      <label for="naccliente">Nacionalidade:</label>
                      <input className="form-control" id="naccliente" type="text" placeholder="nacionalidade" required />
                    </div>
                  </div>
                </div>

                <div className="row">
                    <div className="col-md-3 mb-3">
                      <label for="datanasc">Data de Nascimento:</label>
                      <div className="input-group">
                        <span className="input-group-text">
                        <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                        </svg>
                        </span>
                        <input data-datepicker="" className="form-control" id="datanasc" type="text" placeholder="dd/mm/yyyy" required />                                               
                      </div>
                    </div>
           

                  <div className="col-md-3 mb-3">
                    <label for="sexo">Sexo:</label>
                    <select className="form-select mb-0" id="sexo" aria-label="Sexo">
                      <option selected>Selecione</option>
                      <option value="1">Feminino</option>
                      <option value="2">Masculino</option>
                    </select>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label for="estcivilcliente">Estado Civil:</label>
                    <select className="form-select mb-0" id="estcivilcliente" aria-label="EstadoCivil">
                      <option selected>Selecione</option>
                      <option value="1">Solteiro</option>
                      <option value="2">Casado</option>
                      <option value="3">Separado</option>
                      <option value="4">Outros</option>
                    </select>
                  </div>

                  <div className="col-md-3 mb-3">
                    <label for="profcliente">Profissão:</label>
                    <input className="form-control" id="profcliente" type="text" placeholder="profissão" required />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="email">Email:</label>
                        <input className="form-control" id="email" type="email" placeholder="nome@site.com.br" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="foneres">Fone:</label>
                        <input className="form-control" id="foneres" type="number" placeholder="+55-11 00000 0000" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="rg">RG (Registro Geral):</label>
                        <input className="form-control" id="rg" type="number" placeholder="00.000.000-0" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="cpf">CPF (Cadastro de Pessoa Física):</label>
                        <input className="form-control" id="cpf" type="number" placeholder="000.000.000-00" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="fonecel1">Celular 1:</label>
                        <input className="form-control" id="fonecel1" type="number" placeholder="+55-11 00000 0000" required />
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="form-group">
                        <label for="fonecel2">Celular 2:</label>
                        <input className="form-control" id="fonecel2" type="number" placeholder="+55-11 00000 0000" />
                    </div>
                  </div>
                </div>
                
                <h2 className="h5 my-4">Localização:</h2>
                <div className="row">
                  <div className="col-sm-8 mb-3">
                    <div className="form-group">
                      <label for="endcliente">Endereço:</label>
                      <input className="form-control" id="endcliente" type="text" placeholder="endereço" required />
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <div className="form-group">
                      <label for="bairrocliente">Bairro:</label>
                      <input className="form-control" id="bairrocliente" type="text" placeholder="bairro" required />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4 mb-3">
                    <div className="form-group">
                      <label for="cidadecliente">Município:</label>
                      <input className="form-control" id="cidadecliente" type="text" placeholder="Municipio" required />
                    </div>
                  </div>
                  <div className="col-sm-4 mb-3">
                    <label for="ufcliente">Uf:</label>
                    <select className="form-select w-100 mb-0" id="ufcliente" name="ufcliente" aria-label="State">
                      <option selected>Uf</option>
                      <option value="AC">Acre</option>
                      <option value="AL">Alagoas</option>
                      <option value="AP">Amapa</option>
                      <option value="AM">Amazonas</option>
                      <option value="BA">Bahia</option>
                      <option value="CE">Ceara</option>
                      <option value="DF">Distrito Federal</option>
                      <option value="ES">Espirito Santo</option>
                      <option value="GO">Goias</option>
                      <option value="MA">Maranhão</option>
                      <option value="MT">Mato Grosso</option>
                      <option value="MS">Mato Grosso do Sul</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="PA">Para</option>
                      <option value="PB">Paraiba</option>
                      <option value="PR">Parana</option>
                      <option value="PE">Pernambuco</option>
                      <option value="PI">Piaui</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="RN">Rio Grande do Norte</option>
                      <option value="RS">Rio Grande do Sul</option>
                      <option value="RO">Rondonia</option>
                      <option value="RR">Roraima</option>
                      <option value="SC">Santa Catarina</option>
                      <option value="SP">São Paulo</option>
                      <option value="SE">Sergipe</option>
                      <option value="TO">Tocantis</option>
                    </select>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                        <label for="cepcliente">Cep:</label>
                        <input className="form-control" id="cepcliente" type="text" placeholder="Cep" required />
                    </div>
                  </div>
                </div>

                <div clclassNames="row">
                  <div className="card-body pb-5"> 
                    <button className="btn btn-success me-2">
                      <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"></path>
                      </svg>
                        <span style={{"padding":"5px"}}>Salvar Cliente</span>
                    </button>
                    <button className="btn btn-danger">
                      <svg className="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                      </svg>
                      <span style={{"padding":"5px"}}>Excluir Cliente</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>            
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Clientes;