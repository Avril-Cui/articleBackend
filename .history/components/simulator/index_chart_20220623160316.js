import ReactEcharts from "echarts-for-react";
const IndexChart = () => {
  const upColor = "#C3FCC2";
  const upBorderColor = "#86BF8C";
  const downColor = "#EF534F";
  const downBorderColor = "#E5403B";
  const data0 = splitData([['07/01/2071', 1078.0, 1089.65, 1071.66, 1104.0],
  ['07/02/2071', 1086.87, 1053.94, 1049.4, 1088.13],
  ['07/03/2071', 1069.4, 1061.2, 1061.2, 1100.36],
  ['07/04/2071', 1060.75, 953.15, 953.15, 1060.75],
  ['07/05/2071', 944.58, 798.11, 798.11, 1011.58],
  ['07/06/2071', 766.84, 830.28, 760.58, 856.69],
  ['07/07/2071', 828.17, 941.54, 799.42, 941.83],
  ['07/08/2071', 953.14, 953.4, 910.54, 956.65],
  ['07/09/2071', 958.08, 952.24, 922.04, 969.37],
  ['07/10/2071', 951.56, 1017.16, 934.11, 1017.45],
  ['07/11/2071', 1014.93, 1041.08, 1014.93, 1088.85],
  ['07/12/2071', 1028.16, 1029.78, 991.08, 1030.07],
  ['07/13/2071', 1026.13, 1037.12, 994.49, 1057.81],
  ['07/14/2071', 1040.9, 1055.52, 1037.66, 1057.45],
  ['07/15/2071', 1071.01, 1102.55, 1052.99, 1102.55],
  ['07/16/2071', 1099.88, 1122.79, 1097.46, 1123.45],
  ['07/17/2071', 1139.13, 1123.89, 1116.46, 1165.2],
  ['07/18/2071', 1115.81, 1086.73, 1086.48, 1127.59],
  ['07/19/2071', 1078.89, 1132.28, 1053.31, 1137.68],
  ['07/20/2071', 1111.99, 1131.21, 1103.06, 1168.79],
  ['07/21/2071', 1130.34, 1109.01, 1081.15, 1140.21],
  ['07/22/2071', 1133.28, 1163.85, 1133.28, 1170.59],
  ['07/23/2071', 1167.8, 1223.22, 1167.8, 1223.28],
  ['07/24/2071', 1202.65, 1201.85, 1194.8, 1209.71],
  ['07/25/2071', 1205.57, 1232.54, 1089.68, 1246.52],
  ['07/26/2071', 1232.75, 1172.03, 1123.26, 1270.64],
  ['07/27/2071', 1172.06, 1231.09, 1128.35, 1271.74],
  ['07/28/2071', 1231.05, 1291.49, 1212.55, 1292.72],
  ['07/29/2071', 1291.41, 1196.88, 1195.8, 1305.58],
  ['07/30/2071', 1197.02, 1150.65, 1111.23, 1197.02],
  ['07/31/2071', 1150.57, 1068.73, 1068.73, 1191.74],
  ['08/01/2071', 1068.57, 1025.89, 1022.12, 1097.0],
  ['08/02/2071', 1025.81, 1029.15, 918.78, 1059.56],
  ['08/03/2071', 1028.77, 1144.92, 1028.77, 1144.94],
  ['08/04/2071', 1144.89, 1188.49, 1129.64, 1188.56],
  ['08/05/2071', 1188.45, 1185.81, 1165.25, 1191.67],
  ['08/06/2071', 1186.01, 1249.95, 1180.42, 1272.9],
  ['08/07/2071', 1249.77, 1284.94, 1223.8, 1291.49],
  ['08/08/2071', 1285.06, 1301.91, 1280.01, 1309.67],
  ['08/09/2071', 1302.04, 1250.9, 1227.92, 1305.99],
  ['08/10/2071', 1250.82, 1271.32, 1243.11, 1271.43],
  ['08/11/2071', 1271.43, 1335.61, 1268.12, 1337.32],
  ['08/12/2071', 1335.73, 1398.36, 1335.73, 1398.92],
  ['08/13/2071', 1398.47, 1431.15, 1384.77, 1438.16],
  ['08/14/2071', 1431.39, 1439.24, 1399.19, 1439.24],
  ['08/15/2071', 1439.59, 1450.98, 1439.59, 1474.85],
  ['08/16/2071', 1451.21, 1439.68, 1414.09, 1466.26],
  ['08/17/2071', 1439.55, 1518.53, 1428.92, 1519.51],
  ['08/18/2071', 1518.4, 1470.48, 1435.73, 1518.4],
  ['08/19/2071', 1470.38, 1515.76, 1463.71, 1577.28],
  ['08/20/2071', 1515.79, 1506.68, 1499.22, 1530.29],
  ['08/21/2071', 1506.92, 1535.32, 1506.92, 1540.3],
  ['08/22/2071', 1535.51, 1530.61, 1505.02, 1555.0],
  ['08/23/2071', 1530.6, 1577.29, 1530.6, 1597.17],
  ['08/24/2071', 1577.15, 1520.01, 1480.96, 1577.15],
  ['08/25/2071', 1520.3, 1479.51, 1478.57, 1530.34],
  ['08/26/2071', 1479.75, 1530.86, 1473.28, 1535.04],
  ['08/27/2071', 1530.82, 1597.72, 1530.82, 1598.77],
  ['08/28/2071', 1597.56, 1641.08, 1596.9, 1641.46],
  ['08/29/2071', 1641.11, 1639.68, 1621.93, 1641.11],
  ['08/30/2071', 1639.99, 1651.41, 1619.88, 1670.44],
  ['08/31/2071', 1651.53, 1568.98, 1532.91, 1663.17],
  ['09/01/2071', 1569.0, 1521.88, 1517.14, 1619.93],
  ['09/02/2071', 1521.73, 1484.72, 1481.79, 1537.54],
  ['09/03/2071', 1484.48, 1512.6, 1465.53, 1525.98],
  ['09/04/2071', 1512.6, 1448.58, 1413.9, 1518.91],
  ['09/05/2071', 1448.58, 1411.52, 1411.52, 1450.52],
  ['09/06/2071', 1411.46, 1365.54, 1365.54, 1411.46],
  ['09/07/2071', 1365.59, 1344.68, 1325.85, 1365.68],
  ['09/08/2071', 1344.53, 1307.35, 1297.05, 1353.59],
  ['09/09/2071', 1307.41, 1332.16, 1307.41, 1343.87],
  ['09/10/2071', 1331.9, 1379.25, 1328.04, 1388.43],
  ['09/11/2071', 1379.3, 1450.21, 1379.3, 1450.28],
  ['09/12/2071', 1450.24, 1485.59, 1446.67, 1498.92],
  ['09/13/2071', 1485.59, 1460.39, 1456.2, 1485.59],
  ['09/14/2071', 1460.26, 1480.97, 1456.09, 1495.23],
  ['09/15/2071', 1480.87, 1497.59, 1460.27, 1522.44],
  ['09/16/2071', 1497.54, 1521.59, 1495.26, 1522.57],
  ['09/17/2071', 1521.62, 1522.96, 1514.97, 1558.47],
  ['09/18/2071', 1522.94, 1437.54, 1436.72, 1523.31],
  ['09/19/2071', 1437.59, 1465.12, 1437.57, 1467.94],
  ['09/20/2071', 1465.03, 1522.55, 1465.03, 1523.23],
  ['09/21/2071', 1522.68, 1540.85, 1510.09, 1543.15],
  ['09/22/2071', 1540.97, 1528.25, 1527.9, 1554.74],
  ['09/23/2071', 1528.2, 1569.31, 1528.14, 1569.47],
  ['09/24/2071', 1569.31, 1587.59, 1547.46, 1587.82],
  ['09/25/2071', 1587.63, 1616.48, 1584.1, 1629.08],
  ['09/26/2071', 1616.32, 1545.51, 1545.51, 1616.32],
  ['09/27/2071', 1545.3, 1521.17, 1519.44, 1557.48],
  ['09/28/2071', 1521.23, 1539.83, 1507.47, 1540.13],
  ['09/29/2071', 1539.98, 1528.22, 1528.02, 1546.43],
  ['09/30/2071', 1528.22, 1473.31, 1463.02, 1537.42],
  ['10/01/2071', 1473.31, 1462.57, 1451.55, 1479.86],
  ['10/02/2071', 1462.65, 1504.33, 1462.65, 1510.19],
  ['10/03/2071', 1504.37, 1518.73, 1504.37, 1532.09],
  ['10/04/2071', 1518.74, 1566.71, 1490.88, 1566.76],
  ['10/05/2071', 1566.79, 1591.84, 1559.49, 1594.75],
  ['10/06/2071', 1591.81, 1574.98, 1566.42, 1591.81],
  ['10/07/2071', 1575.14, 1518.43, 1518.43, 1575.17],
  ['10/08/2071', 1518.08, 1469.14, 1453.44, 1518.08],
  ['10/09/2071', 1468.74, 1487.17, 1451.71, 1495.38],
  ['10/10/2071', 1487.01, 1412.76, 1397.67, 1487.08],
  ['10/11/2071', 1412.65, 1380.35, 1353.87, 1412.66],
  ['10/12/2071', 1380.22, 1407.91, 1380.22, 1410.69],
  ['10/13/2071', 1407.86, 1398.39, 1397.61, 1435.22],
  ['10/14/2071', 1398.3, 1422.57, 1397.81, 1422.63],
  ['10/15/2071', 1422.69, 1398.59, 1398.48, 1429.62],
  ['10/16/2071', 1398.72, 1428.84, 1387.42, 1429.6],
  ['10/17/2071', 1428.9, 1447.41, 1428.88, 1471.68],
  ['10/18/2071', 1447.3, 1459.95, 1447.17, 1469.43],
  ['10/19/2071', 1459.68, 1387.85, 1385.18, 1459.86],
  ['10/20/2071', 1388.01, 1366.2, 1364.34, 1392.04]]);
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
      result.push(sum / dayCount);
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

export default IndexChart;
