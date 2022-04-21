import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import { SignInButton } from '../SignInButton'
import Link from 'next/link';
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt='logo' />
                <nav>
                    <Link href="/">
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                        <a>Posts</a>
                    </Link>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}