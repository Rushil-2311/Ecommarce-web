import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatchType } from "appRedux/store";
import { userSignIn } from "appRedux/actions/Auth";

type SignInPropTypes = {};

const SignIn: FunctionComponent<SignInPropTypes> = (props) => {
  const dispatch = useDispatch<AppDispatchType>();

  const enterToTheApp = () => {
    dispatch(userSignIn({ email: "", password: "" }));
  };

  return (
    <div>
      <span className="an-30 bold-text header flex-x space-between primary light--text pa15 px45">
        🎬 Movies Hub 🎥
      </span>
      <div
        className="signin-btn cursor-pointer an-40 bold-text br10 flex-x"
        onClick={enterToTheApp}
      >
        <span>ENTER</span>
        <span className="an-40 material-icons ml10">login</span>
      </div>
    </div>
  );
};

export default SignIn;
