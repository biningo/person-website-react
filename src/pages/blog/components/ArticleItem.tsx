import {Col, Row} from "antd";
import {FolderOutlined} from "@ant-design/icons/lib";
import React from "react";
import {BlogProps} from "../../../common/interfaces/BlogProps";
import {useHistory} from "react-router-dom"

const ArticleItem = (props: BlogProps) => {
    const {bid, title, category, time} = props;
    let history = useHistory();
    const LinkToBlogDetail = () => {
        history.push("/blog?bid=" + bid);
    };


    const LinkToCategory = () => {
        history.push("/home?category=" + category + "&time=all")
    };

    return (
        <div className="article-item">

            <div>
                <span onClick={LinkToBlogDetail} className="article-title">{title}</span>
            </div>
            <div>
                <span onClick={LinkToCategory}
                      className="article-footer-icon category-link-icon"><FolderOutlined/>{category}</span>
                <span className="article-footer-icon">{time}</span>
            </div>


        </div>
    )

};

export default ArticleItem;