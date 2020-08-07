import React, {FC, useEffect, useState} from "react";
import "../home/home.css"
import GobalMenuNav from "../../components/Menu/GobalMenuNav";
import {useLocation} from "react-router-dom"

const Album: FC = () => {

    let location = useLocation();

    let [title,setTitle] = useState(location.pathname);
    useEffect(()=>{
        document.title = title.substring(1,title.length);
    },[title]);

    return (
        <>
            <GobalMenuNav/>
            <h1>Album</h1>
        </>
    )
};

export default Album;