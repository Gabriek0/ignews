import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession();

    function handleSubsribe() {
        if (!session) {
            signIn();
            return;
        }

        // create checkout session
    }

    return (
        <button
            type='button'
            className={styles.subscribeButton}>
            Subscribe now
        </button>

    )
}