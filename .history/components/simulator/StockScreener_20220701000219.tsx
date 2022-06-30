import styles from "./StockScreener.module.css"
import IndexChart from "./index_chart";


const StockScreener = () => {
    const companies: any = {
        "wrkn": {
          id: "wrkn",
          name: "Wakron, Inc. (WRKN)",
        },
        "hhw": {
          id: "hhw",
          name: "Hahawa & Co. (HHW)",
        },
        "sgo": {
          id: "sgo",
          name: "Surgo Corporation (SGO)",
        },
        "fsin": {
          id: "fsin",
          name: "FlashIn, Inc. (FSIN)",
        },
        "jky": {
          id: "jky",
          name: "Jileky Investment, Inc. (JKY)",
        },
        "ast": {
          id: "ast",
          name: "Astral Company Limited (AST)",
        },
        "dsc": {
          id: "dsc",
          slug: "Doshacom Group (DSC)",
        },
    };

    return(
        <div className={styles.container}>
            <div className={styles.stock_screener}>
                <p className={styles.header}>Stock Screener — Explore Interesting Companies</p>
                <div className={styles.chart_container}>
                    <IndexChart />
                </div>
            </div>
        </div>
    );
};

export default StockScreener;