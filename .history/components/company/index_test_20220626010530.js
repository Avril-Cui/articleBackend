import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = () => {
  let isDataPresent = false
  const [price, setPrice] = useState([[0,null]])
  var option;

  useEffect(() => {
    fetch('/api/getPrice')
    .then((res) => res.json())
    .then((result_value) => {
      setPrice(result_value)
    })
    
  }, [])

  var data = price

  if(price !== null){
    console.log(data)

    if(data.length !== 179){
      for (let i = data.length; i < 179; i++) {
        data[i] = [i, null]
      }
    }
    
    const dateList = data.map(function (item) {
      return item[0];
    });
    const valueList = data.map(function (item) {
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
      ]}
  };

  

  return (
    // <div>Hi</div>
    <div>
      {
      isDataPresent && <ReactEcharts  style={{height: 600, marginTop: 100, marginLeft: -5, width: 600}} option={option} />
      }
    </div>
  );
};

export default WrknChart;
