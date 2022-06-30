import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css"
// import simulated_price from props.FileSource
// import simulated_price from "/Users/xiaokeai/Desktop/aspect_website/price_info/simulated_comp_day_price.json";
const WrknDayChart = (props) => {
  const WAIT_TIME = 32400 * 1000;
  const [price, setPrice] = useState([[0, "01/01/2000", null, null, null, null]]);

  console.log(price)
  useEffect(() => {
    const data = setInterval(() => {
      fetch(`/api/${props.CompanyName}/dayChart`)
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [price]); 
  

  let isDataPresent = false
  var data = price

  if (data === null || undefined){
    data = [[0, "07/01/2071", 50.0, 47.72, 47.63, 53.85],[1, "07/02/2071", 47.72, 58.63, 47.72, 59.6]]
  }

  if(data !== null){
    var option;
  
    const upColor = "#C3FCC2";
    const upBorderColor = "#86BF8C";
    const downColor = "#EF534F";
    const downBorderColor = "#E5403B";

    isDataPresent = true
    // console.log(data)
    const data0 = splitData(data);
    console.log(data)

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
      left: "0%",
      right: "0%",
      bottom: "0%",
      top: "0%",
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
        name: "Daily Price",
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
  }

  

  return (
    // <div>Hi</div>
    <div>
      {
      isDataPresent && <ReactEcharts  className={styles.time_line_chart} style={{height: 450}}option={option} />
      }
    </div>
  );
};

export default WrknDayChart;