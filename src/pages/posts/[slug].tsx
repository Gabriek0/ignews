import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { RichText } from "prismic-dom";
import { useEffect } from "react";
import { getPrismicClient } from "../../services/prismic";

import styles from "./post.module.scss";

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export interface SessionProps extends Session {
  activeSubscription: {
    ref: {};
    ts: number;
    data: {
      id: string;
      userId: {};
      status: string;
      price_id: string;
    };
  };
}

export default function Post({ post }: PostProps) {
  const router = useRouter();
  const userSession = useSession();

  const session = userSession.data as SessionProps;

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

// Todas as páginas que são geradas de forma estática
// disponibilizam o conteúdo inteiro sem verificação

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = (await getSession({ req })) as SessionProps;

  const slug = params?.slug;

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient(req);

  const response: any = await prismic.getByUID(
    "publication",
    String(slug!),
    {}
  );

  const post = {
    slug,
    title: RichText.asText(response?.data.title),
    content: RichText.asHtml(response?.data.content),
    updatedAt: new Date(response?.last_publication_date!).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
  };
};
