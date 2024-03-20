import React from "react";
import "./style.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch(`/movie/upcoming`);
    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);
    const searchQueryHandle = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
    return (
        <div>
            <div className="heroBanner">
                {!loading && (
                    <div className="backdrop_Img">
                        <Img src={background} />
                    </div>
                )}
                <div className="opacity_Layer"></div>
                <ContentWrapper>
                    <div className="wrapperHeroBanner">
                        <div className="herBannerContent">
                            <span className="hr_Title">Welcome. </span>
                            <span className="hr_SubTitle">
                                Millions of movies , TV Shows and people to
                                discover .Explore now.
                            </span>
                            <div className="hr_searchInput">
                                <input
                                    type="text"
                                    className="hr_inputSearchInput"
                                    placeholder="Search for a movies or tv show ..."
                                    onKeyUp={searchQueryHandle}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                                <button className="hr_ButtonSearchInput">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        </div>
    );
};

export default HeroBanner;
