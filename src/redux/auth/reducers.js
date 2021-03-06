import { LOGIN_FULFILLED, LOGIN_PENDING, LOGIN_REJECTED } from "./constants";

//////

import { REGISTER_FULFILLED, REGISTER_PENDING, REGISTER_REJECTED } from "./constants";




const INITIAL_STATE = {
  userId: undefined,
  isLoading: false,
  error: "",
  isAuthed: false,
  isAdmin: false,
};

export const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isAdmin: action.payload.isAdmin,
        isAuthed: !!action.payload.jwt,     //SI HAY TOKEN PASA A TRUE, PARA SABER SI ESTA LOGUEADO O NO
        jwt: action.payload.jwt,            //GUARDA EL TOKEN PARA DESPUES USARLO EN LOS THUNKS Y METERLOS EN LOS HEADERS DE LAS REQUEST
        userId: action.payload._id,
      };
    case LOGIN_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};




const INITIAL_STATE2 = {
  userId: undefined,
  isLoading: false,
  error: "",
  isAuthed: false,
  isAdmin: false,
};

export const RegisterReducer = (state = INITIAL_STATE2, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_FULFILLED:
      return {
        ...state,
        isLoading: false,
        isAdmin: action.payload.isAdmin,
        isAuthed: !!action.payload.jwt,
        jwt: action.payload.jwt,
        userId: action.payload._id,
      };
    case REGISTER_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
