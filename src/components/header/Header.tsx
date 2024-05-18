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

    const scrollToAnchor = (anchorId: any) => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });

            if (window.innerWidth < 1000) {
                setMenuOpen(false);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            const sections = ['home', 'abilities', 'projects', 'experiences', 'services'];

            let activeSection = '';
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        activeSection = sectionId;
                    }
                }
            });

            setActiveMenuItem(activeSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {menuOpen ? (
                <AiOutlineClose className={styles.hamburgerIcon} onClick={toggleMenu} />
            ) : (
                <RxHamburgerMenu className={styles.hamburgerIcon} onClick={toggleMenu} />
            )}

            <header className={`${styles.header} ${menuOpen ? styles.open : ''}`}>
                <div className={`${styles.linksbox} ${menuOpen ? styles.open : ''}`}>
                    <Link className={`${styles.link} ${activeMenuItem === 'home' ? styles.active : ''}`} href='#home' onClick={() => scrollToAnchor('home')}>Home</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'abilities' ? styles.active : ''}`} href='#abilities' onClick={() => scrollToAnchor('abilities')}>Ferramentas</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'projects' ? styles.active : ''}`} href='#projects' onClick={() => scrollToAnchor('projects')}>Projetos</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'experiences' ? styles.active : ''}`} href='#experiences' onClick={() => scrollToAnchor('experiences')}>Experiências</Link>
                    <Link className={`${styles.link} ${activeMenuItem === 'services' ? styles.active : ''}`} href='#skills' onClick={() => scrollToAnchor('skills')}>Competências</Link>
                </div>
                    <SocialNetworks />
            </header>
        </>
    );
}
