'use client';

import React from 'react';
import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Review for the national high school graduation exam.</h1>
        <div className={styles.navigation}>
          <Link href="/testExample/math" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Math example test</h2>
            </div>
          </Link>
          <Link href="/testExample/literature" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Literature example test</h2>
            </div>
          </Link>
          <Link href="/testExample/physics" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Physical example test</h2>
            </div>
          </Link>
          <Link href="/testExample/chemistry" className={styles.navLink}>
            <div className={styles.card}>
              <h2>Chemistry example test</h2>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
