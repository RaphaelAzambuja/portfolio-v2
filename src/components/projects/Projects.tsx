'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import marujoArtImage from '../../../assets/marujoartstattoo.png';
import olisaude from '../../../assets/olisaude-logotipo.png';
import helpdesk from '../../../assets/helpdesk.png';
import styles from './projects.module.scss';

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const values = [
    { title: "Marujo Art's Tattoo", text: "Uma landing page para expor o trabalho no estúdio de tatuagens e piercings do meu irmão.", image: marujoArtImage, link: 'https://github.com/RaphaelAzambuja/marujo-arts-tattoo' },
    { title: "APIs OlíSaúde", text: "Teste usado para testar e aprimorar minhas habilidades com Laravel.", image: olisaude, link: 'https://github.com/RaphaelAzambuja/teste-tecnico-olisaude' },
    { title: "Service-Desk", text: "Um app para gerenciar chamados de helpdesk e servicedesk usado para aprimorar os designs patterns repository, service e mvc.", image: helpdesk, link: 'https://github.com/RaphaelAzambuja/service-desk' },
  ];

  return (
    <>
		<h2 className={styles.title}>Nem só de ferramentas viverá o produto!</h2>
		<p>Em projetos pessoais amplio meus conhecimentos conceituais.</p>

		<div className={styles.projects}>
		{values.map((value, index) => (
			<div className={styles.project} key={index}>
				<h2 className={styles.title}>{value.title}</h2>
				<Image className={styles.image} src={value.image} alt='image' />
				<p className={styles.description}>{value.text}</p>
			</div>
		))}
		</div>
      
    </>
  );
}
