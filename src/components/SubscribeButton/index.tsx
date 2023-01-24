import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

import { SessionProps } from "../../pages/posts/[slug]";

interface Props {
  type: "subscribe" | "login" | "register";
  text: string;
}

export function SubscribeButton({ type, text }: Props) {
  const userSession = useSession();
  const router = useRouter();

  const session = userSession.data as SessionProps;

  async function handleSubscribe() {
    if (type !== "subscribe") return;

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
      const response = await api.post("/subscribe", {
        user: session,
      });

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
      {text}
    </button>
  );
}
