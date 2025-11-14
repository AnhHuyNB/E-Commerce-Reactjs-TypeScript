import styles from './HomePage.module.scss'
import { Header } from '../../../widgets'
import Footer from '../../../widgets/Footer/ui/Footer'
import { Button } from '../../../shared/ui'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [error, setError] = useState(false)

  useEffect(()=>{
    if(error) throw new Error();
  },[error])

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>
        <Button onClick={() => setError(true)}>Click</Button>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage