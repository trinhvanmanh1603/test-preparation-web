import styles from "./page.module.css";
import React from 'react';
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Review for the national high school graduation exam.</h1>
        <div className={styles.navigation}>
          <Link href="/math" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Math Questions</h2>
              <p>Practice your math skills</p>
            </div>
          </Link>
          <Link href="/literature" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Literature Questions</h2>
              <p>Enhance your reading comprehension skills</p>
            </div>
          </Link>
          <Link href="/physics" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Physical Questions</h2>
              <p>Improve your analytical writing skills</p>
            </div>
          </Link>
          <Link href="/chemistry" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Chemistry Questions</h2>
              <p>Sharpen your analytical reasoning skills</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
