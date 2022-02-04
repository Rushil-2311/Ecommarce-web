import React, { FunctionComponent } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatchType } from "appRedux/store";
import { userSignOut } from "appRedux/actions/Auth";
import LoadingBar from "react-redux-loading-bar";

type HeaderPropTypes = {};

const Header: FunctionComponent<HeaderPropTypes> = () => {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatchType>();

  const exitHandler = () => {
    dispatch(userSignOut())
    history.push('/login');
  }
  
  return (
    <>
      <LoadingBar
        style={{ position: "fixed", backgroundColor: "#D5D5D5", zIndex: 1000 }}
      />
      <div className="an-30 bold-text header flex-x space-between primary light--text pa15 px45">
        <span className="cursor-pointer" onClick={() => history.push("/dashboard")}>
          🎬 Movies Hub 🎥
        </span>
        <span className="an-30 material-icons align-self cursor-pointer" onClick={exitHandler}>logout</span>
      </div>
    </>
  );
};

export default Header;
