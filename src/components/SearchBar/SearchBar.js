import React from "react"
import styles from "./SearchBar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBar = (props) => {
  const inputChangeHandler = (e) => {
    const userInput = e.target.value.trim()
    props.onfilter(userInput)
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="请输入关键字"
        onChange={inputChangeHandler}
      />
    </div>
  )
}

export default SearchBar
