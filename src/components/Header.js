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

    return (
        <header className="header">
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
                <li><a href="#top">トップ</a></li>
                <li><a href="#about">このサイトについて</a></li>
                <li><a href="#profile">プロフィール</a></li>
                <li><a href="#skills">スキル</a></li>
                <li><a href="#portfolio">ポートフォリオ</a></li>
                <li><a href="#contact">連絡先</a></li>
                {/* <li><a href="#language">English</a></li> */}
            </ul>
        </header>
    );
};

export default Header;