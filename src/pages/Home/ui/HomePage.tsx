import styles from './HomePage.module.scss'
import { Header } from '../../../widgets'
import Footer from '../../../widgets/Footer/ui/Footer'
import { Button, Tabs } from '../../../shared/ui'
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
        <Tabs defaultValue='1'>
          <Tabs.List>
            <Tabs.Trigger value='1'>1</Tabs.Trigger>
            <Tabs.Trigger value='2'>2</Tabs.Trigger>
            <Tabs.Trigger value='3'>3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.List>
            <Tabs.Content value='1'>1</Tabs.Content>
            <Tabs.Content value='2'>2</Tabs.Content>
            <Tabs.Content value='3'>3</Tabs.Content>
          </Tabs.List>
        </Tabs>
        <Button onClick={() => setError(true)}>Click</Button>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage