import { RootState } from "../store";

export const getToken = (state: RootState) => state.auth.webappToken;
export const getLoader = (state: RootState) => state.auth.loader;

