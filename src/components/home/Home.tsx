"use client"

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import styles from "./home.module.scss";

export default function Home() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedPhrase, setDisplayedPhrase] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const icons = [<FaGithub />];
  useEffect(() => {
    const phrases = [
      'Desenvolvedor Back-end',
      'Desenvolvedor Front-end',
      'Artesão Web',
    ];

    const currentPhrase = phrases[currentPhraseIndex];

    let index = 0;
    let forward = true;
    const interval = setInterval(() => {
      if (forward) {
        if (index <= currentPhrase.length) {
          setDisplayedPhrase(currentPhrase.substring(0, index));
          index++;
        } else {
          forward = false;
          setIsTypingComplete(true);
          setTimeout(() => {
            setIsTypingComplete(false);
            clearInterval(interval);
            clear();
          }, 2000);
        }
      } else {
        if (index >= 0) {
          setTimeout(() => {
            setDisplayedPhrase(currentPhrase.substring(0, index));
            index--;
          }, 3000);
        } else {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          clearInterval(interval);
        }
      }
    }, 100);

    const clear = () => {
      setTimeout(() => {
        if (index >= 0) {
          setDisplayedPhrase(currentPhrase.substring(0, index));
          index--;
          clear();
        } else {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }, 500);
    };

    return () => clearInterval(interval);
  }, [currentPhraseIndex]);
  return (
    <>
        <div className={styles.box}>
            <h1 className={styles.title}>Raphael Azambuja</h1>
            <h3 className={styles.phrase}>{displayedPhrase}</h3>
            <p className={styles.description}>
                Sou um jovem desenvolvedor que produz soluções com qualidade, 
                elegância e simplicidade com o objetivo de proporcionar uma ótima 
                experiência e encantar os usuários.
            </p>
        </div>
    </>
  )
}