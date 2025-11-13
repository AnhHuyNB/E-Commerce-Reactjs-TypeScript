import React from 'react'
import styles from './Header.module.scss'
import LogoIcon from '../../../shared/assets/icons/Logo.svg?react'
import MaPin from '../../../shared/assets/icons/MapPin.svg?react'
import SearchIcon from '../../../shared/assets/icons/Search.svg?react'
import UserIcon from '../../../shared/assets/icons/Users.svg?react'
import { AppIcon, Button, Input } from '../../../shared/ui'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher'
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher'
import { useNavigate } from 'react-router'
import { RoutePaths } from '../../../shared/config/route/routePaths'

const Header = () => {
  const { t } = useTranslation()

  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate(RoutePaths.login)
  }
  return (
    <header className={styles.header}>
        <div className={styles.section}>
            <LogoIcon className={styles.logo}/>
            <Button theme='ghost'>
                <AppIcon Icon={MaPin}/>
                <span>10115 New York</span>
            </Button>
        </div>
        <div className={styles.section}>
          <Input 
            rounded
            placeholder={t("header.searchBy")}
            Icon={<AppIcon size={18} Icon={SearchIcon} theme='background'/>}
          />
        </div>
        <div className={styles.section}>
          <Button theme='secondary'>{t("header.cart")}</Button>
          <Button onClick={handleLoginClick} theme='outline'>
            <AppIcon Icon={UserIcon} filled/>
            <span>{t("header.login")}</span>
          </Button>

          <ThemeSwitcher />

          <LanguageSwitcher />
        </div>
    </header>
  )
}

export default Header