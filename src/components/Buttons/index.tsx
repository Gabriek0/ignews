import { useRouter } from "next/router";

import styles from "./styles.module.scss";

// Phosphor Icons
import { User } from "phosphor-react";

export function Buttons() {
  const router = useRouter();

  function redirectUser(route: string): void {
    router.push(route);
  }

  return (
    <div className={styles.buttonContainer}>
      <button
        type="button"
        className={styles.buttonSignIn}
        onClick={() => redirectUser("/login")}
      >
        <User />
        SIGN IN
      </button>
      <button
        type="button"
        className={styles.buttonSignUp}
        onClick={() => redirectUser("/login")}
      >
        SIGN UP
      </button>
    </div>
  );
}
