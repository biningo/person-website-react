import React from "react";
import {BlogProps} from "../../../common/interfaces/BlogProps";
import ArticleItem from "./ArticleItem";
import {Col, Divider, Pagination, Row} from "antd";


const BlogList = (props: { articles: BlogProps[],setArticleList:any }) => {
    let articles = props.articles;
    let setArticleList = props.setArticleList;

    let part1 = [];
    let part2 = [];
    let part3 = [];

    let i=0;
    while(i<articles.length){
        part1.push(articles[i]);
        i++;
        if(i<articles.length){
            part2.push(articles[i])
        }else{
            break
        }
        i++;
        if(i<articles.length){
            part3.push(articles[i])
        }
        i++;
    }

    return (
        <>
            <div className="content">
                {
                   <h1 ><span className="page-head"  >全部(共计16)</span></h1>
                }
                <div>
                    <Row>
                        <Col lg={8} xs={24}>
                            {
                                part1.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                        <Col lg={8} xs={24}>
                            {
                                part2.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                        <Col lg={8} xs={24}>
                            {
                                part3.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </div>
                <div style={{marginTop:"2%"}}>
                <Pagination defaultCurrent={1} total={50} defaultPageSize={17} />
                </div>
            </div>
        </>
    )

};

export default BlogList;