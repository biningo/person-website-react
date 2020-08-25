import React, {FC, useEffect} from "react";
import {Avatar, Collapse} from "antd";
import {
    AreaChartOutlined,
    GithubOutlined,
    InstagramOutlined,
    QuestionCircleOutlined,
    TwitterOutlined
} from "@ant-design/icons/lib";
import {useHistory} from "react-router";

const { Panel } = Collapse;
const GobalMenuItems: FC = () => {
    let history = useHistory();
    const PathLink = (path: string) => {
        history.push(path)
    };

    useEffect(()=>{
        let pathname = history.location.pathname;
        if(pathname!='/home'){
            let d = document.getElementById(pathname.substring(1,pathname.length));
            if(d){
                d.style.color="red"
            }
        }
    });

    return (
        <>
              <span id="home" className="menu-item avatar" onClick={() => {
                  PathLink("/home?category=all&time=all")
              }}>
                       <Avatar src="https://pic1.zhimg.com/v2-e263475646652726731e13e44b5d2479_im.jpg"/> <span
                  className="logo-link">icepan's blog</span>
                   </span>
            <span onClick={() => {
                window.open('https://github.com/biningo')
            }} className="github-link"><GithubOutlined/></span>
            <span className="twitter-link"><TwitterOutlined/></span>

            <span id="album" onClick={() => PathLink("/album")} key="album"
                  className="menu-item other-link"><InstagramOutlined />相册</span>
            <span id="about" onClick={() => PathLink("/about")} key="about"
                  className="menu-item other-link"><QuestionCircleOutlined />关于本站</span>
            <span id="archive" onClick={() => PathLink("/archive")} key="archive"
                  className="menu-item other-link"><AreaChartOutlined />Archive</span>

        </>
    )

};

export default GobalMenuItems;
