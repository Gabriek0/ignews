import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss'
import Image from 'next/image'
import { GetServerSideProps } from 'next'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string,
    amount: number
  }
}

const Home: NextPage<HomeProps> = ({ product }: HomeProps) => {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about <br />the <span>React</span> world.</h1>
          <p>Set access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>


        <Image
          src="/images/avatar.svg"
          alt="Girl coding"
          width={500}
          height={500}
        />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve('price_1KIZXTHv09NF3LHzZi4jcSkl')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount! / 100)
  }

  return {
    props: {
      product
    },
  }
}

export default Home;
