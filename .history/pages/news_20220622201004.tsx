import React from 'react'
import styles from "../styles/news/news.module.css"

const News = () => {
  return (
    <div className={styles.news_page}>
      <p className={styles.title}>Market News</p>
      <p className={styles.description}>Keep updated through learning the most recent and important market-related news.</p>
    </div>
  )
}

export default News;