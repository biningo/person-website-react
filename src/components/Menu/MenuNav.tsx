import React, {FC} from "react";
import {Col, Row} from "antd";
import TopMenuNav from "./TopMenuNav";
import DrawerMenuNav from "./DrawerMenuNav";
import {ArticleProps} from "../../common/interfaces/ArticleProps";
const MenuNav = (articleProps:ArticleProps)=>{
    return (
        <Row>
            <Col xs={0} lg={24}>
                <TopMenuNav {...articleProps}  />
            </Col>
            <Col xs={24} lg={0}>
                <DrawerMenuNav {...articleProps} />
            </Col>
        </Row>
    )
};

export default MenuNav;