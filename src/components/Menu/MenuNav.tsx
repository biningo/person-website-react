import React, {FC} from "react";
import {Col, Row} from "antd";
import TopMenu from "./TopMenu";
import DrawerMenu from "./DrawerMenu";
import {ArticleProps} from "../../common/interfaces/ArticleProps";
const MenuNav = (articleProps:ArticleProps)=>{
    return (
        <Row>
            <Col xs={0} lg={24}>
                <TopMenu {...articleProps}  />
            </Col>
            <Col xs={24} lg={0}>
                <DrawerMenu {...articleProps} />
            </Col>
        </Row>
    )
};

export default MenuNav;