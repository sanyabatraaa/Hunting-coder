import React from 'react'
import Link from 'next/link';
import styles from "@/styles/Home.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/About'><li>About</li></Link>
          <Link href='/Blog'><li>Blog</li></Link>
          <Link href='/Contact'><li>Contact</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
