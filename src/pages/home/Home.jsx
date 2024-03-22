import React from "react";
import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import "./style.scss";
import Popular from "./popular/Popular";
import TopRate from "./topRate/TopRate";
import UpComing from "./upComming/UpComming";
const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRate />
            <UpComing />
            <div style={{ height: "1000px" }}></div>
        </div>
    );
};

export default Home;
