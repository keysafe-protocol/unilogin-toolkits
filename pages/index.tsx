import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import LoginModal from './components/LoginModal'
import PostMessageReciever from './components/PostmessageReciever'

export default function Home() {
  return (
    <div className={styles.container}>Unilogin
      <LoginModal />
    </div>
  )
}
