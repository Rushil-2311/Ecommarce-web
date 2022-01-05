import React, { FunctionComponent } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * Protect dash routes
 */
const ProtectedRoute: FunctionComponent = props => {
  const { children } = props;
  const auth = useSelector((state: any) => state.auth);
  return (
    <div className="scroll-layout" id="scroll-element">
      {auth.isWebappLogin && auth.webappToken ? (
        <>{children}</>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default ProtectedRoute;
