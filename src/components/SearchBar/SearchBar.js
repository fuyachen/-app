import React, { useState, useEffect } from "react"
import styles from "./SearchBar.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("")

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim())
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("effect 执行了")
      props.onfilter(keyword)
    }, 500)

    return () => {
      clearTimeout(timer)
    }
  }, [keyword])

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="请输入关键字"
        onChange={inputChangeHandler}
        value={keyword}
      />
    </div>
  )
}

export default SearchBar
