import styles from "./StockScreener.module.css"
import IndexChart from "./index_chart";


const StockScreener = () => {
    const companies: any = {
        "ast": {
            id: "ast",
            name: "Astral Company Limited (AST)",
        },
        "dsc": {
            id: "dsc",
            slug: "Doshacom Group (DSC)",
        },
        "fsin": {
            id: "fsin",
            name: "FlashIn, Inc. (FSIN)",
        },
        "hhw": {
          id: "hhw",
          name: "Hahawa & Co. (HHW)",
        },
        "jky": {
            id: "jky",
            name: "Jileky Investment, Inc. (JKY)",
        },
        "sgo": {
          id: "sgo",
          name: "Surgo Corporation (SGO)",
        },
        "wrkn": {
            id: "wrkn",
            name: "Wakron, Inc. (WRKN)",
        },
    };

    return(
        <div className={styles.container}>
            <div className={styles.stock_screener}>
                <p className={styles.header}>Stock Screener — Explore Interesting Companies</p>
                <div className={styles.chart_container}>
                    <IndexChart />
                </div>
                {companies.map((company: any) => (
                    <table>
                    <tr>
                      <th>Company Name</th>
                      <th>Price</th>
                      <th>Change</th>
                      <th>Percentage</th>
                    </tr>
                    <tr>
                      <td>{company.name}</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                      <td>Germany</td>
                    </tr>
                  </table>
                ))}

            </div>


        </div>
    );
};

export default StockScreener;