import styles from "./socialNetworks.module.scss"

import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function SocialNetworks() {
  return (
    <>
		<div className={styles.icons}>
			<Link className={styles.icon} href="https://www.linkedin.com/in/raphael-azambuja-15001a212/" target="_blank"><FaLinkedin /></Link>
			<Link className={styles.icon} href="https://api.whatsapp.com/send/?phone=554899341106" target="_blank"><IoLogoWhatsapp /></Link>
			<Link className={styles.icon} href="https://github.com/RaphaelAzambuja" target="_blank"><FaGithub /></Link>
		</div>
    </>
  )
}
