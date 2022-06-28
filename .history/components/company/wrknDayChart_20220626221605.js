import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";

import simulated_price from "/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_comp_day_price.json";
const WrknDayChart = () => {
  let isDataPresent = false
  const [price, setPrice] = useState([[0,0]])
  var option;
  
  const WAIT_TIME = 300000;

  useEffect(() => {
    const data = setInterval(() => {
      fetch('/api/dayChart')
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [price]); 


  var data = price

  const upColor = "#C3FCC2";
    const upBorderColor = "#86BF8C";
    const downColor = "#EF534F";
    const downBorderColor = "#E5403B";
    const data0 = splitData(simulated_price);
    console.log(simulated_price)
    function splitData(rawData) {
      const categoryData = [];
      const values = [];
      for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
      }
      return {
        categoryData: categoryData,
        values: values,
      };
    }
  
    function round(num) {
      var m = Number((Math.abs(num) * 100).toPrecision(15));
      return Math.round(m) / 100 * Math.sign(num);
  }
  
    function calculateMA(dayCount) {
      var result = [];
      for (var i = 0, len = data0.values.length; i < len; i++) {
        if (i < dayCount) {
          result.push("-");
          continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
          sum += +data0.values[i - j][1];
        }
        result.push(round(sum / dayCount));
      }
      return result;
    }

  if(price !== null){
    console.log(data)
    
    isDataPresent = true
    option = {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      grid: {
        show: true,
        backgroundColor: "#161616",
        left: "10%",
        right: "10%",
        bottom: "15%",
      },
      xAxis: {
        type: "category",
        data: data0.categoryData,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        min: "dataMin",
        max: "dataMax",
      },
      yAxis: {
        scale: true,
        splitArea: {
          show: true,
        },
      },
      dataZoom: [
        {
          type: "inside",
          start: 50,
          end: 100,
        },
        {
          show: false,
          type: "slider",
          top: "90%",
          start: 50,
          end: 100,
        },
      ],
      series: [
        {
          name: "日K",
          type: "candlestick",
          data: data0.values,
          itemStyle: {
            color: upColor,
            color0: downColor,
            borderColor: upBorderColor,
            borderColor0: downBorderColor,
          },
          markPoint: {
            label: {
              formatter: function (param) {
                return param != null ? Math.round(param.value) + "" : "";
              },
            },
            tooltip: {
              formatter: function (param) {
                return param.name + "<br>" + (param.data.coord || "");
              },
            },
          },
          markLine: {
            symbol: ["none", "none"],
            data: [
              [
                {
                  name: "from lowest to highest",
                  type: "min",
                  valueDim: "lowest",
                  symbol: "circle",
                  symbolSize: 5,
                  label: {
                    show: false,
                  },
                  emphasis: {
                    label: {
                      show: false,
                    },
                  },
                },
                {
                  type: "max",
                  valueDim: "highest",
                  symbol: "circle",
                  symbolSize: 5,
                  label: {
                    show: false,
                  },
                  emphasis: {
                    label: {
                      show: false,
                    },
                  },
                },
              ],
            ],
          },
        },
        {
          name: "MA5",
          type: "line",
          data: calculateMA(5),
          smooth: true,
          showSymbol: false,
          lineStyle: {
            opacity: 0.8,
          },
        },
        {
          name: "MA10",
          type: "line",
          data: calculateMA(10),
          smooth: true,
          showSymbol: false,
          lineStyle: {
            opacity: 0.8,
            symbolSize: 0.01,
          },
        },
        {
          name: "MA20",
          type: "line",
          data: calculateMA(20),
          smooth: true,
          showSymbol: false,
          lineStyle: {
            opacity: 0.8,
          },
        },
        {
          name: "MA30",
          type: "line",
          data: calculateMA(30),
          smooth: true,
          showSymbol: false,
          lineStyle: {
            opacity: 0.8,
          },
        },
      ],
    }
  }

  

  return (
    // <div>Hi</div>
    <div>
      {
      isDataPresent && <ReactEcharts  style={{height: 350, width: 650}} option={option} />
      }
    </div>
  );
};

export default WrknDayChart;