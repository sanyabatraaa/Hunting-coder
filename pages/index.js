import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={`${styles.main} ${inter.className}`}>
        <h1> &lt;Hunting Coder/&gt; </h1>
        <br></br>
        <br></br>
        <div className={styles.imageContainer}>
          <Image src="/coder.avif" width={237} height={185} alt="Coder" />
        </div>
        <br></br>
        <br></br>
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>
        <br>
        </br><br></br>
        <section className={styles.popularBlogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to Learn JavaScript in 2024?</h3>
            <p>JavaScript is the language used to design logic for the web.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>Top 10 CSS Tricks Every Developer Should Know</h3>
            <p>Learn advanced CSS techniques to make your web projects stand out.</p>
            <button className={styles.btn}>Read More</button>
          </div>
          <div className={styles.blogItem}>
            <h3>The Future of Web Development: Trends to Watch</h3>
            <p>Stay ahead of the curve with insights into the latest web development trends.</p>
            <button className={styles.btn}>Read More</button>

          </div>
        </section>
      </main>
    </>
  );
}
