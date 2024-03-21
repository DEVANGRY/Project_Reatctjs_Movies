import React from "react";
import "./style.scss";
import {
    FaFacebookF,
    FaInstagramSquare,
    FaYoutube,
    FaGithub,
} from "react-icons/fa";
import ContentWrapper from "../contentWrapper/ContentWrapper";
const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="item">Terms Of Use</li>
                    <li className="item">Privacy Policy</li>
                    <li className="item">About</li>
                    <li className="item">Blog</li>
                    <li className="item">FAQ</li>
                </ul>
                <div className="footer_detail">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum quis, ut architecto tenetur qui rem. Nesciunt,
                    reprehenderit excepturi iure, non eos ducimus voluptatibus
                    ab, necessitatibus molestias in omnis dolore harum.
                    Voluptates harum, nostrum, vitae laborum adipisci dolore
                    illo eum repellat voluptas facere laboriosam deserunt
                    asperiores rerum, minima fugit. Numquam inventore quas
                    voluptatem asperiores ipsum iste ea ut reprehenderit natus
                    tenetur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagramSquare />
                    </span>
                    <span className="icon">
                        <FaYoutube />
                    </span>
                    <span className="icon">
                        <FaGithub />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
