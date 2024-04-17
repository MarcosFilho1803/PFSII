import Image from 'next/image'
import styles from './page.module.css'
import Carros from './carros/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Olá, Mundo!
      </h1>
    </main>
  )
}
