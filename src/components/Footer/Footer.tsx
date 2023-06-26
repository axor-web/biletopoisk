import { FunctionComponent } from "react";
import Link from "next/link";
import styles from './Footer.module.css';

export const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/qa">Вопросы-ответы</Link>
      <Link href="about">О нас</Link>
    </footer>
  );
}