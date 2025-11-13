import styles from './HomePage.module.scss'
import { Header } from '../../../widgets'
import Footer from '../../../widgets/Footer/ui/Footer'

const HomePage = () => {

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.content}>

      </main>
      <Footer />
    </div>
  )
}

export default HomePage