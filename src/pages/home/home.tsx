import React, {FC, useEffect, useState} from "react";
import {BackTop, Col, Row} from 'antd';
import "./home.css"
import ArticleItem from "../../components/Menu/ArticleItem";
import {ArticleProps} from "../../common/interfaces/ArticleProps";
import {useLocation, useHistory} from "react-router-dom"
import GetParams from "../../common/GetParams";
import MenuNav from "../../components/Menu/MenuNav";


const Home: FC = () => {
    let location = useLocation();
    let params = GetParams(location);
    let history = useHistory();
    let category = params.get('category');
    let time = params.get('time');


    let [Category, SetCategory] = useState(category == undefined ? 'all' : category);
    let [Time, SetTime] = useState(time == undefined ? 'all' : time);
    let [title,setTitle] = useState(location.pathname);


    useEffect(() => {
        document.title = title.substring(1,title.length);
        let path = '/home?category=' + Category + '&time=' + Time;
        history.push(path);


    }, [Category, Time,title]);


    let articles = [];
    for (let i = 0; i < 100; i++) {
        let article = <ArticleItem/>;
        articles.push(article)
    }

    let Categories = ["java","docker和k8s","网络编程","Python爬虫","操作系统","网络原理"];
    let Times = ['2020-06-28', '2020-10-01', '2020-10-21'];


    let articleProps: ArticleProps = {
        Categories,
        Times,
        Category,
        Time,
        SetCategory,
        SetTime
    };

    return (
        <div>
            <MenuNav {...articleProps}/>

            <div className="content">
                <div>
                    {articles}
                </div>
                <BackTop/>

            </div>


        </div>
    )
};

export default Home;