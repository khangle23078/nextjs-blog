import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import utilStyles from './../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Learn to <Link href="/post/first-post">Next.js!</Link>
        </h1>
        <p>My name is Khang!</p>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                <Link href={`/post/${id}`}>{id}</Link>
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}