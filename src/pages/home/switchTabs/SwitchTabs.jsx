import React from "react";
import { useState } from "react";
import "./style.scss";
const SwitchTabs = ({ data, onTabChange }) => {
    const [selectItem, setSelectItem] = useState(0);
    const [left, setLeft] = useState(0);
    const activeTab = (item, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectItem(index);
        }, 300);
        onTabChange(item, index);
    };
    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((item, index) => {
                    return (
                        <span
                            className={`item ${
                                selectItem === index ? "active" : ""
                            }`}
                            key={index}
                            onClick={() => {
                                activeTab(item, index);
                            }}
                        >
                            {item}
                        </span>
                    );
                })}
                <span className="movingBg" style={{ left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;
