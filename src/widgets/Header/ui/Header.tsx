import React from 'react'
import styles from './Header.module.scss'
import LogoIcon from '../../../shared/assets/icons/Logo.svg?react'
import { Button }  from '../../../shared/ui'
import { AppIcon } from '../../../shared/ui'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.section}>
            <LogoIcon className={styles.logo}/>
            <Button theme='ghost'>
                <AppIcon />
            </Button>
        </div>
    </header>
  )
}

export default Header