import React from 'react'
import { Link } from 'react-router'
import style from './HomePage.module.scss'
import { useTheme } from '../../../shared/config/theme/useTheme'
import { useTranslation } from 'react-i18next'
import { AppIcon, Button, Input } from '../../../shared/ui'
import SearchIcon from '../../../shared/assets/icons/Search.svg?react'

const HomePage = () => {
  const { toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()


  function changeLanguage(){
    i18n.changeLanguage(i18n.language === 'en'? 'vn':'en')
  }
  return (
    <div>
        <h1 className={style.title}>{t("hello")}</h1>
        <Button theme='tertiary' onClick={toggleTheme}>
          theme
        </Button>
        <Input placeholder='search...' Icon={
          <AppIcon Icon={SearchIcon} theme='background'/>
        }/>
        <Button onClick={changeLanguage}>{i18n.language}</Button>
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default HomePage