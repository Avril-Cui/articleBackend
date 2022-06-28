import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = () => {
};

export async function getServerSideProps() {
    // Fetch data from external API
    const res = fetch('/api/getPrice')
    const data = res.json()
    console.log(data)


  
    // Pass data to the page via props
    return { props: { data } }
}

export default WrknChart;
