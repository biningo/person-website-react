import {Col, Row} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import React from "react";
import {BlogProps} from "../../common/interfaces/BlogProps";

const ArticleItem = (props:BlogProps)=>{
    const {bid,title,category,time}  = props;

    const LinkToBlogDetail = ()=>{
        console.log(bid);
    };


    const LinkToCategory = ()=>{
      console.log(category)
    };

    return (
        <div  className="article-item">
            <Row>
                <Col lg={4}/>
                <Col lg={10}> <span onClick={LinkToBlogDetail}   className="article-title">{title}</span></Col>
                <Col lg={10}>
                    <span onClick={LinkToCategory} className="article-footer-icon category-link-icon"><FolderOutlined/>{category}</span>
                    <span className="article-footer-icon">{time}</span>
                </Col>
            </Row>
        </div>
    )

};

export default ArticleItem;