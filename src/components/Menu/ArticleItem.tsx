import {Col, Row} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import React from "react";

const ArticleItem = ()=>{
    return (
        <div  className="article-item">
            <Row>
                <Col lg={4}/>
                <Col lg={12}> <span className="article-title">t中使用总结ypeScript在React中使用总结</span></Col>
                <Col lg={8}>

                    <span className="article-footer-icon category-link-icon"><FolderOutlined/>docker</span>
                    <span className="article-footer-icon">2020-02-16</span>
                </Col>
            </Row>
        </div>
    )

};

export default ArticleItem;