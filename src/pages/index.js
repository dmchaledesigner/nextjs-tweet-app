import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Post from '../components/Post';
import PostForm from '../components/Form';
import Bio from '../components/Bio';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Posts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>


        <Bio
          headshot="https://media-exp1.licdn.com/dms/image/C5603AQG6MrpgRtnf8g/profile-displayphoto-shrink_400_400/0/1569387193032?e=1635379200&v=beta&t=R1JrEOoqYKtmQhRpqWauSIepT1TPZON3Yib5HBcv-jw"
          name="David Kevin Dev"
          tagline="Helping others do shit!"
          role="Developer"
        />




        <ul className={styles.posts}>
          <li>
            <Post
              content="Which native had shameless might fall sadness his, control harold was childe would."
              date="Jan 16th 2021"
            />
          </li>

          <li>
            <Post
              content="Which native had shameless might fall sadness his, control harold was childe would."
              date="Jan 16th 2021"
            />

          </li>

        </ul>


        <PostForm />


      </main>


    </div>
  )
}
