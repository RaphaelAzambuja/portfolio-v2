'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import marujoArtImage from '../../../assets/marujoartstattoo.png';
import olisaude from '../../../assets/olisaude-logotipo.png';
import helpdesk from '../../../assets/helpdesk.png';
import styles from './projects.module.scss';
import GitHubButton from '../buttons/gitHubButton/GitHubButton';

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const values = [
    { title: "APIs OlíSaúde", text: "Teste usado para testar e aprimorar minhas habilidades com Laravel.", image: olisaude, link: 'https://github.com/RaphaelAzambuja/teste-tecnico-olisaude' },
    { title: "Service-Desk", text: "Um app para gerenciar chamados de helpdesk e servicedesk usado para aprimorar os designs patterns repository, service e mvc.", image: helpdesk, link: 'https://github.com/RaphaelAzambuja/service-desk' },
  ];

  return (
    <>
    <main id="projects">
      <h2 className={styles.projectTitle}>Nem só de ferramentas viverá o produto!</h2>
      <p className={styles.text}>Em projetos pessoais amplio meus conhecimentos conceituais.</p>

      <div className={styles.projects}>
      {values.map((value, index) => (
        <div className={styles.project} key={index}>
          <h2 className={styles.title}>{value.title}</h2>
          <Image className={styles.image} src={value.image} alt='image' />
          <p className={styles.description}>{value.text}</p>
          <GitHubButton link={value.link} />
        </div>
      ))}
      </div>
    </main>
    </>
  );
}
