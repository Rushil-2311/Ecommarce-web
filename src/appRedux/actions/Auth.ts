import {
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNOUT_USER,
  SIGNOUT_USER_SUCCESS,
} from "constants/ActionTypes";

export const userSignIn = (data: any) => {
  return {
    type: SIGNIN_USER,
    payload: data,
  };
};

export const userSignOut = () => {
  return {
    type: SIGNOUT_USER,
  };
};

export const userSignInSuccess = (authUser: any) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: authUser,
  };
};

export const userSignOutSuccess = () => {
  return {
    type: SIGNOUT_USER_SUCCESS,
  };
};
