import {Col, Row} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import React from "react";
import {BlogProps} from "../../common/interfaces/BlogProps";
import {useHistory} from "react-router-dom"

const ArticleItem = (props:BlogProps)=>{
    const {bid,title,category,time}  = props;
    let history = useHistory();
    const LinkToBlogDetail = ()=>{
        history.push("/blog?bid="+bid+"&category="+category+"&time="+time);
    };


    const LinkToCategory = ()=>{
      history.push("/home?category="+category+"&time=all")
    };

    return (
        <div  className="article-item">
            <Row>
                <Col lg={4}/>
                <Col lg={10}> <span onClick={LinkToBlogDetail}   className="article-title">{title}</span></Col>
                <Col lg={10}>
                    <span onClick={LinkToCategory} className="article-footer-icon category-link-icon"><FolderOutlined/>{category}</span>
                    <span  className="article-footer-icon">{time}</span>
                </Col>
            </Row>
        </div>
    )

};

export default ArticleItem;