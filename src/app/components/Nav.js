import React from 'react'
import styles from "../styles/navbar.module.css"
import Link from "next/link"

const Nav = () => {
  return (
    <div>
          <nav className={styles.navbar}>

            <div >
                    <ul className={styles.navbarList}>
                      <li className={styles.navbarItem}></li>
                          <Link className={styles.navbarLink} href='/'>
                            Home
                          </Link>

                            <Link className={styles.navbarLink} href='/about'>
                                About
                            </Link>

                            <Link className={styles.navbarLink} href='movie'>
                            Movie
                            </Link>

                            <Link className={styles.navbarLink} href='contact'>
                                ContactUs 
                            </Link>
                    </ul>

            </div>
          </nav>
    </div>
  )
}

export default Nav
