import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import Link from 'next/link';
import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt='logo' />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a className={styles.active}>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}