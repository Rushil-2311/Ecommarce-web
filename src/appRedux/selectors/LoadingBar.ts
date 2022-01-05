import { RootState } from "../store";

export const getLoaderStatus = (state: RootState) => state.loadingBar.default;
