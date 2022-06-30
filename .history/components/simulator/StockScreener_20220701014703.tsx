import styles from "./StockScreener.module.css"
import IndexChart from "./index_chart";
import ScreenerTable from "./screener_table";

const StockScreener = () => {

    return(
        <div className={styles.container}>
            <div className={styles.stock_screener}>
                <p className={styles.header}>Stock Screener — Explore Interesting Companies</p>
                <div className={styles.chart_container}>
                    <IndexChart />
                </div>
                <div className={styles.screener_table}>
                    <ScreenerTable />
                </div>
            </div>


        </div>
    );
};

export default StockScreener;