import React, {useState} from "react";
import {BlogProps} from "../../../common/interfaces/BlogProps";
import ArticleItem from "./ArticleItem";
import {Button, Col, Divider, Modal, Pagination, Row, Space, Tag} from "antd";


const BlogList = (props: { articles: BlogProps[],setArticleList:any,categories:string[] }) => {
    let articles = props.articles;
    let setArticleList = props.setArticleList;

    let categories =props.categories;

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

    let [visible,setVisible] = useState(false);

    return (
        <>
            <div className="content">
                <Modal
                    style={{top:10}}
                    visible={visible}
                    footer={[]}
                    onCancel={()=>{setVisible(false)}}
                >
                    {
                        categories.map(category=>{
                            return (
                                <Button onClick={()=>{setVisible(false)}} className="category" color="green">{category}</Button>
                            )
                        })
                    }
                </Modal>
                {
                   <h1 ><span onClick={()=>{setVisible(true)}} className="page-head"  >全部(共计16)</span></h1>
                }

                <div >

                    <Row >
                        <Col lg={2} />
                        <Col lg={6} xs={24}>
                            {
                                part1.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                        <Col lg={1} />
                        <Col lg={6} xs={24}>
                            {
                                part2.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                        <Col lg={1} />
                        <Col lg={6} xs={24}>
                            {
                                part3.map(article => {
                                    return (
                                        <ArticleItem key={article.bid} {...article} />
                                    )
                                })
                            }
                        </Col>
                        <Col lg={1} />
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