import Header from "./components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  const text = { message: "Contact Page", id: 22 };
  const array = [10, 12, 13, 14, 15];
  return (
    <div className={styles.page}>
      <Header text={text} array={array} />
      <h1>HEllo this is my page</h1>
    </div>
  );
}
