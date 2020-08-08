import {CategoryProps} from "../../../common/interfaces/CategoryProps";
import {Menu} from "antd";
import React from "react";
import {useHistory} from "react-router-dom"

const CategoryMenu = (props:CategoryProps)=>{

    let history = useHistory();

    const {Category,SetCategory,Categories} = props;
    const changeCategory = (e: any) => {
        SetCategory(e.key);
    };

    return (
        <Menu theme="dark" onClick={changeCategory}>
            {
                Categories.map(category => {
                    return (
                        <Menu.Item key={category}>
                            {category}
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
};

export default CategoryMenu;