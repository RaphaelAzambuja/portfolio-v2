'use client';

import { useState, useEffect } from 'react';
import cebrac from '../../../assets/cebrac.jpg';
import prefeitura from '../../../assets/prefeitura.jpg';
import exon from '../../../assets/exon.jpg';
import nitro from '../../../assets/nitro.jpg';
import Image from 'next/image';
import styles from './Experiences.module.scss';

export default function Experiences() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const experiences = [
    {
      img: nitro,
      date: '07/24 - Atualmente',
      name: 'Nitro Ecommerce',
      title: 'Desenvolvedor PHP.',
      description: 'Responsável por implementar funcionalidades e manter a qualidade de diversos produtos e sistemas da empresa, além de fornecer suporte ao usuário para garantir melhor usabilidade e satisfação do cliente.',
    },
    {
      img: exon,
      date: '01/24 - 04/24',
      name: 'Exon Sistemas',
      title: 'Desenvolvedor WEB full-stack.',
      description: 'Fui responsavel por prestar manutenções no principal produto da empresa utilizando Laravel, Javascript e SQLServer.',
    },
    {
      img: prefeitura,
      date: '06/23 - 01/24',
      name: 'Prefeitura de Criciúma',
      title: 'Estágiario no setor de tecnologia do paço municipal.',
      description: 'Tabalhei no setor de desenvolvimento com CakePHP, JavaScript e MySQL Também fiz parte do suporte em infraestrutura e redes.',
    },
    {
      img: cebrac,
      date: '08/22 - 04/23',
      name: 'CEBRAC',
      title: 'Professor de informática básica voltada a gestão.',
      description: 'Preparava aulas e lecionava para turmas com alunos das mais variadas idades. Em algumas turmas VIP’s tive a oportunidade de lecionar introdução ao desenvolvimento WEB.',
    },
  ];

  return (
    <div id='experiences' className={styles.experiences}>
      <h2>Minhas experiências profissionais.</h2>
      <div className={styles.container}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles['image-container']}>
              <Image src={experience.img} width={150} height={150} alt="Image not found :(" />
            </div>
            <div className={styles['date-name']}>
              {experience.date} <span>{experience.name}</span>
            </div>
            <div className={styles.title}>{experience.title}</div>
            <div className={styles.description}>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
