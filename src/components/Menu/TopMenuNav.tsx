import {Affix, Avatar, Dropdown} from "antd";
import React from "react";
import {useHistory} from "react-router";
import {ArticleProps} from "../../common/interfaces/ArticleProps";
import TimeDropDownMenu from "./MenuItem/TimeDropDownMenu";
import CategoryDropDownMenu from "./MenuItem/CategoryDropDownMenu";
import GobalMenuItems from "./MenuItem/GobalMenuItems";

const TopMenuNav = (props: ArticleProps) => {

    const {Times, Categories, Category, Time, SetCategory, SetTime} = props;
    let history = useHistory();
    const PathLink = (path: string) => {
        history.push(path)
    };
    const timeMenu =<TimeDropDownMenu {...{Times,Time,SetTime}} />;
    const categoryMenu =<CategoryDropDownMenu {...{Categories,Category,SetCategory}} />;




    return (
        <Affix offsetTop={0}>
            <div className="menu">
                <GobalMenuItems />
                <span className="menu-item">

                    <Dropdown overlay={categoryMenu} >
                        <span className="category-title" onClick={e => e.preventDefault()}>
                            {Category}
                        </span>

                    </Dropdown>

                </span>
                <span className="menu-item">
                    <Dropdown overlay={timeMenu} >
                        <span className="category-title" onClick={e => e.preventDefault()}>
                            {Time}
                        </span>

                    </Dropdown>
                </span>
            </div>
        </Affix>
    )
};

export default TopMenuNav;