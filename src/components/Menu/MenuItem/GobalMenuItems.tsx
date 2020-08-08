import React, {FC} from "react";
import {Avatar} from "antd";
import {GithubOutlined, InstagramOutlined, QuestionCircleOutlined, TwitterOutlined} from "@ant-design/icons/lib";
import {useHistory} from "react-router";

const GobalMenu: FC = () => {
    let history = useHistory();
    const PathLink = (path: string) => {
        history.push(path)
    };



    return (
        <>
              <span className="menu-item avatar" onClick={() => {
                  PathLink("/home?category=all&time=all")
              }}>
                       <Avatar src="https://pic1.zhimg.com/v2-e263475646652726731e13e44b5d2479_im.jpg"/> <span
                  className="logo-link">icepan's blog</span>
                   </span>
            <span onClick={() => {
                window.open('https://github.com/biningo')
            }} className="github-link"><GithubOutlined/></span>
            <span className="twitter-link"><TwitterOutlined/></span>
            <span onClick={() => PathLink("/album")} key="album"
                  className="menu-item other-link"><InstagramOutlined />相册</span>
            <span onClick={() => PathLink("/about")} key="about"
                  className="menu-item other-link"><QuestionCircleOutlined />关于本站</span>

        </>
    )

};

export default GobalMenu;
