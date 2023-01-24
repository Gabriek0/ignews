import { NextPage } from "next";

// Components
import { Input } from "../../components/Input";
import { SubscribeButton } from "../../components/SubscribeButton";

// Styles
import styles from "./styles.module.scss";

// Phosphor Icons
import {
  Envelope,
  GithubLogo,
  GoogleLogo,
  LinkedinLogo,
  Lock,
} from "phosphor-react";

const Login: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>
          Let's <span>sign you</span> in
        </h1>

        <div className={styles.loginContainer}>
          <Input
            label="Email"
            icon={<Envelope />}
            placeholder="Your Email"
            type="email"
          />
          <Input
            label="Password"
            icon={<Lock />}
            placeholder="********"
            type="password"
          />

          <p>
            Don’t have an account? <strong>Register</strong>{" "}
          </p>

          <SubscribeButton type="login" text="Sign in" />

          <div className={styles.separator}>
            <div className={styles.row} />
            <p>Or login with</p>
            <div className={styles.row} />
          </div>

          <div className={styles.icons}>
            <GoogleLogo />
            <GithubLogo />
            <LinkedinLogo />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
