import React from "react";
import {Col, Row} from "antd";
import CommonTopMenuNav from "./CommonTopMenuNav";
import CommonDrawerMenuNav from "./CommonDrawerMenuNav";

const CommonMenuNav = () => {

    return (
        <>
            <Row>
                <Col xs={0} lg={24}>
                    <CommonTopMenuNav  />
                </Col>
                <Col xs={24} lg={0}>
                    <CommonDrawerMenuNav/>
                </Col>
            </Row>
        </>
    )

};

export default CommonMenuNav;