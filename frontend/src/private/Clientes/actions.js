import {
  CREATE_CLIENT,
  RETRIEVE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT
} from "./actionTypes";

import clientService from "./clientService";

export const createClient = 
  (
    nomeCompleto,
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
    foneCel2
  ) => async (dispatch) => {
    try{
      const res = await clientService.create({
        nomeCompleto,
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
        foneCel2
      });

      dispatch({
        type: CREATE_CLIENT,
        payload: res.data
      });

      return Promise.resolve(res.data);
    } catch (err){
      return Promise.reject(err);
    }
  };

  export const retrieveClient = () => async (dispatch) => {
    try{
      const res = await clientService.getAll();

      dispatch({
        type: RETRIEVE_CLIENT,
        payload: res.data,
      });

    } catch (err){
      console.log(err);
    }
  };

  export const updateClient = (id, data) => async (dispatch) => {
    try {
      const res = await clientService.update(id, data);
  
      dispatch({
        type: UPDATE_CLIENT,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };


  export const deleteClient = (id) => async (dispatch) => {
    try {
      await clientService.delete(id);
  
      dispatch({
        type: DELETE_CLIENT,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
