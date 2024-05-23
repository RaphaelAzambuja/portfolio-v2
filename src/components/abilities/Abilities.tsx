import { SiExpress, SiLivewire, SiNestjs, SiNuxtdotjs, SiTailwindcss } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaBootstrap, FaDocker, FaLaravel, FaLinux, FaPhp, FaReact, FaVuejs } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { BiLogoMongodb, BiLogoPostgresql } from 'react-icons/bi';
import styles from './abilities.module.scss';

export default function Abilities() {
  const icons = [
    { icon: <FaPhp />, name: 'PHP' },
    { icon: <FaLaravel />, name: 'Laravel' },
    { icon: <SiExpress />, name: 'Express'},
    { icon: <SiNestjs />, name: 'Nest'},
    { icon: <FaReact />, name: 'React' },
    { icon: <TbBrandNextjs />, name: 'Next' },
    { icon: <FaVuejs />, name: 'Vue' },
    { icon: <SiNuxtdotjs />, name: 'Nuxt' },
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
