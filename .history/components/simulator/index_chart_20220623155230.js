import ReactEcharts from "echarts-for-react";
const IndexChart = () => {
  const upColor = "#C3FCC2";
  const upBorderColor = "#86BF8C";
  const downColor = "#EF534F";
  const downBorderColor = "#E5403B";
  const data0 = splitData([
    {
      date: "07/01/2071",
      highest: 1104,
      lowest: 1071.66,
      open: 1078,
      close: 1089.65,
    },
    {
      date: "07/02/2071",
      highest: 1088.13,
      lowest: 1049.4,
      open: 1086.87,
      close: 1053.94,
    },
    {
      date: "07/03/2071",
      highest: 1100.36,
      lowest: 1061.2,
      open: 1069.4,
      close: 1061.2,
    },
    {
      date: "07/04/2071",
      highest: 1060.75,
      lowest: 953.15,
      open: 1060.75,
      close: 953.15,
    },
    {
      date: "07/05/2071",
      highest: 1011.58,
      lowest: 798.11,
      open: 944.58,
      close: 798.11,
    },
    {
      date: "07/06/2071",
      highest: 856.69,
      lowest: 760.58,
      open: 766.84,
      close: 830.28,
    },
    {
      date: "07/07/2071",
      highest: 941.83,
      lowest: 799.42,
      open: 828.17,
      close: 941.54,
    },
    {
      date: "07/08/2071",
      highest: 956.65,
      lowest: 910.54,
      open: 953.14,
      close: 953.4,
    },
    {
      date: "07/09/2071",
      highest: 969.37,
      lowest: 922.04,
      open: 958.08,
      close: 952.24,
    },
    {
      date: "07/10/2071",
      highest: 1017.45,
      lowest: 934.11,
      open: 951.56,
      close: 1017.16,
    },
    {
      date: "07/11/2071",
      highest: 1088.85,
      lowest: 1014.93,
      open: 1014.93,
      close: 1041.08,
    },
    {
      date: "07/12/2071",
      highest: 1030.07,
      lowest: 991.08,
      open: 1028.16,
      close: 1029.78,
    },
    {
      date: "07/13/2071",
      highest: 1057.81,
      lowest: 994.49,
      open: 1026.13,
      close: 1037.12,
    },
    {
      date: "07/14/2071",
      highest: 1057.45,
      lowest: 1037.66,
      open: 1040.9,
      close: 1055.52,
    },
    {
      date: "07/15/2071",
      highest: 1102.55,
      lowest: 1052.99,
      open: 1071.01,
      close: 1102.55,
    },
    {
      date: "07/16/2071",
      highest: 1123.45,
      lowest: 1097.46,
      open: 1099.88,
      close: 1122.79,
    },
    {
      date: "07/17/2071",
      highest: 1165.2,
      lowest: 1116.46,
      open: 1139.13,
      close: 1123.89,
    },
    {
      date: "07/18/2071",
      highest: 1127.59,
      lowest: 1086.48,
      open: 1115.81,
      close: 1086.73,
    },
    {
      date: "07/19/2071",
      highest: 1137.68,
      lowest: 1053.31,
      open: 1078.89,
      close: 1132.28,
    },
    {
      date: "07/20/2071",
      highest: 1168.79,
      lowest: 1103.06,
      open: 1111.99,
      close: 1131.21,
    },
    {
      date: "07/21/2071",
      highest: 1140.21,
      lowest: 1081.15,
      open: 1130.34,
      close: 1109.01,
    },
    {
      date: "07/22/2071",
      highest: 1170.59,
      lowest: 1133.28,
      open: 1133.28,
      close: 1163.85,
    },
    {
      date: "07/23/2071",
      highest: 1223.28,
      lowest: 1167.8,
      open: 1167.8,
      close: 1223.22,
    },
    {
      date: "07/24/2071",
      highest: 1209.71,
      lowest: 1194.8,
      open: 1202.65,
      close: 1201.85,
    },
    {
      date: "07/25/2071",
      highest: 1246.52,
      lowest: 1089.68,
      open: 1205.57,
      close: 1232.54,
    },
    {
      date: "07/26/2071",
      highest: 1270.64,
      lowest: 1123.26,
      open: 1232.75,
      close: 1172.03,
    },
    {
      date: "07/27/2071",
      highest: 1271.74,
      lowest: 1128.35,
      open: 1172.06,
      close: 1231.09,
    },
    {
      date: "07/28/2071",
      highest: 1292.72,
      lowest: 1212.55,
      open: 1231.05,
      close: 1291.49,
    },
    {
      date: "07/29/2071",
      highest: 1305.58,
      lowest: 1195.8,
      open: 1291.41,
      close: 1196.88,
    },
    {
      date: "07/30/2071",
      highest: 1197.02,
      lowest: 1111.23,
      open: 1197.02,
      close: 1150.65,
    },
    {
      date: "07/31/2071",
      highest: 1191.74,
      lowest: 1068.73,
      open: 1150.57,
      close: 1068.73,
    },
    {
      date: "08/01/2071",
      highest: 1097,
      lowest: 1022.12,
      open: 1068.57,
      close: 1025.89,
    },
    {
      date: "08/02/2071",
      highest: 1059.56,
      lowest: 918.78,
      open: 1025.81,
      close: 1029.15,
    },
    {
      date: "08/03/2071",
      highest: 1144.94,
      lowest: 1028.77,
      open: 1028.77,
      close: 1144.92,
    },
    {
      date: "08/04/2071",
      highest: 1188.56,
      lowest: 1129.64,
      open: 1144.89,
      close: 1188.49,
    },
    {
      date: "08/05/2071",
      highest: 1191.67,
      lowest: 1165.25,
      open: 1188.45,
      close: 1185.81,
    },
    {
      date: "08/06/2071",
      highest: 1272.9,
      lowest: 1180.42,
      open: 1186.01,
      close: 1249.95,
    },
    {
      date: "08/07/2071",
      highest: 1291.49,
      lowest: 1223.8,
      open: 1249.77,
      close: 1284.94,
    },
    {
      date: "08/08/2071",
      highest: 1309.67,
      lowest: 1280.01,
      open: 1285.06,
      close: 1301.91,
    },
    {
      date: "08/09/2071",
      highest: 1305.99,
      lowest: 1227.92,
      open: 1302.04,
      close: 1250.9,
    },
    {
      date: "08/10/2071",
      highest: 1271.43,
      lowest: 1243.11,
      open: 1250.82,
      close: 1271.32,
    },
    {
      date: "08/11/2071",
      highest: 1337.32,
      lowest: 1268.12,
      open: 1271.43,
      close: 1335.61,
    },
    {
      date: "08/12/2071",
      highest: 1398.92,
      lowest: 1335.73,
      open: 1335.73,
      close: 1398.36,
    },
    {
      date: "08/13/2071",
      highest: 1438.16,
      lowest: 1384.77,
      open: 1398.47,
      close: 1431.15,
    },
    {
      date: "08/14/2071",
      highest: 1439.24,
      lowest: 1399.19,
      open: 1431.39,
      close: 1439.24,
    },
    {
      date: "08/15/2071",
      highest: 1474.85,
      lowest: 1439.59,
      open: 1439.59,
      close: 1450.98,
    },
    {
      date: "08/16/2071",
      highest: 1466.26,
      lowest: 1414.09,
      open: 1451.21,
      close: 1439.68,
    },
    {
      date: "08/17/2071",
      highest: 1519.51,
      lowest: 1428.92,
      open: 1439.55,
      close: 1518.53,
    },
    {
      date: "08/18/2071",
      highest: 1518.4,
      lowest: 1435.73,
      open: 1518.4,
      close: 1470.48,
    },
    {
      date: "08/19/2071",
      highest: 1577.28,
      lowest: 1463.71,
      open: 1470.38,
      close: 1515.76,
    },
    {
      date: "08/20/2071",
      highest: 1530.29,
      lowest: 1499.22,
      open: 1515.79,
      close: 1506.68,
    },
    {
      date: "08/21/2071",
      highest: 1540.3,
      lowest: 1506.92,
      open: 1506.92,
      close: 1535.32,
    },
    {
      date: "08/22/2071",
      highest: 1555,
      lowest: 1505.02,
      open: 1535.51,
      close: 1530.61,
    },
    {
      date: "08/23/2071",
      highest: 1597.17,
      lowest: 1530.6,
      open: 1530.6,
      close: 1577.29,
    },
    {
      date: "08/24/2071",
      highest: 1577.15,
      lowest: 1480.96,
      open: 1577.15,
      close: 1520.01,
    },
    {
      date: "08/25/2071",
      highest: 1530.34,
      lowest: 1478.57,
      open: 1520.3,
      close: 1479.51,
    },
    {
      date: "08/26/2071",
      highest: 1535.04,
      lowest: 1473.28,
      open: 1479.75,
      close: 1530.86,
    },
    {
      date: "08/27/2071",
      highest: 1598.77,
      lowest: 1530.82,
      open: 1530.82,
      close: 1597.72,
    },
    {
      date: "08/28/2071",
      highest: 1641.46,
      lowest: 1596.9,
      open: 1597.56,
      close: 1641.08,
    },
    {
      date: "08/29/2071",
      highest: 1641.11,
      lowest: 1621.93,
      open: 1641.11,
      close: 1639.68,
    },
    {
      date: "08/30/2071",
      highest: 1670.44,
      lowest: 1619.88,
      open: 1639.99,
      close: 1651.41,
    },
    {
      date: "08/31/2071",
      highest: 1663.17,
      lowest: 1532.91,
      open: 1651.53,
      close: 1568.98,
    },
    {
      date: "09/01/2071",
      highest: 1619.93,
      lowest: 1517.14,
      open: 1569,
      close: 1521.88,
    },
    {
      date: "09/02/2071",
      highest: 1537.54,
      lowest: 1481.79,
      open: 1521.73,
      close: 1484.72,
    },
    {
      date: "09/03/2071",
      highest: 1525.98,
      lowest: 1465.53,
      open: 1484.48,
      close: 1512.6,
    },
    {
      date: "09/04/2071",
      highest: 1518.91,
      lowest: 1413.9,
      open: 1512.6,
      close: 1448.58,
    },
    {
      date: "09/05/2071",
      highest: 1450.52,
      lowest: 1411.52,
      open: 1448.58,
      close: 1411.52,
    },
    {
      date: "09/06/2071",
      highest: 1411.46,
      lowest: 1365.54,
      open: 1411.46,
      close: 1365.54,
    },
    {
      date: "09/07/2071",
      highest: 1365.68,
      lowest: 1325.85,
      open: 1365.59,
      close: 1344.68,
    },
    {
      date: "09/08/2071",
      highest: 1353.59,
      lowest: 1297.05,
      open: 1344.53,
      close: 1307.35,
    },
    {
      date: "09/09/2071",
      highest: 1343.87,
      lowest: 1307.41,
      open: 1307.41,
      close: 1332.16,
    },
    {
      date: "09/10/2071",
      highest: 1388.43,
      lowest: 1328.04,
      open: 1331.9,
      close: 1379.25,
    },
    {
      date: "09/11/2071",
      highest: 1450.28,
      lowest: 1379.3,
      open: 1379.3,
      close: 1450.21,
    },
    {
      date: "09/12/2071",
      highest: 1498.92,
      lowest: 1446.67,
      open: 1450.24,
      close: 1485.59,
    },
    {
      date: "09/13/2071",
      highest: 1485.59,
      lowest: 1456.2,
      open: 1485.59,
      close: 1460.39,
    },
    {
      date: "09/14/2071",
      highest: 1495.23,
      lowest: 1456.09,
      open: 1460.26,
      close: 1480.97,
    },
    {
      date: "09/15/2071",
      highest: 1522.44,
      lowest: 1460.27,
      open: 1480.87,
      close: 1497.59,
    },
    {
      date: "09/16/2071",
      highest: 1522.57,
      lowest: 1495.26,
      open: 1497.54,
      close: 1521.59,
    },
    {
      date: "09/17/2071",
      highest: 1558.47,
      lowest: 1514.97,
      open: 1521.62,
      close: 1522.96,
    },
    {
      date: "09/18/2071",
      highest: 1523.31,
      lowest: 1436.72,
      open: 1522.94,
      close: 1437.54,
    },
    {
      date: "09/19/2071",
      highest: 1467.94,
      lowest: 1437.57,
      open: 1437.59,
      close: 1465.12,
    },
    {
      date: "09/20/2071",
      highest: 1523.23,
      lowest: 1465.03,
      open: 1465.03,
      close: 1522.55,
    },
    {
      date: "09/21/2071",
      highest: 1543.15,
      lowest: 1510.09,
      open: 1522.68,
      close: 1540.85,
    },
    {
      date: "09/22/2071",
      highest: 1554.74,
      lowest: 1527.9,
      open: 1540.97,
      close: 1528.25,
    },
    {
      date: "09/23/2071",
      highest: 1569.47,
      lowest: 1528.14,
      open: 1528.2,
      close: 1569.31,
    },
    {
      date: "09/24/2071",
      highest: 1587.82,
      lowest: 1547.46,
      open: 1569.31,
      close: 1587.59,
    },
    {
      date: "09/25/2071",
      highest: 1629.08,
      lowest: 1584.1,
      open: 1587.63,
      close: 1616.48,
    },
    {
      date: "09/26/2071",
      highest: 1616.32,
      lowest: 1545.51,
      open: 1616.32,
      close: 1545.51,
    },
    {
      date: "09/27/2071",
      highest: 1557.48,
      lowest: 1519.44,
      open: 1545.3,
      close: 1521.17,
    },
    {
      date: "09/28/2071",
      highest: 1540.13,
      lowest: 1507.47,
      open: 1521.23,
      close: 1539.83,
    },
    {
      date: "09/29/2071",
      highest: 1546.43,
      lowest: 1528.02,
      open: 1539.98,
      close: 1528.22,
    },
    {
      date: "09/30/2071",
      highest: 1537.42,
      lowest: 1463.02,
      open: 1528.22,
      close: 1473.31,
    },
    {
      date: "10/01/2071",
      highest: 1479.86,
      lowest: 1451.55,
      open: 1473.31,
      close: 1462.57,
    },
    {
      date: "10/02/2071",
      highest: 1510.19,
      lowest: 1462.65,
      open: 1462.65,
      close: 1504.33,
    },
    {
      date: "10/03/2071",
      highest: 1532.09,
      lowest: 1504.37,
      open: 1504.37,
      close: 1518.73,
    },
    {
      date: "10/04/2071",
      highest: 1566.76,
      lowest: 1490.88,
      open: 1518.74,
      close: 1566.71,
    },
    {
      date: "10/05/2071",
      highest: 1594.75,
      lowest: 1559.49,
      open: 1566.79,
      close: 1591.84,
    },
    {
      date: "10/06/2071",
      highest: 1591.81,
      lowest: 1566.42,
      open: 1591.81,
      close: 1574.98,
    },
    {
      date: "10/07/2071",
      highest: 1575.17,
      lowest: 1518.43,
      open: 1575.14,
      close: 1518.43,
    },
    {
      date: "10/08/2071",
      highest: 1518.08,
      lowest: 1453.44,
      open: 1518.08,
      close: 1469.14,
    },
    {
      date: "10/09/2071",
      highest: 1495.38,
      lowest: 1451.71,
      open: 1468.74,
      close: 1487.17,
    },
    {
      date: "10/10/2071",
      highest: 1487.08,
      lowest: 1397.67,
      open: 1487.01,
      close: 1412.76,
    },
    {
      date: "10/11/2071",
      highest: 1412.66,
      lowest: 1353.87,
      open: 1412.65,
      close: 1380.35,
    },
    {
      date: "10/12/2071",
      highest: 1410.69,
      lowest: 1380.22,
      open: 1380.22,
      close: 1407.91,
    },
    {
      date: "10/13/2071",
      highest: 1435.22,
      lowest: 1397.61,
      open: 1407.86,
      close: 1398.39,
    },
    {
      date: "10/14/2071",
      highest: 1422.63,
      lowest: 1397.81,
      open: 1398.3,
      close: 1422.57,
    },
    {
      date: "10/15/2071",
      highest: 1429.62,
      lowest: 1398.48,
      open: 1422.69,
      close: 1398.59,
    },
    {
      date: "10/16/2071",
      highest: 1429.6,
      lowest: 1387.42,
      open: 1398.72,
      close: 1428.84,
    },
    {
      date: "10/17/2071",
      highest: 1471.68,
      lowest: 1428.88,
      open: 1428.9,
      close: 1447.41,
    },
    {
      date: "10/18/2071",
      highest: 1469.43,
      lowest: 1447.17,
      open: 1447.3,
      close: 1459.95,
    },
    {
      date: "10/19/2071",
      highest: 1459.86,
      lowest: 1385.18,
      open: 1459.68,
      close: 1387.85,
    },
    {
      date: "10/20/2071",
      highest: 1392.04,
      lowest: 1364.34,
      open: 1388.01,
      close: 1366.2,
    },
  ]);
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
    <ReactEcharts
      style={{ height: 450, marginTop: -50, marginLeft: -5 }}
      option={option1}
    />
  );
};

export default IndexChart;
