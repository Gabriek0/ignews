import { NextPage } from "next";

import styles from "./styles.module.scss";

const Login: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>
          Let's <span>sign you</span> in
        </h1>
      </div>
    </main>
  );
};

export default Login;
