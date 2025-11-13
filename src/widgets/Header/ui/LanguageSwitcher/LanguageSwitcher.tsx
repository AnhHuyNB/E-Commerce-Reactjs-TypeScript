import React from 'react'
import { AppIcon, Button } from '../../../../shared/ui'
import { useTranslation } from 'react-i18next'
import { languageIconList, type SupportedLgnsType } from '../../../../shared/config/i18n/languageIconList'

export const LanguageSwitcher = () => {
    const {i18n} = useTranslation()

    const currentLanguage = i18n.language as SupportedLgnsType

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en'? 'vn':'en')
    }
  return (
    <Button onClick={toggleLanguage} theme='ghost'>
        <AppIcon Icon={languageIconList[currentLanguage]}/>
    </Button>
  )
}
