import Image from 'next/image'
import logo from '../../../public/images/logo.svg'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header>
            <div>
                <Image src={logo} alt='logo' />
                <nav>
                    <a>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    )
}