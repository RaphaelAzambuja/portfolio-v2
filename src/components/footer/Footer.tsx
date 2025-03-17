import SocialNetworks from "../socialNetworks/SocialNetworks"
import styles from "./footer.module.scss"
export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
            <footer className={styles.footer}>
                <p className={styles.text}>© Raphael Azambuja 2024-{year}. Feito com next e muito carinho</p>
            </footer>
        </>
    )
}