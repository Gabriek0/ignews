import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/global.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ig.news</title>
      </Head>
      <h1 className={styles.title}>Olá</h1>
    </>
  )
}

export default Home
