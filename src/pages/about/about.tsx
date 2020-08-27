import React, {FC, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router";
import CommonMenuNav from "../../common/components/Menu/CommonMenu/CommonMenuNav";
import "../home/home.css"
import "../blog/blog.css"
import {BackTop, Col, Row, Spin} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../blog/CodeBlock";
import HeadingBlock from "../blog/HeadingBlock";
import {BlogEntity} from "../../common/interfaces/BlogEntity";
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
const About: FC = () => {

    let location = useLocation();
    let history = useHistory();
    let [title,setTitle] = useState(location.pathname);
    useEffect(()=>{
        document.title = title.substring(1,title.length);

    },[title]);


    //md文件待解析内容
    let [blog,setBlog] = useState({bid:"1",title:"About",content:"" +
            "# 基础\n" +
            "\n" +
            "1. 网络（待深入）\n" +
            "2. OS（学习中）\n" +
            "3. 计算机组成原理（待学习）\n" +
            "4. 数据结构（复习中）\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "## Python\n" +
            "\n" +
            "1. django（学习中、django-restful还没学）【了解】\n" +
            "2. flask【了解】\n" +
            "3. Scrapy(待复习)、爬虫\n" +
            "4. numpy、pandas（复习中）\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "### Go\n" +
            "\n" +
            "1. gin(深入中)【深入】\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "#### Java\n" +
            "\n" +
            "1. Spring、SpringMVC（不怎么会、待深入）\n" +
            "2. Spring Boot（待复习、待深入）\n" +
            "3. MyBatis（待复习、待深入）\n" +
            "4. Hibernate（待学习）\n" +
            "5. Spring Cloud（待复习、待深入）\n" +
            "6. JVM虚拟机（待学习）\n" +
            "7. 安卓（待学习）\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "##### 中间件\n" +
            "\n" +
            "1. Redis（学习中、待深入）\n" +
            "2. RabbitMQ（待学习）\n" +
            "3. Kafka（待学习）\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "## 数据库\n" +
            "\n" +
            "1. MySQL（待深入）\n" +
            "2. MongoDB（待学习）\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "<br>\n" +
            "\n" +
            "## 其他\n" +
            "\n" +
            "1. Vue（待复习）\n" +
            "2. Docker（待复习）\n" +
            "3. Linux (待复习、待学习)\n" +
            "\n",


        time:"2020-6-29",category:"other"} as BlogEntity);

    //是否还在加载中
    let [isLoad, setLoad] = useState(false);
    //文章锚点目录
    let [SideBar, setSideBar] = useState();

    useEffect(()=>{
        var gitalk = new Gitalk({
            clientID: '3d5189508cae4750bbee',
            clientSecret: '53787f8c262bfca169e58dea74a8db0bed763714',
            repo: 'personal-website-gittalk',
            owner: 'biningo',
            admin: ['biningo'],
            id: location.pathname,      // 请确保你的 location 连接小于 50 个字符，否则，插件会生成失败
            distractionFreeMode: false  // 专注模式
        });

        gitalk.render('gitalk-container');
    },[false]);



    return (
        <>
            <CommonMenuNav/>

            <Spin spinning={isLoad}>
                <Row>
                    <Col lg={4} />
                    <Col lg={16}>
                        <div className="article-head">
                            <div className="article-head-title">
                                <span>{blog.title}</span>
                            </div>
                            <div>
                                <span onClick={() => {
                                    history.push("/home?category=" + blog.category + "&page=1")
                                }} className="article-footer-icon category-link-icon"><FolderOutlined/>{blog.category}</span>
                                <span className="article-footer-icon">{blog.time}</span>
                            </div>
                        </div>
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
                    <Col lg={4} />
                </Row>
            </Spin>
            <Row>
                <Col lg={4} />
                <Col lg={16} >
            <div id="gitalk-container"></div>
                </Col>
                <Col lg={4} />
            </Row>
            <BackTop/>

        </>
    )
};


export default About;