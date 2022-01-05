import login from './../components/login';
import signup from './../components/signup';
import dashboard from './../components/dashboard';

const indexRoute=[
    {path:"/login",component:login},
    {path:"/signup",component:signup},
    {path:"/dashboard",component:dashboard}
];

export default indexRoute;