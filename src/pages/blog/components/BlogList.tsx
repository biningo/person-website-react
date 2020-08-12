import React from "react";
import {BlogProps} from "../../../common/interfaces/BlogProps";
import ArticleItem from "./ArticleItem";


const BlogList = (props:{articles:BlogProps[]}) => {
    let articles = props.articles;
    return (
        <>
            <div className="content">
                <div>
                    {
                        articles.map(article=>{
                            return (
                                <ArticleItem key={article.bid} {...article} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

};

export default BlogList;