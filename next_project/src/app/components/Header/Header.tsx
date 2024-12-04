import { HeaderProps } from "@/app/interfaces";
import styles from "./Header.module.css";

export default function Header({ text, array }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>REACT APP {text.id}</span>
      </div>

      <nav>
        <ul className={styles.navigation}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>{text.message}</li>
        </ul>
      </nav>
      <div>
        {array.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </header>
  );
}
