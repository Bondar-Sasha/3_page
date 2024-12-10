import React from 'react'
import styles from "./styles.module.css"
import searchLogo from "../../../data/header/search.png"

const MainInput = (props) => {
    const preperedClasses = [styles.input, props.className ?? ""].join(" ")
  return (
    <div className={styles.wrapper} >
        <input className={preperedClasses}/>
        <img className={styles.searchLogo} src={searchLogo} alt='search_logo'/>
    </div>
  )
}

export default MainInput