import React, {FC} from "react";


const Home = React.lazy(() => import("../pages/home/home"));
const Album = React.lazy(()=>import("../pages/album/album"));
const About = React.lazy(()=>import("../pages/about/about"));
const Blog = React.lazy(()=>import("../pages/blog/blog"));
const Archive = React.lazy(()=>import("../pages/archive/archive"));
const Admin = React.lazy(()=>import("../pages/admin/admin"));

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
    },
    {
        path:'/blog',
        component:Blog
    },
    {
        path:'/archive',
        component:Archive
    },
    {
        path:'/admin',
        component:Admin
    }
];

export default routers;