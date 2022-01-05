import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER_SUCCESS,
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  isWebappLogin: false,
  webappToken: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case SIGNIN_USER: {
      return {
        ...state,
        loader: true,
      };
    }
    case SIGNIN_USER_SUCCESS: {
      return {
        ...state,
        loader: false,
        webappToken: action.payload.token,
        isWebappLogin: true,
      };
    }
    case SIGNOUT_USER_SUCCESS: {
      return {
        ...state,
        webappToken: null,
        isWebappLogin: false,
        loader: false,
      };
    }
    default:
      return state;
  }
};
