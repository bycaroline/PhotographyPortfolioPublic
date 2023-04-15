import React, { useState } from "react";
import styles from './header.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Routes, Route } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import TbMenu from 'react-icons/tb'

function Header() {
    const [nav, setNav] = useState(false)
    return (
        <header className={styles.header} >
            <div className={styles.logo}>by caroline eklund</div>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li>
                        <a href="/"> home</a>
                    </li>

                    <li>
                        <a href="/projects"> projects</a>
                    </li>
                    <li>
                        <a href="/contact"> contact</a>
                    </li>
                </ul>

            </nav>
            <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose style={{ size: "40" }} /> : <AiOutlineMenu style={{ size: "40" }} />}
            </div>
        </header>
    )
}

export default Header;

