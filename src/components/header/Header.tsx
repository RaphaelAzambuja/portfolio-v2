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
            window.scrollTo({
                behavior: "smooth",
                top: anchor.offsetTop
            });

            setActiveMenuItem(anchorId);

            if (window.innerWidth < 1000) {
                setMenuOpen(false);
            }
        }
    };

    const handleScroll = () => {
        const sections = ['home', 'abilities', 'projects', 'experiences', 'skills'];
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (let i = 0; i < sections.length; i++) {
            const section = document.getElementById(sections[i]);
            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveMenuItem(sections[i]);
                    break;
                }
            }
        }
    };

    useEffect(() => {
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
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'home' ? styles.active : ''}`} 
                        href='#' 
                        onClick={() => scrollToAnchor('home')}
                    >
                        Home
                    </Link>
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'abilities' ? styles.active : ''}`} 
                        href='#abilities' 
                        onClick={() => scrollToAnchor('abilities')}
                    >
                        Ferramentas
                    </Link>
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'projects' ? styles.active : ''}`} 
                        href='#projects' 
                        onClick={() => scrollToAnchor('projects')}
                    >
                        Projetos
                    </Link>
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'experiences' ? styles.active : ''}`} 
                        href='#experiences' 
                        onClick={() => scrollToAnchor('experiences')}
                    >
                        Experiências
                    </Link>
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'skills' ? styles.active : ''}`} 
                        href='#skills' 
                        onClick={() => scrollToAnchor('skills')}
                    >
                        Competências
                    </Link>
                    <Link 
                        className={`${styles.link} ${activeMenuItem === 'mailer' ? styles.active : ''}`} 
                        href='#mailer' 
                        onClick={() => scrollToAnchor('mailer')}
                    >
                        contato
                    </Link>
                </div>
                <SocialNetworks />
            </header>
        </>
    );
}
