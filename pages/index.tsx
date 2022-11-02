import styles from '../styles/Home.module.css'
import { LoadingProvider } from './components/Loading/LoadingContext'
import LoginModal from './components/LoginModal'

export default function Home() {

  return (
    <LoadingProvider>
      <div className={styles.container}>
        <h1 className={styles.header}>Unilogin Demo (ETH goerli testnet)</h1>
        <LoginModal />
      </div>
    </LoadingProvider>
  )
}
