import {TimeProps} from "../../../common/interfaces/TimeProps";
import {Menu} from "antd";
import React from "react";

const TimeDropDownMenu = (props:TimeProps)=>{
    const {Time,SetTime,Times} = props;
    const changeTime = (e: any) => {
        SetTime(e.key);
    };

    return (
        <Menu theme="dark" onClick={changeTime}>
            {Times.map(time => {
                return (
                    <Menu.Item key={time}>
                        {time}
                    </Menu.Item>

                )
            })}
        </Menu>
    )
};

export default TimeDropDownMenu;