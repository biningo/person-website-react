import React, {FC} from "react";
import {Col, Row} from "antd";
import {ArticleProps} from "../../../common/interfaces/ArticleProps";
import CommonTopMenuNav from "../../../common/components/Menu/CommonMenu/CommonTopMenuNav";
import CommonDrawerMenuNav from "../../../common/components/Menu/CommonMenu/CommonDrawerMenuNav";
const MenuNav = (articleProps:ArticleProps)=>{
    return (
        <Row>
            <Col xs={0} lg={24}>
               <CommonTopMenuNav/>
            </Col>
            <Col xs={24} lg={0}>
               <CommonDrawerMenuNav/>
            </Col>
        </Row>
    )
};

export default MenuNav;