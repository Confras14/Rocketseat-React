import styles from "./Header.module.scss"

import igniteLogo from "../assets/igniteLogo.svg"

export function Header() {
  return(
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do ignite feed" />
      <h1>Ignite Feed</h1>
    </header>
  );
}