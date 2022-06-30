import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = (props) => {
  let isDataPresent = false
  var data = props.DataSource
  var option;

  const WAIT_TIME = 3000*180;
  const [stock_price, setPrice] = useState([0, 0.00]);

  useEffect(() => {
    const data = setInterval(() => {
      fetch(`/api/${props.CompanyName}/getChart`)
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [stock_price]); 

  if (stock_price === null){
    setPrice([0, 0.00])
  }

  if(stock_price !== null){
    isDataPresent = true
    // console.log(data)

    if(stock_price.length !== 179){
      for (let i = stock_price.length; i < 179; i++) {
        stock_price[i] = [i, null]
      }
    }
    
    const dateList = stock_price.map(function (item) {
      return item[0];
    });
    const valueList = stock_price.map(function (item) {
      return item[1];
    });
    isDataPresent = true
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
      left: "0%",
      right: "0%",
      top: "0%",
      bottom: "10%",
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
      ]}
  };

  

  return (
    // <div>Hi</div>
    <div>
      {
      isDataPresent && <ReactEcharts  style={{height: 350, width: 650}} option={option} />
      }
    </div>
  );
};

export default WrknChart;
