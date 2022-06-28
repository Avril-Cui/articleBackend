import ReactEcharts from "echarts-for-react";
import simulated_price from "../../simulated_price.json";
const WrknChart = () => {
  var chartDom = document.getElementById('main');
  var option;
  
  const data = [[0, 55.65664484],
  [1, 50.45154455],
  [2, 50.39840025],
  [3, 50.62343036],
  [4, 50.88437452],
  ]]
const dateList = data.map(function (item) {
  return item[0];
});
const valueList = data.map(function (item) {
  return item[1];
});
option = {

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
    <ReactEcharts  style={{height: 600, marginTop: 100, marginLeft: -5, width: 600}} option={option} />
  );
};

export default WrknChart;
