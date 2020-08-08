import {Col, Row} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import React, {FC} from "react";
import {BlogProps} from "../../common/interfaces/BlogProps";

const ArticleItem:FC = ()=>{
    return (
        <div  className="article-item">
            <Row>
                <Col lg={4}/>
                <Col lg={10}> <span  className="article-title">cript在React中使用总结ript在React中使用总结</span></Col>
                <Col lg={10}>
                    <span className="article-footer-icon category-link-icon"><FolderOutlined/>ockerdockerdocker</span>
                    <span className="article-footer-icon">2020-02-16</span>
                </Col>
            </Row>
        </div>
    )

};

export default ArticleItem;