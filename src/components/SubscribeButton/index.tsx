import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

export function SubscribeButton() {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleSubscribe() {
    if (!session) {
      signIn();
      return;
    }

    if (session.activeSubscription) {
      router.push("/posts");
      return;
    }

    // create checkout session
    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe!.redirectToCheckout({ sessionId });
    } catch (err) {
      let errorMessage = "Failed";
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      alert(errorMessage);
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  );
}
