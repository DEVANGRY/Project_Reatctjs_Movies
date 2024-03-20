import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";
const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(!showSearch);
    };
    const openMenuMobile = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };
    const searchQueryHandle = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setInterval(() => {
                setShowSearch(false);
            }, 1000);
        }
    };
    return (
        <header className={`header ${show} ${mobileMenu ? "mobileView" : ""}`}>
            <ContentWrapper>
                <div className="logo">
                    <img src={logo} alt="Logo Details" />
                </div>
                <ul className="menuItems">
                    <li className="item">Movies</li>
                    <li className="item">TV Shows</li>
                    <li className="item">
                        <HiOutlineSearch onClick={openSearch} />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMenuMobile} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a movies or tv show ..."
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                                onKeyUp={searchQueryHandle}
                            />
                            <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
