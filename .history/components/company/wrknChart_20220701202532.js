import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = (props) => {
  let isDataPresent = false
  var option;

  const WAIT_TIME = 3000;
  const [price, setPrice] = useState([[0, 0]]);

  useEffect(() => {
    const data = setInterval(() => {
      fetch(`/api/${props.CompanyName}/getChart`)
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [price]); 

  if(price !== null){
    isDataPresent = true

    if(price.length !== 179){
      for (let i = price.length; i < 179; i++) {
        price[i] = [i, null]
        if (price.length==1){
          price[0] = [0, 0]
        }
      }
    }
    
    const dateList = price.map(function (item) {
      return item[0];
    });
    const valueList = price.map(function (item) {
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
