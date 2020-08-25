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
            src: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598357102109&di=5b995dede64e4fd5c17e5dd093145bb4&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7LsWdDW5_xN3otqbppnN2DJv%2Fzhidao%2Fpic%2Fitem%2F4034970a304e251fc6a58873ac86c9177e3e53ee.jpg",
            alt: "First image description"
        })
    }

    let images = <Zmage
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598357102109&di=5b995dede64e4fd5c17e5dd093145bb4&imgtype=0&src=http%3A%2F%2Fgss0.baidu.com%2F7LsWdDW5_xN3otqbppnN2DJv%2Fzhidao%2Fpic%2Fitem%2F4034970a304e251fc6a58873ac86c9177e3e53ee.jpg"
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
                哒哒哒的撒的撒的啊大大啊大的的啊大 大大啊大的的啊大哒哒哒的撒的撒的啊大大啊大的的啊大 大大啊大的的啊大哒哒哒的撒的撒的啊大大啊大的的啊大 大大啊大的的啊大
            </Card>
        </Col>;
    let list2 =

        <Col className="card" lg={6}>

            <Card
                className="image-size"
                hoverable
                cover={
                    images
                }
            >
                大 大大啊大的的啊大哒哒哒的撒的撒的啊大大啊大的的啊大 大大啊大的的啊大
            </Card>
        </Col>;


    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(list);
        arr.push(list2);

    }



    let links = [];
    let cards = [];
    for (let i = 0; i < 5; i++) {
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