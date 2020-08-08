import React from "react";
import GobalMenuItems from "./MenuItem/GobalMenuItems";
import {Affix} from "antd";


const GobalMenuNav = () => {
    return (
        <>
            <Affix offsetTop={0}>
                <div className="menu">
                    <GobalMenuItems/>
                </div>
            </Affix>
        </>
    )
};

export default GobalMenuNav;