import React, { useState } from "react";
import "./style.scss";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
const UpComing = () => {
    const [endpoint, setEndPoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/upcoming`);
    const onTabChange = (tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
    };
    return (
        <div className="carouselSelection">
            <ContentWrapper>
                <span className="carouselTitle">UpComing</span>
                <SwitchTabs data={["Movies", "TV"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default UpComing;
