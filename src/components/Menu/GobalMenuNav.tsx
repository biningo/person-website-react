import React from "react";
import GobalMenu from "./MenuItem/GobalMenu";
import {Affix} from "antd";


const GobalMenuNav = () => {
    return (
        <>
            <Affix offsetTop={0}>
                <div className="menu">
                    <GobalMenu/>
                </div>
            </Affix>
        </>
    )
};

export default GobalMenuNav;