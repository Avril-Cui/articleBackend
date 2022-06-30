import { useState, useEffect } from "react";

const ScreenerTable = () => {

    const [stock_wrkn_price, setWrknPrice] = useState("0.00");
    const [stock_wrkn_change, setWrknChange] = useState("0.00");
    const [price_wrkn_change, setWrknPriceChange] = useState("0.00");
    const [stock_sgo_price, setSgoPrice] = useState("0.00");
    const [stock_sgo_change, setSgoChange] = useState("0.00");
    const [price_sgo_change, setSgoPriceChange] = useState("0.00");
    const [stock_fsin_price, setFsinPrice] = useState("0.00");
    const [stock_fsin_change, setFsinChange] = useState("0.00");
    const [price_fsin_change, setFsinPriceChange] = useState("0.00");
    const [stock_dsc_price, setDscPrice] = useState("0.00");
    const [stock_dsc_change, setDscChange] = useState("0.00");
    const [price_dsc_change, setDscPriceChange] = useState("0.00");
    const [stock_jky_price, setJkyPrice] = useState("0.00");
    const [stock_jky_change, setJkyChange] = useState("0.00");
    const [price_jky_change, setJkyPriceChange] = useState("0.00");
    const [stock_ast_price, setAstPrice] = useState("0.00");
    const [stock_ast_change, setAstChange] = useState("0.00");
    const [price_ast_change, setAstPriceChange] = useState("0.00");
    const [stock_hhw_price, setHhwPrice] = useState("0.00");
    const [stock_hhw_change, setHhwChange] = useState("0.00");
    const [price_hhw_change, setHhwPriceChange] = useState("0.00");
    const WAIT_TIME = 1000 * 60;
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
        const data = setInterval(() => {
        fetch(`/api/wrkn/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setWrknPrice(result_value);
            companies[6].price = result_value
        });
        fetch(`/api/sgo/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setSgoPrice(result_value);
            companies[5].price = result_value
            });
        fetch(`/api/fsin/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setFsinPrice(result_value);
            companies[2].price = result_value
            });
        fetch(`/api/jky/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setJkyPrice(result_value);
            companies[4].price = result_value
            });
        fetch(`/api/hhw/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setHhwPrice(result_value);
            companies[3].price = result_value
            });
        fetch(`/api/dsc/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setDscPrice(result_value);
            companies[1].price = result_value
            });
        fetch(`/api/ast/getPrice`)
            .then((res) => res.json())
            .then((result_value) => {
            setAstPrice(result_value);
            companies[0].price = result_value
            });
        }, WAIT_TIME);
        return () => clearInterval(data);
    }, [stock_wrkn_price, stock_sgo_price, stock_fsin_price, stock_hhw_price, stock_dsc_price, stock_ast_price, stock_jky_price]);
    useEffect(() => {
        const data = setInterval(() => {
        fetch(`/api/wrkn/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setWrknChange(result_value);
            });
        companies[6].percentage_change = stock_wrkn_change
            fetch(`/api/sgo/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setSgoChange(result_value);
            });
        companies[5].percentage_change = stock_sgo_change
        fetch(`/api/fsin/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setFsinChange(result_value);
            });
        companies[2].percentage_change = stock_fsin_change
        fetch(`/api/jky/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setJkyChange(result_value);
            });
        companies[4].percentage_change = stock_jky_change
        fetch(`/api/hhw/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setHhwChange(result_value);
            });
        companies[3].percentage_change = stock_hhw_change
        fetch(`/api/dsc/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setDscChange(result_value);
            });
        companies[1].percentage_change = stock_dsc_change
        fetch(`/api/ast/getChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setAstChange(result_value);
            });
        companies[0].percentage_change = stock_ast_change

        }, WAIT_TIME);
        return () => clearInterval(data);
    }, [stock_wrkn_change, stock_sgo_change, stock_fsin_change, stock_hhw_change, stock_dsc_change, stock_ast_change, stock_jky_change]);
    useEffect(() => {
        const data = setInterval(() => {
        fetch(`/api/wrkn/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setWrknPriceChange(result_value);
            });
        companies[6].price_change = price_wrkn_change
        fetch(`/api/sgo/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setSgoPriceChange(result_value);
            });
        companies[5].price_change = price_sgo_change
        fetch(`/api/fsin/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setFsinPriceChange(result_value);
            });
        companies[2].price_change = price_fsin_change
        fetch(`/api/jky/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setJkyPriceChange(result_value);
            });
        companies[4].price_change = price_jky_change
        fetch(`/api/hhw/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setHhwPriceChange(result_value);
            });
        companies[3].price_change = price_hhw_change
        fetch(`/api/dsc/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setDscPriceChange(result_value);
            });
        companies[1].price_change = price_dsc_change
        fetch(`/api/ast/priceChange`)
            .then((res) => res.json())
            .then((result_value) => {
            setAstPriceChange(result_value);
            });
        companies[0].price_change = price_ast_change
        }, WAIT_TIME);
        return () => clearInterval(data);
    }, [price_wrkn_change, price_sgo_change, price_fsin_change, price_hhw_change, price_dsc_change, price_ast_change, price_jky_change]);

    console.log(companies)
  return (
    <div>
      <table>
        <tr>
          <th>Company Name</th>
          <th>Price</th>
          <th>Change</th>
          <th>Percentage</th>
        </tr>
        {companies.map((company: any) => (
          <tr key={company.id}>
            <td>{company.name}</td>
            <td>{company.price}</td>
            <td>{company.price_change}</td>
            <td>{company.percentage_change}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ScreenerTable;
