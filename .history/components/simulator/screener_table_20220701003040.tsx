import { useState, useEffect } from "react";

const ScreenerTable = () => {

  function getPrice(comp_name: any) {
    const [stock_price, setPrice] = useState("0.00");
    const WAIT_TIME = 3000;
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${comp_name}/getPrice`)
          .then((res) => res.json())
          .then((result_value) => {
            setPrice(result_value);
          });
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [stock_price]);
  }

  function getPercentageChange(comp_name: any) {
    const [stock_change, setChange] = useState("0.00");
    const WAIT_TIME = 3000;
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${comp_name}/getChange`)
          .then((res) => res.json())
          .then((result_value) => {
            setChange(result_value);
          });
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [stock_change]);
  }

  function getPriceChange(comp_name: any) {
    const [price_change, setPriceChange] = useState("0.00");
    const WAIT_TIME = 3000;
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${comp_name}/priceChange`)
          .then((res) => res.json())
          .then((result_value) => {
            setPriceChange(result_value);
          });
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [price_change]);
  }

  const companies: any = [
    {
      id: "ast",
      name: "Astral Company Limited (AST)",
      price: setInterval(getPrice("ast"), 3000),
      percentage_change: getPercentageChange("ast"),
      price_change: getPriceChange("ast"),
    },
    {
      id: "dsc",
      name: "Doshacom Group (DSC)",
      price: getPrice("dsc"),
      percentage_change: getPercentageChange("dsc"),
      price_change: getPriceChange("dsc"),
    },
    {
      id: "fsin",
      name: "FlashIn, Inc. (FSIN)",
      price: getPrice("fsin"),
      percentage_change: getPercentageChange("fsin"),
      price_change: getPriceChange("fsin"),
    },
    {
      id: "hhw",
      name: "Hahawa & Co. (HHW)",
      price: getPrice("hhw"),
      percentage_change: getPercentageChange("hhw"),
      price_change: getPriceChange("hhw"),
    },
    {
      id: "jky",
      name: "Jileky Investment, Inc. (JKY)",
      price: getPrice("jky"),
      percentage_change: getPercentageChange("jky"),
      price_change: getPriceChange("jky"),
    },
    {
      id: "sgo",
      name: "Surgo Corporation (SGO)",
      price: getPrice("sgo"),
      percentage_change: getPercentageChange("sgo"),
      price_change: getPriceChange("sgo"),
    },
    {
      id: "wrkn",
      name: "Wakron, Inc. (WRKN)",
      price: getPrice("wrkn"),
      percentage_change: getPercentageChange("wrkn"),
      price_change: getPriceChange("wrkn"),
    },
  ];
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
