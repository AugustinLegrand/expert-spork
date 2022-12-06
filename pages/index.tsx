import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Export Spork</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='main' role="main">
        <section className='info'>
          <div className='info-container'>
            <h1 className='info-title'>Expert Spork</h1>
            <p className='info-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus vel id consequatur a ipsam earum omnis debitis eius labore esse voluptatibus quas iste amet obcaecati molestiae praesentium, odio nisi ullam.</p>
          </div>
          <Image src='/vercel.svg' alt='Vercel logo' width={272} height={116} />
        </section>
        <section className='offert'>
          <div className='offert-container'>
            <h2 className='offert-title'>Notre offre la plus rentable</h2>
            <p className="offert-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, doloremque!</p>
          </div>
          <Link href='/'>En savoir plus</Link>
        </section>
        <section className="news">
          <div className='news-container'>
            <h2 className="news-container-title">Les nouveautés</h2>
          </div>
          <div className='news-list'>
            <div className='news-item'></div>
            <div className='news-item'></div>
            <div className='news-item'></div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home
