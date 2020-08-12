import React, {FC, useEffect, useState} from "react";
import "../home/home.css"
import "./album.css"
import {useLocation} from "react-router-dom"
import CommonMenuNav from "../../common/components/Menu/CommonMenu/CommonMenuNav";
import {Anchor, BackTop, Button, Card, Col, PageHeader, Row, Tag} from "antd";
//图片插件
// https://github.com/Caldis/react-zmage
import Zmage from 'react-zmage'
import {PushpinOutlined} from "@ant-design/icons/lib";
//视频插件
// @ts-ignore
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";


const Album: FC = () => {

    let location = useLocation();

    let [title, setTitle] = useState(location.pathname);
    let [visible, setVisible] = useState(false);


    useEffect(() => {
        document.title = title.substring(1, title.length);
    }, [title]);

    let setArr = [];
    for (let i = 0; i < 3; i++) {
        setArr.push({
            src: "http://gin-note.binnb.top/b.jpg",
            alt: "First image description"
        })
    }

    let images = <Zmage
        src="http://gin-note.binnb.top/20170811134557_vL83V.jpeg"
        alt="展示序列图片"
        set={setArr}
    />;
    let list =

        <Col className="card" lg={6}>

            <Card
                className="image-size"
                hoverable
                cover={
                    images
                }
            >
                哒哒哒的撒的撒的啊大大啊大的的啊大 大大啊大的的啊大
            </Card>
        </Col>;


    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(list);
    }



    let links = [];
    let cards = [];
    for (let i = 0; i < 7; i++) {
        links.push(<a href={"#2020-" + i}><Button className="tag" >2020-{i}</Button></a>);


        cards.push(<div className="row" id={"2020-" + i}>
            <PageHeader
                title={<><PushpinOutlined/>2020</>}
                subTitle={i}
            />
            <Row>
            {arr}
            </Row>


        </div>)

    }

    return (
        <>

            <CommonMenuNav/>


            <div className="album">
                {links}
                {cards}

            </div>

            <BackTop />

        </>
    )
};

export default Album;