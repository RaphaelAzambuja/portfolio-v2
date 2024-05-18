import Link from "next/link";
import styles from "./message.module.scss";

export default function Message() {
    return (
        <>
            <div className={styles.message}>
                Ajude o Rio Grande do Sul:
                <Link href="https://www.exercitodesalvacao.org.br/post/ajude-as-v%C3%ADtimas-das-enchentes-no-rs" target="_blank"> Exército de Salvação</Link>
            </div>
        </>
    )
}