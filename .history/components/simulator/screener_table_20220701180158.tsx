import { useState, useEffect } from "react";
import styles from "./screener_table.module.css"
import Link from "next/link";

const ScreenerTable = () => {

    const [stock_wrkn_price, setWrknPrice] = useState("N/A");
    const [stock_wrkn_change, setWrknChange] = useState("N/A");
    const [price_wrkn_change, setWrknPriceChange] = useState("N/A");
    const [stock_sgo_price, setSgoPrice] = useState("N/A");
    const [stock_sgo_change, setSgoChange] = useState("N/A");
    const [price_sgo_change, setSgoPriceChange] = useState("N/A");
    const [stock_fsin_price, setFsinPrice] = useState("N/A");
    const [stock_fsin_change, setFsinChange] = useState("N/A");
    const [price_fsin_change, setFsinPriceChange] = useState("N/A");
    const [stock_dsc_price, setDscPrice] = useState("N/A");
    const [stock_dsc_change, setDscChange] = useState("N/A");
    const [price_dsc_change, setDscPriceChange] = useState("N/A");
    const [stock_jky_price, setJkyPrice] = useState("N/A");
    const [stock_jky_change, setJkyChange] = useState("N/A");
    const [price_jky_change, setJkyPriceChange] = useState("N/A");
    const [stock_ast_price, setAstPrice] = useState("N/A");
    const [stock_ast_change, setAstChange] = useState("N/A");
    const [price_ast_change, setAstPriceChange] = useState("N/A");
    const [stock_hhw_price, setHhwPrice] = useState("N/A");
    const [stock_hhw_change, setHhwChange] = useState("N/A");
    const [price_hhw_change, setHhwPriceChange] = useState("N/A");
    const WAIT_TIME = 1000 * 3;
    let companies: any = [
        {
          id: "ast",
          name: "Astral Company Limited (AST)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "dsc",
          name: "Doshacom Group (DSC)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "fsin",
          name: "FlashIn, Inc. (FSIN)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "hhw",
          name: "Hahawa & Co. (HHW)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "jky",
          name: "Jileky Investment, Inc. (JKY)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "sgo",
          name: "Surgo Corporation (SGO)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
        {
          id: "wrkn",
          name: "Wakron, Inc. (WRKN)",
          price: 0,
          price_change: 0,
          percentage_change: 0,
        },
      ];
    useEffect(() => {
        const data1 = setInterval(() => {
            fetch("/api/wrkn/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setWrknPrice(result_value);
            });
            fetch("/api/sgo/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setSgoPrice(result_value);
                });
            fetch("/api/fsin/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setFsinPrice(result_value);
                });
            fetch("/api/jky/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setJkyPrice(result_value);
                });
            fetch("/api/hhw/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setHhwPrice(result_value);
                });
            fetch("/api/dsc/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setDscPrice(result_value);
                });
            fetch("/api/ast/getPrice")
                .then((res) => res.json())
                .then((result_value) => {
                setAstPrice(result_value);
                });

                fetch(`/api/wrkn/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setWrknChange(result_value);
                });
                fetch(`/api/sgo/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setSgoChange(result_value);
                });
            fetch(`/api/fsin/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setFsinChange(result_value);
                });
            fetch(`/api/jky/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setJkyChange(result_value);
                });
            fetch(`/api/hhw/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setHhwChange(result_value);
                });
            fetch(`/api/dsc/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setDscChange(result_value);
                });
            fetch(`/api/ast/getChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setAstChange(result_value);
                });
    
            fetch(`/api/wrkn/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setWrknPriceChange(result_value);
            });
            fetch(`/api/sgo/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setSgoPriceChange(result_value);
                });
            fetch(`/api/fsin/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setFsinPriceChange(result_value);
                });
            fetch(`/api/jky/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setJkyPriceChange(result_value);
                });
            fetch(`/api/hhw/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setHhwPriceChange(result_value);
                });
            fetch(`/api/dsc/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setDscPriceChange(result_value);
                });
            fetch(`/api/ast/priceChange`)
                .then((res) => res.json())
                .then((result_value) => {
                setAstPriceChange(result_value);
                });
        }, WAIT_TIME);
        return () => clearInterval(data1);
    }, [stock_wrkn_price]);
    companies[0].price_change = price_ast_change
    companies[1].price_change = price_dsc_change
    companies[2].price_change = price_fsin_change
    companies[3].price_change = price_hhw_change
    companies[4].price_change = price_jky_change
    companies[5].price_change = price_sgo_change
    companies[6].price_change = price_wrkn_change

    companies[0].percentage_change = stock_ast_change
    companies[1].percentage_change = stock_dsc_change
    companies[2].percentage_change = stock_fsin_change
    companies[3].percentage_change = stock_hhw_change
    companies[4].percentage_change = stock_jky_change
    companies[5].percentage_change = stock_sgo_change
    companies[6].percentage_change = stock_wrkn_change

    companies[0].price = stock_ast_price
    companies[1].price = stock_dsc_price
    companies[2].price = stock_fsin_price
    companies[3].price = stock_hhw_price
    companies[4].price = stock_jky_price
    companies[5].price = stock_sgo_price
    companies[6].price = stock_wrkn_price

  return (
    <div>
      <table className={styles.screener_table}>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Percentage</th>
        </tr>
        {companies.map((company: any) => (
          <tr key={company.id}>
            <Link key={company.id} href={`/company/${company.id}`}>
              <td className={styles.comp_link}>{company.name}</td>
            </Link>
            <td>{company.price}</td>
            <td style={(company.price_change < 0) ? {color: "#FD6565"} : {color: "#C9FFD1"}}>{company.price_change}</td>
            <td style={(company.percentage_change > 0) ? {color: "#C9FFD1"} : {color: "#FD6565"}}>{company.percentage_change}%</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ScreenerTable;
