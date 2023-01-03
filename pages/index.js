import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1>next Js Start</h1>
      </div>
    </>
  );
}
