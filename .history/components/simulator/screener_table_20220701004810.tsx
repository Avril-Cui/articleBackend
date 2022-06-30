import { useState, useEffect } from "react";

const ScreenerTable = () => {
  const company_names = ["ast", "dsc", "fsin", "hhw", "jky", "sgo", "wrkn"];

  for (var item in company_names) {
    const [stock_price, setPrice] = useState("0.00");
    const [stock_change, setChange] = useState("0.00");
    const [price_change, setPriceChange] = useState("0.00");
    const WAIT_TIME = 3000;
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${item}/getPrice`)
          .then((res) => res.json())
          .then((result_value) => {
            setPrice(result_value);
          });
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [stock_price]);
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${item}/getChange`)
          .then((res) => res.json())
          .then((result_value) => {
            setChange(result_value);
          });
      }, WAIT_TIME);
      return () => clearInterval(data);
    }, [stock_change]);
    useEffect(() => {
      const data = setInterval(() => {
        fetch(`/api/${item}/priceChange`)
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
      //   price: setInterval( function() { getPrice("ast"); }, 3000 ),
    },
    {
      id: "dsc",
      name: "Doshacom Group (DSC)",
    },
    {
      id: "fsin",
      name: "FlashIn, Inc. (FSIN)",
    },
    {
      id: "hhw",
      name: "Hahawa & Co. (HHW)",
    },
    {
      id: "jky",
      name: "Jileky Investment, Inc. (JKY)",
    },
    {
      id: "sgo",
      name: "Surgo Corporation (SGO)",
    },
    {
      id: "wrkn",
      name: "Wakron, Inc. (WRKN)",
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
