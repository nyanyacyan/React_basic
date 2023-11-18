import React, { useRef, useState } from "react";
import './Header.css';
import useOutsideClick from "./useOutsideClick";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    useOutsideClick(menuRef, () => {
        if (isMenuOpen) setIsMenuOpen(false);
    });

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header id="top" className="header">
            <nav className="navbar">
                <div className="left-side">
                    {/* {ハンバーガーアイコン} */}
                    <div className="hamburger" onClick={openMenu}>
                        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                        <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                    </div>
                </div>

                <div className="right-side">
                    <img src="myfavicon2.png" alt="Right Logo"/>
                </div>
            </nav>
            
            {/* {メニューアイコン} */}
            <ul ref={menuRef} className={isMenuOpen ? 'menu open' : 'menu'}>
                <li><a href="#toppage" onClick={handleLinkClick}>トップ</a></li>
                <li><a href="#about" onClick={handleLinkClick}>このサイトについて</a></li>
                <li><a href="#profile" onClick={handleLinkClick}>プロフィール</a></li>
                <li><a href="#skills" onClick={handleLinkClick}>スキル</a></li>
                <li><a href="#portfolio" onClick={handleLinkClick}>ポートフォリオ</a></li>
                <li><a href="#contact" onClick={handleLinkClick}>連絡先</a></li>
                {/* <li><a href="#language">English</a></li> */}
            </ul>
        </header>
    );
};

export default Header;