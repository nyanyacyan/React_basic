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
        <header>
            <nav>
                {/* {ハンバーガーアイコン} */}
                <div className="hamburger" onClick={openMenu}>
                    <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                    <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                    <div className={isMenuOpen ? 'bar open' : 'bar'}></div>
                </div>

                {/* {メニューアイコン} */}
                <ul ref={menuRef} className={isMenuOpen ? 'menu open' : 'menu'}>
                    <li><a href="#top">トップ</a></li>
                    <li><a href="#about">このサイトについて</a></li>
                    <li><a href="#profile">プロフィール</a></li>
                    <li><a href="#skills">スキル</a></li>
                    <li><a href="#portfolio">ポートフォリオについて</a></li>
                    <li><a href="#contact">連絡先</a></li>
                    <li><a href="#language">English</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;