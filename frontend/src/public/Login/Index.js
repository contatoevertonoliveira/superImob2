import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { doLogin } from '../../services/AuthService';

function Login(){

  const history = useHistory();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function onChangeInput(event){
    if(event.target.id === 'email')
      setIdentifier(event.target.value);
    else
      setPassword(event.target.value);
  }

  function onSubmit(event){
    event.preventDefault();
    
    doLogin(identifier, password)
      .then(response => {
        if(response){
          localStorage.setItem('jwToken', response.jwt);
          console.log(response);
          history.push('/dashboard');
        }
      })
      .catch(err => {
        setError(`Usuário ou senha não encontrado!`);
      })
  }

  return(
    <main>
      <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div className="container">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <div className="text-center">
                <img src="./img/favicon/mstile-150x150.png" alt="everBot" width={64} />
              </div>
              <div className="text-center text-md-center mb-4 mt-md-0">
                <h1 className="mb-0 h3">Login no <b>superImob</b></h1>
              </div>
              <form className="mt-4" onSubmit={onSubmit}>
                <div className="form-group mb-4">
                    <label htmlFor="email">Digite seu e-mail:</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </span>
                        <input type="email" className="form-control" placeholder="exemplo@empresa.com.br" id="email" autoFocus required onChange={onChangeInput} />
                    </div>  
                </div>
                            
                <div className="form-group">
                              
                  <div className="form-group mb-4">
                      <label htmlFor="password">Digite sua senha:</label>
                      <div className="input-group">
                          <span className="input-group-text" id="basic-addon2">
                              <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                          </span>
                          <input type="password" placeholder="Senha" className="form-control" id="password" required onChange={onChangeInput} />
                      </div>  
                  </div>
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-gray-800">Entrar</button>
                </div>
                  {
                    error ? 
                    <div className="alert alert-danger mt-2 text-center">
                      {error}
                    </div>
                    : <React.Fragment></React.Fragment>
                  }
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login;