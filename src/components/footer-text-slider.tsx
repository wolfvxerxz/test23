import styles from "./footer-text-slider.module.css"

export function FooterTextSlider() {
  const text = " wolfmail.services "
  const repeatedText = `${text} ${text} ${text} ${text}`

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slider}>
        <span className={styles.slide}>{repeatedText}</span>
        <span className={styles.slide}>{repeatedText}</span>
      </div>
    </div>
  )
}

