import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = () => {
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = fetch('/api/getPrice')
    const data = await res.json()
    console.log(data)

    fetch('/api/getPrice')
    .then((res) => res.json())
    .then((result_value) => {
      setPrice(result_value)
    })
  
    // Pass data to the page via props
    return { props: { data } }
}

export default WrknChart;
