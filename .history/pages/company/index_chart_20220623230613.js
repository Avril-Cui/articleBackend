import ReactEcharts from "echarts-for-react";
import simulated_price from "../../simulated_price.json";
const WrknChart = () => {
  var option;
  
  const data = 
  [[0, 55.65664484],
  [1, 50.38744089],
  [2, 50.68965915],
  [3, 50.83944872],
  [4, 51.0071311],
  [5, 51.05740218],
  [6, 51.09910802],
  [7, 51.12821238],
  [8, 51.09108097],
  [9, 51.33873637],
  [10, 51.53649786],
  [11, 51.79432377],
  [12, 52.0400081],
  [13, 51.87526059],
  [14, 51.90279513],
  [15, 51.91801862],
  [16, 52.37107647],
  [17, 52.41312456],
  [18, 52.21302732],
  [19, 52.00423367],
  [20, 51.91078655],
  [21, 51.68751942],
  [22, 51.76907509],
  [23, 51.96541331],
  [24, 51.95725412],
  [25, 51.7944683],
  [26, 51.56152473],
  [27, 51.61719963],
  [28, 51.32214338],
  [29, 51.42964009],
  [30, 51.58187131],
  [31, 51.29472404],
  [32, 50.94634961],
  [33, 51.02492729],
  [34, 51.02717833],
  [35, 50.62977316],
  [36, 50.4998516],
  [37, 50.76458642],
  [38, 51.06408588],
  [39, 51.03286664],
  [40, 50.78096094],
  [41, 50.59566304],
  [42, 50.3597649],
  [43, 50.31356169],
  [44, 50.24100912],
  [45, 50.02101775],
  [46, 50.20719973],
  [47, 50.19025099],
  [48, 50.00353128],
  [49, 49.95235141],
  [50, 49.94939846],
  [51, 49.99462705],
  [52, 50.04329965],
  [53, 50.15753595],
  [54, 50.05465767],
  [55, 50.06859449],
  [56, 50.22216832],
  [57, 50.5073443],
  [58, 50.11955234],
  [59, 50.02202612],
  [60, 49.6527215],
  [61, 50.16896408],
  [62, 50.13253067],
  [63, 50.40078963],
  [64, 50.26289314],
  [65, 49.96733362],
  [66, 49.99198505],
  [67, 50.10246388],
  [68, 50.10533776],
  [69, 50.31973771],
  [70, 50.42145479],
  [71, 50.708148],
  [72, 50.69060949],
  [73, 50.72760176],
  [74, 50.33545459],
  [75, 50.1371183],
  [76, 50.28205144],
  [77, 49.90407105],
  [78, 49.44373761],
  [79, 49.03807105],
  [80, 49.0759465],
  [81, 48.8010433],
  [82, 48.24266033],
  [83, 48.03542852],
  [84, 48.32325694],
  [85, 48.18088268],
  [86, 48.45656937],
  [87, 48.32573372],
  [88, 48.47170661],
  [89, 48.69837579],
  [90, 48.31827437],
  [91, 48.32421071],
  [92, 48.24386882],
  [93, 48.66154885],
  [94, 48.30115876],
  [95, 48.42750623],
  [96, 48.55671753],
  [97, 48.85115319],
  [98, 48.77638005],
  [99, 49.12994182],
  [100, 49.07945743],
  [101, 49.1658146],
  [102, 49.13226992],
  [103, 49.32617039],
  [104, 49.32319169],
  [105, 49.13395851],
  [106, 48.82227754],
  [107, 49.06891064]];
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
    backgroundColor: rgba(28, 28, 28, 1),
    show: true,
    bottom: "50%",
    backgroundColor: "transparent",
    show: true
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
