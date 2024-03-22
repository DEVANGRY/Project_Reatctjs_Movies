import React, { useState } from "react";
import "./style.scss";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
const Trending = () => {
    const [endpoint, setEndPoint] = useState("day");
    const { data, loading } = useFetch(`/trending/all/${endpoint}`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    };
    return (
        <div className="carouselSelection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;
