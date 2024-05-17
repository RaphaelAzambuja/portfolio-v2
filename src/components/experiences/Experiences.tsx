'use client'

import { useState, useEffect } from 'react';
import cebrac from '../../../assets/cebrac.jpg';
import prefeitura from '../../../assets/prefeitura.jpg';
import exon from '../../../assets/exon.jpg';
import Image from 'next/image';
import './Experiences.scss';

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
      img: exon,
      date: '01/24 - 04/24',
      name: 'Exon Sistemas',
      title: 'Desenvolvedor WEB full-stack.',
      description: 'Responsavel por implementar features e prestar manutenções no produto da empresa utilizando Laravel, Javascript e SQLServer.',
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
    <div id='experiences' className="d-flex flex-column justify-content-center align-items-center bg-white py-5 my-5">
      <h2 className="text-center mt-5">Minhas experiências profissionais</h2>
      <div className="experiences-box mt-5 rounded-top shadow my-5 d-flex flex-column col-10 col-sm-10 col-md-9 col-lg-8">
        {experiences.map((experience, index) => (
          <div key={index} className={`d-flex align-items-center py-4 px-3 ${windowWidth < 700 ? 'flex-column' : 'flex-row'}`}>
            <div className="experience-image me-3">
              <Image src={experience.img} width={150} height={150} className="rounded-circle" alt="Image not found :(" />
            </div>
            <div>
              <div className='fw-bolder'>{experience.date} <span className="name">{experience.name}</span></div>
              <div className='fw-bolder'>{experience.title}</div>
              <div className="mt-3">
                <p className="mb-0">{experience.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
