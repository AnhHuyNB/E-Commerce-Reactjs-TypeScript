import React, { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from 'react'
import styles from './Input.module.scss'
import { cn } from '../../lib';
import Button from '../Button/Button';
import HidenIcon from '../../assets/icons/Hide.svg?react'
import ShowIcon from '../../assets/icons/Show.svg?react'

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType{
    className?: string,
    value?: string,
    disabled?:boolean,
    rounded?: boolean,
    Icon?: ReactNode,
    onChange?: (value: string) => void
}

const Input = (props: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  const {className, value, disabled = false, rounded= false, type='text', Icon, onChange, ...rest} = props;

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    onChange?.(e.target.value)
  }

  const handleFocus = () => {
    setFocus(true)
  }
  
  const handleBlur = () => {
    setFocus(false);
  }
  return (
    <div className={cn(styles.inputContainer, className, {
      [styles.rounded]: rounded,
      [styles.disabled]: disabled,
      [styles.focus]: focus
    })}>
      {Icon}
        <input 
          {...rest}
          value={value}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={showPassword&&type==='password'? 'text': type}
          className={cn(styles.input, {
            [styles.disabled]: disabled
          })}
        />
        {type === 'password'&&(
          <Button theme="ghost" type="button" className={styles.toggleVisibility} onClick={toggleShowPassword}>
            {showPassword? <HidenIcon/> : <ShowIcon/>}
          </Button>
        )}
    </div>
  )
}

export default Input;
