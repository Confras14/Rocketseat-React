import styles from "./Header.modules.scss"

export function Header() {
  return(
    <header className={styles.header}>
      <h1><strong>Ignite Feed</strong></h1>
    </header>
  )
}