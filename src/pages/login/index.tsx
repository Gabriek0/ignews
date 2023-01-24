import { NextPage } from "next";

// Components
import { Input } from "../../components/Input";

import styles from "./styles.module.scss";

import { Envelope, Lock } from "phosphor-react";

const Login: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1>
          Let's <span>sign you</span> in
        </h1>

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
      </div>
    </main>
  );
};

export default Login;
