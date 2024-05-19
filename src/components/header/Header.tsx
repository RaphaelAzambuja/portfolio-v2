'use client'

import { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { RxHamburgerMenu } from 'react-icons/rx';
import SocialNetworks from '../socialNetworks/SocialNetworks';
import styles from './header.module.scss';
import Link from 'next/link';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const scrollToAnchor = (anchorId: string) => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
            window.scrollTo({
                behavior: "smooth",
                top:0
              });

            if (window.innerWidth < 1000) {
                setMenuOpen(false);
            }
        }
    };

    return (
        <>
            {menuOpen ? (
                <AiOutlineClose className={styles.hamburgerIcon} onClick={toggleMenu} />
            ) : (
                <RxHamburgerMenu className={styles.hamburgerIcon} onClick={toggleMenu} />
            )}

            <header className={`${styles.header} ${menuOpen ? styles.open : ''}`}>
                <div className={`${styles.linksbox} ${menuOpen ? styles.open : ''}`}>
                    <Link className={`${styles.link} ${activeMenuItem === 'home' ? styles.active : ''}`} href='#' onClick={() => scrollToAnchor('home')}>Home</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'abilities' ? styles.active : ''}`} href='#abilities'>Ferramentas</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'projects' ? styles.active : ''}`} href='#projects'>Projetos</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'experiences' ? styles.active : ''}`} href='#experiences'>Experiências</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'skills' ? styles.active : ''}`} href='#skills'>Competências</Link>
                </div>
                <SocialNetworks />
            </header>
        </>
    );
}
