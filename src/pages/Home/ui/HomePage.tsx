import React from 'react'
import { Link } from 'react-router'

const HomePage = () => {
  return (
    <div>
        HomePage
        <Link to={'/login'}>Login</Link>
    </div>
  )
}

export default HomePage