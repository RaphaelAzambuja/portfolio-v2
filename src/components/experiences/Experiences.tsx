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
      date: "07/24 - 02/25",
      name: "Nitro Ecommerce",
      title: "Desenvolvedor back-end.",
      description:
        "Fiquei responsável pela manutenção e evolução de sistemas de e-commerce, integrando APIs de pagamento, entrega e ERPs. Trabalhei com a equipe de front-end para garantir uma boa integração entre back-end e interface. Implementei melhorias de performance e segurança na plataforma, além de documentar APIs e processos para facilitar futuras manutenções",
    },
    {
      img: exon,
      date: "01/24 - 04/24",
      name: "Exon Sistemas",
      title: "Desenvolvedor WEB full-stack.",
      description:
        "Realizei manutenção em sistemas existentes, garantindo a estabilidade e a continuidade das operações para os clientes. Fiquei atento para minimizar falhas melhorando a confiabilidade da plataforma. Colaborei na implementação de requisitos solicitados pelos clientes, trabalhando junto com a equipe para garantir que as soluções atendessem às suas necessidades e fossem entregues com qualidade.",
    },
    {
      img: prefeitura,
      date: "06/23 - 01/24",
      name: "Prefeitura de Criciúma",
      title: "Estágiario no setor de tecnologia do paço municipal.",
      description:
        "Desenvolvi e mantive soluções internas para suportar operações e atender aos departamentos. Prestei suporte técnico em infraestrutura para setores do paço municipal, escolas e postos de saúde. Automatizei processos de suporte com Shell Script, otimizando tarefas repetitivas. Também trabalhei na manutenção de máquinas e configuração de sistemas, garantindo a estabilidade das operações.",
    },
    {
      img: cebrac,
      date: "08/22 - 04/23",
      name: "CEBRAC",
      title: "Professor de informática básica voltada a gestão.",
      description:
        "Lecionei informática básica e programação, adaptando as aulas conforme o nível dos alunos. Planejei as aulas de forma prática e mantive o laboratório de informática, atualizando software e hardware. Participei de reuniões pedagógicas para alinhar metodologias. Também adaptei as aulas para um aluno com baixa visão, promovendo sua inclusão no aprendizado.",
    },
  ];

  return (
    <div id='experiences' className={styles.experiences}>
      <h2>Minhas experiências profissionais.</h2>
      <div className={styles.container}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experience}>
            <div className={styles['image-container']}>
              <Image src={experience.img} width={150} height={150} alt="Imagem não encontrada :(" />
            </div>
            <div className={styles['date-name']}>
              {experience.date} <span>{experience.name}</span>
            </div>
            <div className={styles.title}>{experience.title}</div>
            <div className={styles.description}><p>{experience.description}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
}
