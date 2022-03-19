import Stripe from 'stripe';

// ! -> Non-null assertion, faz o typescript confiar que não será null ou undefined.
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
    apiVersion: '2020-08-27',
    appInfo: {
        name: 'Ignews',
        version: '0.1.0'
    },
});