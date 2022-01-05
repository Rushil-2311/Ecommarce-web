import Layout from "containers/layout/Layout";
import SignIn from "containers/auth/SignIn";

/**
 * Layout routes
 */
const indexRoutes = [
  { path: "/login", component: SignIn },
  { path: "/", component: Layout }
];

export default indexRoutes;
