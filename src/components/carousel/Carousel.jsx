import React, { useRef } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
// import CircleRating from "../circleRating/CircleRating";
// import Genres from "../genres/Genres";

const Carousel = ({ data, loading }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const navigation = () => {};
    return (
        <div className="carousel">
            <ContentWrapper>
                <BsFillArrowLeftCircleFill
                    className="carouseLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouseRightNav arrow"
                    onClick={() => {
                        navigation("right");
                    }}
                />
                {!loading ? (
                    <div className="carouselItems">
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div className="carouselItem" key={item.id}>
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <span>Loading ...</span>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel;
