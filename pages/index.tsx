import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LoginModal from './components/LoginModal'

export default function Home() {
  return (
    <div className={styles.container}>Unilogin
      <LoginModal />
    </div>
  )
}
