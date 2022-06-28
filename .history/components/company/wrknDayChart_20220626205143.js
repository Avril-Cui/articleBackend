import ReactEcharts from "echarts-for-react";
import { useState, useEffect } from "react";

import simulated_price from "../../price_info/simulated_comp_day_price.json";
const WrknDayChart = () => {
  // const [price, setPrice] = useState([[0,0]])
  // var option;
  
  // const WAIT_TIME = 1000 * 32400;

  // useEffect(() => {
  //   const data = setInterval(() => {
  //     fetch('/api/dayChart')
  //     .then((res) => res.json())
  //     .then((result_value) => {
  //       setPrice(result_value)
  //     })

  //   }, WAIT_TIME);
  //   return () => clearInterval(data);
  // }, [price]); 


  // var data = price
  // console.log(price)



  const upColor = "#C3FCC2";
  const upBorderColor = "#86BF8C";
  const downColor = "#EF534F";
  const downBorderColor = "#E5403B";
  const data0 = splitData([[0,  "07/01/2071 ", 50.0, 47.72, 47.63, 53.85],
  [1,  "07/02/2071 ", 47.72, 58.63, 47.72, 59.6],
  [2,  "07/03/2071 ", 58.62, 58.55, 57.63, 62.32],
  [3,  "07/04/2071 ", 58.54, 53.77, 53.71, 59.17],
  [4,  "07/05/2071 ", 53.77, 38.57, 38.03, 53.77],
  [5,  "07/06/2071 ", 38.6, 40.82, 38.19, 42.12],
  [6,  "07/07/2071 ", 40.81, 34.94, 31.8, 40.85],
  [7,  "07/08/2071 ", 34.94, 44.17, 34.19, 44.46],
  [8,  "07/09/2071 ", 44.17, 42.51, 39.45, 46.08],
  [9,  "07/10/2071 ", 42.5, 38.44, 37.72, 42.5],
  [10,  "07/11/2071 ", 38.43, 41.09, 36.32, 44.22],
  [11,  "07/12/2071 ", 41.1, 43.03, 34.52, 43.04],
  [12,  "07/13/2071 ", 43.03, 48.64, 40.82, 50.57],
  [13,  "07/14/2071 ", 48.65, 53.61, 48.6, 54.73],
  [14,  "07/15/2071 ", 53.62, 50.43, 47.03, 53.67],
  [15,  "07/16/2071 ", 50.44, 60.17, 50.4, 62.3],
  [16,  "07/17/2071 ", 60.16, 57.88, 55.07, 60.24],
  [17,  "07/18/2071 ", 57.87, 53.18, 52.85, 58.31],
  [18,  "07/19/2071 ", 53.15, 49.08, 48.07, 53.22],
  [19,  "07/20/2071 ", 49.08, 55.65, 49.07, 56.96],
  [20,  "07/21/2071 ", 55.66, 48.7, 47.98, 55.66],
  [21,  "07/22/2071 ", 48.71, 49.68, 48.31, 51.43],
  [22,  "07/23/2071 ", 49.68, 51.26, 48.75, 53.42],
  [23,  "07/24/2071 ", 51.26, 48.79, 48.37, 53.24],
  [24,  "07/25/2071 ", 48.79, 45.41, 45.24, 51.28],
  [25,  "07/26/2071 ", 45.41, 43.75, 41.43, 46.82],
  [26,  "07/27/2071 ", 43.77, 41.96, 41.02, 44.1],
  [27,  "07/28/2071 ", 41.97, 47.66, 41.84, 48.75],
  [28,  "07/29/2071 ", 47.69, 44.37, 44.36, 50.52],
  [29,  "07/30/2071 ", 44.37, 57.69, 34.06, 59.4],
  [30,  "07/31/2071 ", 57.67, 63.96, 57.65, 72.3],
  [31,  "08/01/2071 ", 63.95, 74.25, 63.88, 75.55],
  [32,  "08/02/2071 ", 74.24, 64.9, 64.7, 74.35],
  [33,  "08/03/2071 ", 64.89, 66.3, 61.2, 66.84],
  [34,  "08/04/2071 ", 66.3, 66.31, 64.3, 67.47],
  [35,  "08/05/2071 ", 66.31, 69.73, 66.27, 72.65],
  [36,  "08/06/2071 ", 69.76, 61.4, 60.79, 69.85],
  [37,  "08/07/2071 ", 61.4, 112.45, 59.56, 112.45],
  [38,  "08/08/2071 ", 112.45, 104.23, 104.23, 131.52],
  [39,  "08/09/2071 ", 104.24, 103.8, 89.77, 104.29],
  [40,  "08/10/2071 ", 103.81, 93.67, 93.57, 103.81],
  [41,  "08/11/2071 ", 93.7, 103.31, 87.83, 109.47],
  [42,  "08/12/2071 ", 103.29, 122.45, 101.0, 122.57],
  [43,  "08/13/2071 ", 122.46, 120.37, 120.1, 124.39],
  [44,  "08/14/2071 ", 120.35, 110.3, 108.84, 120.39],
  [45,  "08/15/2071 ", 110.3, 106.4, 103.58, 120.07],
  [46,  "08/16/2071 ", 106.4, 104.21, 103.32, 106.77],
  [47,  "08/17/2071 ", 104.2, 108.82, 104.04, 119.31],
  [48,  "08/18/2071 ", 108.81, 89.11, 85.56, 111.79],
  [49,  "08/19/2071 ", 89.11, 94.97, 85.81, 96.82],
  [50,  "08/20/2071 ", 94.95, 95.89, 93.83, 97.95],
  [51,  "08/21/2071 ", 95.9, 93.28, 92.1, 96.51],
  [52,  "08/22/2071 ", 93.29, 91.04, 89.53, 94.62],
  [53,  "08/23/2071 ", 91.04, 101.18, 91.04, 101.44],
  [54,  "08/24/2071 ", 101.15, 108.2, 96.81, 109.39],
  [55,  "08/25/2071 ", 108.19, 110.3, 106.08, 114.25],
  [56,  "08/26/2071 ", 110.3, 108.97, 106.06, 111.03],
  [57,  "08/27/2071 ", 108.98, 112.61, 108.15, 114.52],
  [58,  "08/28/2071 ", 112.61, 117.62, 110.56, 117.78],
  [59,  "08/29/2071 ", 117.63, 133.04, 115.03, 133.06],
  [60,  "08/30/2071 ", 133.03, 144.53, 132.59, 149.98],
  [61,  "08/31/2071 ", 144.52, 155.55, 142.99, 158.38],
  [62,  "09/01/2071 ", 155.53, 139.45, 138.84, 155.58],
  [63,  "09/02/2071 ", 139.42, 131.08, 130.71, 142.42],
  [64,  "09/03/2071 ", 131.07, 120.82, 120.74, 131.07],
  [65,  "09/04/2071 ", 120.77, 123.67, 116.44, 126.37],
  [66,  "09/05/2071 ", 123.67, 118.44, 117.28, 123.67],
  [67,  "09/06/2071 ", 118.43, 119.34, 113.85, 120.12],
  [68,  "09/07/2071 ", 119.34, 117.15, 114.47, 119.41],
  [69,  "09/08/2071 ", 117.15, 115.39, 111.3, 119.57],
  [70,  "09/09/2071 ", 115.38, 110.91, 105.91, 115.45],
  [71,  "09/10/2071 ", 110.92, 111.44, 109.78, 114.28],
  [72,  "09/11/2071 ", 111.41, 110.73, 106.29, 112.1],
  [73,  "09/12/2071 ", 110.73, 110.19, 101.63, 115.73],
  [74,  "09/13/2071 ", 110.2, 102.33, 102.33, 115.92],
  [75,  "09/14/2071 ", 102.34, 102.3, 99.02, 103.28],
  [76,  "09/15/2071 ", 102.28, 84.22, 83.59, 103.0],
  [77,  "09/16/2071 ", 84.2, 80.67, 80.59, 88.3],
  [78,  "09/17/2071 ", 80.66, 73.07, 72.66, 84.34],
  [79,  "09/18/2071 ", 73.08, 71.42, 68.6, 76.63],
  [80,  "09/19/2071 ", 71.44, 83.27, 71.17, 85.21],
  [81,  "09/20/2071 ", 83.29, 81.35, 80.84, 91.27],
  [82,  "09/21/2071 ", 81.35, 78.25, 78.18, 85.7],
  [83,  "09/22/2071 ", 78.25, 62.3, 62.24, 81.3],
  [84,  "09/23/2071 ", 62.31, 63.36, 58.55, 68.01],
  [85,  "09/24/2071 ", 63.36, 60.85, 60.85, 63.39]]);
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
  const option1 = {
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
  };
  return (
    <ReactEcharts  style={{height: 450, marginTop: -50, marginLeft: -5}} option={option1} />
  );
};

export default WrknDayChart;