import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="/">
            <h1>Tarefas+</h1>
          </Link>
        </nav>
      </section>
    </header>
  );
}
