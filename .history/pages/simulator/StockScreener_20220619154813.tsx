import styles from "./StockScreener.module.css"
import IndexChart from "./index_chart";


const StockScreener = () => {
    return(
        <div className={styles.container}>
            <div className={styles.stock_screener}>
                <p className={styles.header}>Stock Screener — Explore Interesting Companies</p>
                <IndexChart />
            </div>
        </div>
    );
};

export default StockScreener;