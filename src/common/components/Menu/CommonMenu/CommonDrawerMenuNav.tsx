import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {Affix, Avatar, Drawer, Dropdown} from "antd";
import {
    GithubOutlined,
    InstagramOutlined,
    MenuUnfoldOutlined,
    QuestionCircleOutlined,
    TwitterOutlined
} from "@ant-design/icons/lib";


const CommonDrawerMenuNav = () => {
    let history = useHistory();
    const PathLink = (path: string) => {
        history.push(path)
    };
    let [drawer, setDrawer] = useState(false);
    return (
        <>

            <Affix className="menu-fold-left">
                    <span className="menu-fold" onClick={() => {
                        setDrawer(true)
                    }}>
                        <MenuUnfoldOutlined/>
                    </span>
            </Affix>

            <Drawer
                title={<div className="menu-item avatar" onClick={() => {
                    PathLink("/home?category=all&time=all")
                }}>
                    <Avatar
                        src="https://pic1.zhimg.com/v2-e263475646652726731e13e44b5d2479_im.jpg"/>
                    <span id="home" className="logo-link">icepan's blog</span>
                    <span
                        style={{margin: "10px"}}
                        onClick={() => {
                            window.open('https://github.com/biningo')
                        }} className="menu-item github-link"><GithubOutlined/></span>
                    <span className="menu-item twitter-link"><TwitterOutlined/></span>

                </div>}
                visible={drawer}
                onClose={() => {
                    setDrawer(false)
                }}
            >
                <div className="menu-drawer">

                    <div id="about" onClick={() => PathLink("/about")} key="about"
                         className="menu-item-drawer"><QuestionCircleOutlined/>关于本站
                    </div>
                    <div id="album" onClick={() => PathLink("/album")} key="album"
                         className="menu-item-drawer"><InstagramOutlined/>相册
                    </div>

                </div>
            </Drawer>
        </>
    )
};

export default CommonDrawerMenuNav;