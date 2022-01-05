import Dashboard from "containers/dashboard/Dashboard";
import AddVideo from "containers/addvideo/AddVideo";
import ViewVideo from "containers/viewvideo/ViewVideo";

export interface routeType {
  path: string;
  component: any;
}

/**
 * Dashboard routes
 */
const dashRoutes: Array<routeType> = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/add",
    component: AddVideo,
  },
  {
    path: "/view/:id",
    component: ViewVideo,
  },
  {
    path: "/edit/:id",
    component: AddVideo,
  },
];

export default dashRoutes;
