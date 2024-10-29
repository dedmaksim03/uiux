// import {
//     BarController,
//     LinearScale,
//     BarElement,
//     TimeScale,
//     Tooltip,
//   } from 'chart.js';
//   import 'chartjs-adapter-date-fns';
//   import { enUS } from 'date-fns/locale';
//   import { ReactChart } from 'chartjs-react';

//   // Register modules,
//   // this example for time scale and linear scale
//   ReactChart.register(BarController, LinearScale, BarElement, TimeScale, Tooltip);

//   // options of chart similar to v2 with a few changes
//   // https://www.chartjs.org/docs/next/getting-started/v3-migration/
//   const chartOption = {
//     scales: {
//       x: {
//         type: 'time',
//         adapters: {
//           date: enUS,
//         },
//       },
//       y: {
//         type: 'linear',
//       },
//     },
//   };

//   // data of chart similar to v2, check the migration guide
//   const chartData = {};

//   const BarChart = () => {
//     return (
//       <ReactChart
//         type="bar"
//         data={chartData}
//         options={chartOption}
//         height={400}
//       />
//     );
//   };
