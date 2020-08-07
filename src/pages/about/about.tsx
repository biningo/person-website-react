import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router";
import GobalMenuNav from "../../components/Menu/GobalMenuNav";


const About: FC = () => {

    let location = useLocation();

    let [title,setTitle] = useState(location.pathname);
    useEffect(()=>{
        document.title = title.substring(1,title.length);
    },[title]);

    return (
        <>
            <GobalMenuNav/>

            <h1>About</h1>

        </>
    )
};


export default About;