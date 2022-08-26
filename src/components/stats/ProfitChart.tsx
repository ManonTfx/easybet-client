import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  hoverRadius: 12,

  plugins: {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderJoinStyle: 'round',
        bezierCurve: false,
        radius: 20,
        tension: 0,
      },
    },
  },
};

const labels = ['', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => 1000 * Math.random()),
      borderColor: '#5C6AD2',
      backgroundColor: '#5C6AD2',
      label: '',
      tension: 0.4,
    },
  ],
};

function ProfitChart() {
  return (
    <div className="w-7/12 m-auto mt-5">
      <Line options={options} data={data} />
    </div>
  );
}
export default ProfitChart;
