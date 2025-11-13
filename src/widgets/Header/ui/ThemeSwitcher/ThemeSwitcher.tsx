import React from 'react'
import { AppIcon, Button } from '../../../../shared/ui'
import { useTheme } from '../../../../shared/config/theme/useTheme'
import CircleIcon from '../../../../shared/assets/icons/Circle.svg?react'

export const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme} theme='ghost'>
        <AppIcon Icon={CircleIcon} filled/>
    </Button>
  )
}
