import { redirect } from "next/navigation";
import styles from "./page.module.scss";

const Home = () => {
  redirect('/about');

  return (
    <div className={styles.main}>
    </div>
  );
}

export default Home;
