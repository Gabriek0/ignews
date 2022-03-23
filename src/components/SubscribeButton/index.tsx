import { signIn, useSession } from 'next-auth/react';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession();

    async function handleSubscribe() {
        if (!session) {
            signIn();
            return;
        }

        // create checkout session
        try {
            const response = await api.post('/subscribe')

            const { sessionId } = response.data;

            const stripe = await getStripeJs();

            await stripe!.redirectToCheckout({ sessionId })

        } catch (err) {
            let errorMessage = 'Failed';
            if (err instanceof Error) {
                errorMessage = err.message;
            }
            alert(errorMessage);
        }
    }

    return (
        <button
            type='button'
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>

    )
}