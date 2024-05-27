'use client'

import React, { useState } from 'react';
import styles from './projects.module.scss';
import GitHubButton from '../buttons/gitHubButton/GitHubButton';
import { DiRedis } from 'react-icons/di';
import { FaJava, FaLaravel, FaPhp } from 'react-icons/fa';
import { SiRuby, SiRubyonrails, SiSpringboot } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: React.SetStateAction<number>) => {
    setIndex(selectedIndex);
  };

  const values = [
    { 
      title: "Todo-List", 
      text: "API em Java utilizando Spring Boot para consolidar os padrões de design da linguagem e o ORM oferecido pelo framework. Na implementação, utilizei os padrões de Repository, Service, DTOs e Builder. Para as entidades, apliquei mapeamento ORM para a criação das tabelas no banco de dados.", 
      link: "https://github.com/RaphaelAzambuja/todo-list-java",
      icons: [<FaJava />, <SiSpringboot />, <BiLogoPostgresql />]
    },
    { 
      title: "Mailer", 
      text: "Um simples Mailer criado em Java e SpringBoot. Foi criado para fixação da sintaxe e padrões da linguagem e anotações do framework. No projeto foi usada a biblioteca padrão da ferramenta para envio de emails.", 
      link: "https://github.com/RaphaelAzambuja/mailer-java",
      icons: [<FaJava />, <SiSpringboot />]
    },
    { 
      title: "APIs OlíSaúde", 
      text: "Teste técnico usado para testar e aprimorar minhas habilidades com Laravel e seu ecossistema através da criação de uma API restfull. No projeto foram usados os padrões repository, service e DTOs. Também foram usados contratos para manter a padronização e legibilidade do código.", 
      link: 'https://github.com/RaphaelAzambuja/teste-tecnico-olisaude',
      icons: [<FaPhp />, <FaLaravel />, <BiLogoPostgresql />]
    },
    { 
      title: "Service-Desk", 
      text: "API Criada em ruby on rails com o intuito de treinar a usabilidade e fixar os conceitos de repositories e services. A ferramenta foi escolhida por conta de sua simplicidade já que o objetivo era compreender conceitos que podems ser aplicados em qualquer ferramenta.", 
      link: 'https://github.com/RaphaelAzambuja/service-desk', 
      icons: [<SiRuby />, <SiRubyonrails />, <BiLogoPostgresql />]
    },
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
          <p className={styles.description}>{value.text}</p>
          <div className={styles.icons}>
            {value.icons.map((icon, index) =>(
              <div key={index} className={styles.icon}>{icon}</div>
            ))}
          </div>
          <GitHubButton link={value.link} />
        </div>
      ))}
      </div>
    </main>
    </>
  );
}
