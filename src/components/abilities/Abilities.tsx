import { SiExpress, SiLivewire, SiNestjs, SiNuxtdotjs, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaBootstrap, FaDocker, FaJava, FaLaravel, FaLinux, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import styles from './abilities.module.scss';

export default function Abilities() {
  const icons = [
    { icon: <FaJava />, name: 'Java'},
    { icon: <SiSpringboot />, name: 'Spring Boot'},
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <FaReact />, name: 'React' },
    { icon: <TbBrandNextjs />, name: 'Next' },
    { icon: <IoLogoSass />, name: 'Sass' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <BiLogoPostgresql />, name: 'PostgreSQL' },
    { icon: <BiLogoMongodb />, name: 'MongoDB' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaLinux />, name: 'Linux' },
  ];

  return (
    <>
		<main id='abilities' className={styles.main}>
			<h2 className={styles.title}>Um bom desenvolvedor utiliza ótimas ferramentas.</h2>
			<p className={styles.text}>Possuo conhecimento em diversas tecnologias.</p>
			
			<div className={styles.box}>
			{icons.map((item, index) => (
				<div className={styles.abilitie} key={index}>
					<div className={styles.name}>{item.name}</div>
					<div className={styles.icon}>{item.icon}</div>
				</div>
			))}
			</div>
		</main>
    </>
  );
}
