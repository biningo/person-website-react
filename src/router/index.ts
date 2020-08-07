import React, {FC} from "react";


const Home = React.lazy(() => import("../pages/home/home"));
const Album = React.lazy(()=>import("../pages/album/album"));
const About = React.lazy(()=>import("../pages/about/about"));



export interface IRoute {
    path: string,
    component: FC
}

const routers: IRoute[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/home',
        component: Home
    },
    {
        path:'/album',
        component:Album
    },
    {
        path:'/about',
        component:About
    }
];

export default routers;