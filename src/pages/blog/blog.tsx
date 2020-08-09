import React, {useEffect, useState} from "react";
import "../home/home.css"
import ReactMarkdown from 'react-markdown'
import CommonMenuNav from "../../components/Menu/CommonMenuNav";
import CodeBlock from "./CodeBlock";
import {Anchor, BackTop, Col, Row, Spin} from "antd";
import "./blog.css"
import request from "../../network/request";
import HeadingBlock from "./HeadingBlock";
import {FolderOutlined} from "@ant-design/icons/lib";
import {useHistory, useLocation} from "react-router";
import GetParams from "../../common/GetParams";

const {Link} = Anchor;

const Blog = () => {

    let [source, setSource] = useState();
    let [isLoad, setLoad] = useState(true);
    let [SideBar, setSideBar] = useState();
    useEffect((): any => {
        setLoad(true);
        request({
            url: "/blog/get",
            method: 'get'
        }).then(resp => {
            setSource(resp.data);


            let arr = [];
            const links = document.getElementsByClassName("article-link");
            for (let i = 0; i < links.length; i++) {
                let sLevel: string | null = links[i].getAttribute("level");
                // @ts-ignore
                if(sLevel=="1" ||sLevel=="2" || sLevel=="3"|| sLevel=="4"){
                    arr.push({
                        level: parseInt(sLevel ? sLevel : '0'), title: links[i].getAttribute("title"),
                        href: links[i].getAttribute("href")
                    });
                }

            }

            setSideBar(
                <div className="sidebar" >
                    <Anchor offsetTop={100}>
                        {
                            arr.map(item => {
                                // @ts-ignore
                                return <Link className={`level-h${item.level}`} href={item.href} title={item.title}/>
                            })
                        }
                    </Anchor>
                </div>);

            setLoad(false);


        }).catch(err => {
            console.log(err)
        });
    }, [source]);


    let location = useLocation();
    let history = useHistory();
    let params = GetParams(location);
    let category = params.get('category');
    let time = params.get('time');


    return (
        <div>
            <CommonMenuNav/>
            <Spin spinning={isLoad}>
                <Row>


                    <Col lg={4} xs={0}>
                        {SideBar}
                    </Col>


                    <Col lg={1} xs={1}/>
                    <Col lg={17} xs={22}>

                        <div className="article-head">
                            <div className="article-head-title">
                                <span>题目题目题目题目题目题目题目题目题目题目题目题目</span>
                            </div>
                            <div>
                                <span onClick={() => {
                                    history.push("/home?category=" + category + "&time=all")
                                }} className="article-footer-icon category-link-icon"><FolderOutlined/>{category}</span>
                                <span className="article-footer-icon">{time}</span>
                            </div>
                        </div>
                        <hr/>


                        <div className="article-content" id="article-body">
                            <ReactMarkdown
                                source={source}
                                escapeHtml={false}
                                skipHtml={false}
                                renderers={{
                                    code: CodeBlock,
                                    heading: HeadingBlock
                                }}
                            />

                        </div>
                    </Col>
                    <Col lg={2} xs={2}/>
                </Row>
            </Spin>

            <BackTop/>

        </div>
    )
};

export default Blog;
