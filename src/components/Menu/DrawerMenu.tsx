import {Affix, Avatar, Drawer, Dropdown} from "antd";
import {
    GithubOutlined,
    InstagramOutlined,
    MenuUnfoldOutlined,
    QuestionCircleOutlined,
    TwitterOutlined
} from "@ant-design/icons/lib";
import React, {useState} from "react";
import {useHistory} from "react-router";
import {ArticleProps} from "../../common/interfaces/ArticleProps";
import CategoryMenu from "./MenuItem/CategoryMenu";
import TimeMenu from "./MenuItem/TimeMenu";

const DrawerMenu  = (props:ArticleProps)=>{

    const {Times, Categories, Category, Time, SetCategory, SetTime} = props;
    let [drawer,setDrawer] = useState(false);

    let history = useHistory();
    const PathLink = (path: string) => {
        history.push(path)
    };

    const categoryMenu = <CategoryMenu {...{Category,Categories,SetCategory}}/>;
    const timeMenu = <TimeMenu {...{Time,Times,SetTime}} />;


    return (
        <div>

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

                        src="https://pic1.zhimg.com/v2-e263475646652726731e13e44b5d2479_im.jpg"/> <span
                    className="logo-link">icepan's blog</span>
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

                    <div onClick={() => PathLink("/about")} key="about"
                         className="menu-item-drawer"><QuestionCircleOutlined />关于本站
                    </div>
                    <div onClick={() => PathLink("/album")} key="album"
                         className="menu-item-drawer"><InstagramOutlined />相册
                    </div>



                    {/*分类*/}
                    <hr/>
                    <div className="menu-item-drawer">

                        <Dropdown overlay={categoryMenu} trigger={['click']}>
                        <span className="category-title" onClick={e => e.preventDefault()}>
                            {Category}
                        </span>

                        </Dropdown>

                    </div>
                    <div className="menu-item-drawer">
                        <Dropdown overlay={timeMenu} trigger={['click']}>
                        <span className="category-title" onClick={e => e.preventDefault()}>
                            {Time}
                        </span>

                        </Dropdown>
                    </div>


                </div>
            </Drawer>

        </div>
    )

};

export default DrawerMenu;