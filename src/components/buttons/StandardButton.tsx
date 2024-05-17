import styles from "./standardButton.module.scss";

export default function StandardButton({ icon, text, link}: {icon: any, text: string, link: string}) {
  function runLink() {
    window.open(link, '_blank')
  }
  
  return (
    <>
      <button className={styles.button} onClick={runLink} meta-link={link}>
        <i className={styles.icon}>{icon}</i>
        <h6 className={styles.text}>{text}</h6>
      </button>
    </>
  )
}
