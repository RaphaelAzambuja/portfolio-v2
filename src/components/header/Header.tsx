import { FaRibbon } from "react-icons/fa";
import SocialNetworks from "../socialNetworks/SocialNetworks";
import styles from "./header.module.scss"
import Link from "next/link";

export default function Header() {
    return (
        <>
            <div className={styles.message}>
                Ajude o Rio Grande do Sul:
                <Link href="https://www.exercitodesalvacao.org.br/post/ajude-as-v%C3%ADtimas-das-enchentes-no-rs" target="_blank"> Exército de Salvação</Link>
            </div>
            <header className={styles.header}>
                <div className={styles.linksbox}>
                    <Link className={styles.link} href={'/'}>Home</Link>
                    <Link className={styles.link} href={'/'}>Ferramentas</Link>
                    <Link className={styles.link} href={'/'}>Projetos</Link>
                    <Link className={styles.link} href={'/'}>Experiências</Link>
                    <Link className={styles.link} href={'/'}>Competências</Link>
                    <Link className={styles.link} href={'/'}>Contato</Link>

                    <SocialNetworks />
                </div>
            </header>
        </>
    )
}
