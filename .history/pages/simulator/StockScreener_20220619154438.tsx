import styles from "./StockScreener.module.css"

const StockScreener = () => {
    return(
        <div className={styles.container}>
            <div className={styles.stock_screener}>
                <p className={styles.header}>Stock Screener — Explore Interesting Companies</p>
            </div>
        </div>
    );
};

export default StockScreener;