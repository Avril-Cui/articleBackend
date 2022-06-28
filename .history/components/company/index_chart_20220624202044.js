import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import simulated_price from "../../price_info/simulated_comp_price.json";
const WrknChart = () => {
  const [price, setPrice] = useState(null);
  useEffect(() => {
    setLoading(true)
    fetch('/api/getPrice')
      .then((res) => res.json())
      .then((price) => {
        setPrice(price)
      })
  }, [])
  console.log(price)



  var option;
  
  const data = price;
 const dateList = data.map(function (item) {
   return item[0];
 });
 const valueList = data.map(function (item) {
   return item[1];
 });
 option = {
   // Make gradient line here
   backgroundColor: {
     colorStops: [
       {
         offset: 0,
         color: '#2c2c2c'
       },
     ]
   },
   color: {
     
   },
 
   tooltip: {
     trigger: 'axis',
     textColor: "#C9FFD1"
   },
   xAxis: [
     {
       data: dateList
     },
   ],
   yAxis: {
     scale: true,
     splitArea: {
       show: true,
     },
   },
   grid: {
    left: "10%",
    right: "10%",
    bottom: "50%",
    backgroundColor: "rgba(8, 8, 8, 8)",
    show: true,
    borderWidth: 0,
   },
   series: [
     {
       type: 'line',
       showSymbol: false,
       data: valueList,
       lineStyle: {
         normal: {
           color: '#C9FFD1',
         },
     },
     },
     
   ]
 };


  return (
    <div>hi</div>
    // <ReactEcharts  style={{height: 600, marginTop: 100, marginLeft: -5, width: 600}} option={option} />
  );
};

export default WrknChart;
