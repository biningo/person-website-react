import React, {useEffect, useState} from "react";
import "../home/home.css"
import ReactMarkdown from 'react-markdown'
import CodeBlock from "./CodeBlock";
import {Anchor, BackTop, Col, Row, Spin} from "antd";
import "./blog.css"
import request from "../../network/request";
import HeadingBlock from "./HeadingBlock";
import {FolderOutlined} from "@ant-design/icons/lib";
import {useHistory, useLocation} from "react-router";
import GetParams from "../../common/GetParams";
import {BlogEntity} from "../../common/interfaces/BlogEntity";
import CommonMenuNav from "../../common/components/Menu/CommonMenu/CommonMenuNav";

const {Link} = Anchor;

const Blog = () => {

    //md文件待解析内容
    let [blog,setBlog] = useState({bid:"",title:"",content:"",time:"",category:""} as BlogEntity);

    //是否还在加载中
    let [isLoad, setLoad] = useState(true);
    //文章锚点目录
    let [SideBar, setSideBar] = useState();
    //url path参数解析
    let location = useLocation();
    let history = useHistory();
    let params = GetParams(location);
    let bid = params.get('bid');

    useEffect((): any => {
        setLoad(true);
        request({
            url: "/blog/"+bid,
            method: 'get'
        }).then(resp => {
            setBlog(resp.data.Data);

            //获取所有的 h标签
            let arr = [];
            const links = document.getElementsByClassName("article-link");
            for (let i = 0; i < links.length; i++) {
                let sLevel: string | null = links[i].getAttribute("level");
                //目录最多展示到 h4
                if(sLevel=="1" ||sLevel=="2" || sLevel=="3"|| sLevel=="4"){
                    arr.push({
                        level: parseInt(sLevel ? sLevel : '0'),
                        title: links[i].getAttribute("title"),
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
            setLoad(false); //加载完毕
        }).catch(err => {
            console.log(err)
        });
    }, [blog]);


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
                                <span>{blog.title}</span>
                            </div>
                            <div>
                                <span onClick={() => {
                                    history.push("/home?category=" + blog.category + "&time=all")
                                }} className="article-footer-icon category-link-icon"><FolderOutlined/>{blog.category}</span>
                                <span className="article-footer-icon">{blog.time}</span>
                            </div>
                        </div>
                        <hr/>


                        <div className="article-content" id="article-body">
                            <ReactMarkdown
                                source={blog.content}
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
