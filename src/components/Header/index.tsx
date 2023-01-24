import Link from "next/link";

// Components
import { ActiveLink } from "../ActiveLink";
import { SignInButton } from "../SignInButton";

// Styles
import styles from "./styles.module.scss";

// Hooks
import useWindowSize from "../../utils/useWindowSize";

// Icons
import { List } from "phosphor-react";
import { Buttons } from "../Buttons";

export function Header() {
  const { width } = useWindowSize();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <img src="/images/logo.svg" alt="Ignews logo" />
        </Link>

        <div className={styles.headerNav}>
          {width < 780 ? (
            <List size={43} color="#fff" />
          ) : (
            <>
              <nav>
                <ActiveLink activeClassName={styles.active} href="/">
                  <a className={styles.active}>Home</a>
                </ActiveLink>
                <ActiveLink
                  activeClassName={styles.active}
                  href="/posts"
                  prefetch
                >
                  <a>Posts</a>
                </ActiveLink>
              </nav>
              <Buttons />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
