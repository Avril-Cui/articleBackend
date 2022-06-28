import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
const WrknChart = (props) => {
  var data = props.DataSource

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
