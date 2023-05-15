import React from 'react'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  const name = '[le minh khang]'
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default Layout