import React from 'react'
import { Link } from 'react-router'
import style from './HomePage.module.scss'
import { useTheme } from '../../../shared/config/theme/useTheme'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()


  function changeLanguage(){
    i18n.changeLanguage(i18n.language === 'en'? 'vn':'en')
  }
  return (
    <div>
        <h1 className={style.title}>{t("hello")}</h1>
        <button onClick={toggleTheme}>theme</button>
        <button onClick={changeLanguage}>{i18n.language}</button>
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default HomePage