import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/streams">Live Streams</Link>
      </nav>
      <main className={styles.container}>
        {children}
      </main>
    </>
  );
}
