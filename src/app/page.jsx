import styles from "./homepage.module.css";
import Link from "next/link";
import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/categoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/Menu/Menu";
export default function Home() {
  return(
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.container}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
