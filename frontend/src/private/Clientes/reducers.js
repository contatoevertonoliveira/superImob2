import {
  CREATE_CLIENT,
  RETRIEVE_CLIENT,
  UPDATE_CLIENT,
  DELETE_CLIENT,
} from "./actionTypes";

const initialState = [];

function clientReducer(clients = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CLIENT:
      return [...clients, payload];

    case RETRIEVE_CLIENT:
      return payload;

    case UPDATE_CLIENT:
      return clients.map((client) => {
        if (client.id === payload.id) {
          return {
            ...client,
            ...payload,
          };
        } else {
          return client;
        }
      });

    case DELETE_CLIENT:
      return clients.filter(({ id }) => id !== payload.id);

    default:
      return clients;
  }
}

export default clientReducer;
