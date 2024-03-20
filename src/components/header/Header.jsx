import React, { useState, useEffect } from "react";
import { HiOutlineSearchCircle } from "react-icons/hi";
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
    return (
        <header className="header">
            <ContentWrapper>
                <div className="logo">
                    <img src={logo} alt="Logo Details" />
                </div>
                <ul className="menuItems">
                    <li className="item">Movies</li>
                    <li className="item">TV Shows</li>
                    <li className="item">
                        <HiOutlineSearchCircle />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearchCircle />
                    {mobileMenu ? <VscChromeClose /> : <SlMenu />}
                </div>
            </ContentWrapper>
        </header>
    );
};

export default Header;
