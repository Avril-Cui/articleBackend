import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = () => {
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('/api/getPrice')
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}

export default WrknChart;
