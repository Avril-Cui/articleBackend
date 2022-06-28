import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = () => {
};

export function getServerSideProps() {


    fetch('/api/getPrice')
    .then((res) => res.json())
    .then((result_value) => {
      setPrice(result_value)
    })
  
    // Pass data to the page via props
    return { props: { data } }
}

export default WrknChart;
