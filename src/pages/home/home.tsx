import React, {FC, useEffect, useState} from "react";
import {BackTop, Divider} from 'antd';
import "./home.css"
import {ArticleProps} from "../../common/interfaces/ArticleProps";
import {useHistory, useLocation} from "react-router-dom"
import GetParams from "../../common/GetParams";
import MenuNav from "./component/MenuNav";
import {BlogProps} from "../../common/interfaces/BlogProps";
import BlogList from "../blog/components/BlogList";


const Home: FC = () => {

    let history = useHistory();
    let location = history.location;

    //解析path参数 用于构造url
    // 1.用于子组件传递数据的state初始化  2.防止每次刷新之后又回到以前的url
    let params = GetParams(location);
    let category = params.get('category');
    let time = params.get('time');


    //一、根据path 更改网页标题【也就是每个页面标题】
    let [title, setTitle] = useState(location.pathname);
    useEffect(() => {
        document.title = "icepan's blog"
    }, [title]);

    let [Categories,setCategories]= useState([] as string[]);
    let [Times,setTimes]= useState([] as string[]);
    //二、请求全部的category  times数据数据 只更在加载的时候更新dom一次 先模拟数据
    useEffect(() => {
        setCategories(["java", "docker和k8s", "网络编程", "Python爬虫", "操作系统", "网络原理"]);
        setTimes(['2020-06-28', '2020-10-01', '2020-10-21']);
    }, [false]);


    //三、文章目录和相应的时间 再根据这两个参数请求后台文章列表数据
    let [Category, SetCategory] = useState(category == undefined ? 'all' : category);
    let [Time, SetTime] = useState(time == undefined ? 'all' : time);
    let [articleList, setArticleList] = useState(new Array<BlogProps>());
    useEffect(() => {
        let arr: BlogProps[] = [];
        for (let i = 0; i < 24; i++) {
            arr.push({bid: i, title: '结中总结中总总结中结中使用总结'+i, category: 'docker', time: '2020-03-20'})
        }
        setArticleList(arr);


        let path = '/home?category=' + Category + '&time=' + Time;
        history.push(path);
    }, [Category, Time]);


    //四、构造传递给子组件的数据集合
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

            <BlogList articles={articleList} setArticleList={setArticleList} />
            <BackTop/>
        </div>
    )
};

export default Home;