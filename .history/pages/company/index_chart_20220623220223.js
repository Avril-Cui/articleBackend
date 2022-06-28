import ReactEcharts from "echarts-for-react";
import simulated_price from "../../simulated_price.json";
const WrknChart = () => {
  var chartDom = document.getElementById('main');
  var option;
  
  // prettier-ignore
  const data = [['07/01/2071', 51.58],
   ['07/02/2071', 54.23],
   ['07/03/2071', 57.21],
   ['07/04/2071', 51.16],
   ['07/05/2071', 37.46],
   ['07/06/2071', 38.3],
   ['07/07/2071', 36.33],
   ['07/08/2071', 43.17],
   ['07/09/2071', 39.96],
   ['07/10/2071', 37.69],
   ['07/11/2071', 43.21],
   ['07/12/2071', 43.66],
   ['07/13/2071', 49.8],
   ['07/14/2071', 49.2],
   ['07/15/2071', 52.98],
   ['07/16/2071', 54.4],
   ['07/17/2071', 58.1],
   ['07/18/2071', 53.78],
   ['07/19/2071', 55.9],
   ['07/20/2071', 51.15],
   ['07/21/2071', 43.84],
   ['07/22/2071', 49.46],
   ['07/23/2071', 54.04],
   ['07/24/2071', 49.6],
   ['07/25/2071', 46.4],
   ['07/26/2071', 46.32],
   ['07/27/2071', 44.17],
   ['07/28/2071', 50.25],
   ['07/29/2071', 40.85],
   ['07/30/2071', 70.26],
   ['07/31/2071', 67.8],
   ['08/01/2071', 66.01],
   ['08/02/2071', 62.17],
   ['08/03/2071', 63.69],
   ['08/04/2071', 68.55],
   ['08/05/2071', 60.39],
   ['08/06/2071', 66.1],
   ['08/07/2071', 90.71],
   ['08/08/2071', 103.75],
   ['08/09/2071', 94.37],
   ['08/10/2071', 100.08],
   ['08/11/2071', 118.48],
   ['08/12/2071', 124.61],
   ['08/13/2071', 122.71],
   ['08/14/2071', 108.65],
   ['08/15/2071', 102.66],
   ['08/16/2071', 111.1],
   ['08/17/2071', 114.8],
   ['08/18/2071', 98.65],
   ['08/19/2071', 99.88],
   ['08/20/2071', 89.36],
   ['08/21/2071', 97.36],
   ['08/22/2071', 86.4],
   ['08/23/2071', 97.66],
   ['08/24/2071', 96.4],
   ['08/25/2071', 108.97],
   ['08/26/2071', 101.98],
   ['08/27/2071', 115.29],
   ['08/28/2071', 123.79],
   ['08/29/2071', 126.95],
   ['08/30/2071', 138.74],
   ['08/31/2071', 154.3],
   ['09/01/2071', 144.0],
   ['09/02/2071', 147.22],
   ['09/03/2071', 126.38],
   ['09/04/2071', 127.41],
   ['09/05/2071', 128.31],
   ['09/06/2071', 122.67],
   ['09/07/2071', 121.41],
   ['09/08/2071', 110.6],
   ['09/09/2071', 114.85],
   ['09/10/2071', 110.85],
   ['09/11/2071', 111.13],
   ['09/12/2071', 117.5],
   ['09/13/2071', 100.49],
   ['09/14/2071', 106.14],
   ['09/15/2071', 88.08],
   ['09/16/2071', 94.96],
   ['09/17/2071', 85.57],
   ['09/18/2071', 74.52],
   ['09/19/2071', 88.15],
   ['09/20/2071', 90.4],
   ['09/21/2071', 74.5],
   ['09/22/2071', 63.44],
   ['09/23/2071', 68.56]];
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
        }
      ]
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [
      {
        data: dateList
      }
    ],
    yAxis: [{}],
    grid: [
      {
        bottom: '50%',
      }
    ],
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList,
        lineStyle: {
          normal: {
            color: '#C9FFD1'
          }
        }
      }
    ]
  };

  return (
    <ReactEcharts  style={{height: 600, marginTop: 100, marginLeft: -5, width: 600}} option={option} />
  );
};

export default WrknChart;
