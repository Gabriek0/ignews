import { loadStripe } from '@stripe/stripe-js';

// integration stripe with front-end

export async function getStripeJs() {
    const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)

    return stripeJs
}