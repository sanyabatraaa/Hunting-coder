// pages/about.js
import Image from "next/image";
import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
   <>
      <Head>
        <title>About - Your Blog Name</title>
        <meta name="description" content="Learn more about our blog and team." />
      </Head>
      <br></br><br></br>
      <div className={styles.container}>
        <h1>About Us</h1>
        <p>Welcome to our blog! We are passionate about sharing knowledge and insights on various topics.</p>
        <p>Our mission is to provide valuable content that inspires, educates, and entertains our readers.</p>
        <br></br><br></br>
        <h2>Our Team</h2>
        <div className={styles.team}>
          <div className={styles.member}>
          <Image  src="/def.avif" width={237} height={185}/>
            <div className={styles.memberInfo}>
              <h3>John Doe</h3>
              <p>Founder & Editor-in-Chief</p>
              <p>John is a passionate writer and editor, dedicated to bringing quality content to our readers.</p>
            </div>
          </div>
          <div className={styles.member}>
          <Image  src="/jane.avif" width={237} height={185}/>
            <div className={styles.memberInfo}>
              <h3>Jane Smith</h3>
              <p>Senior Writer</p>
              <p>Jane loves exploring new topics and sharing her knowledge with our audience.</p>
            </div>
          </div>
          <div className={styles.member}>
          <Image  src="/abc.avif" width={237} height={185}/>
            <div className={styles.memberInfo}>
              <h3>Michael Johnson</h3>
              <p>Developer</p>
              <p>Michael is responsible for the development and maintenance of our blog platform.</p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default About;
