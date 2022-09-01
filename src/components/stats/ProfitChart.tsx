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

// A CHANGER !
// interface IProps {
//   betsProfit: {
//     id: number;
//     profit: number;
//   }[];
// }

interface IProps {
  betsProfit: number[];
}

function ProfitChart({ betsProfit }: IProps) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
  const options = {
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

  let i = 0;
  const labels = betsProfit.map(() => {
    i += 1;
    return i;
  });

  let total = 0;
  const data = {
    labels,
    datasets: [
      {
        data: betsProfit.map((betProfit) => {
          total += betProfit;
          return total;
        }),
        borderColor: '#5C6AD2',
        backgroundColor: '#5C6AD2',
        label: '',
        tension: 0.4,
      },
    ],
  };
  return (
    <div className="w-7/12 m-auto mt-5">
      <Line options={options} data={data} />
    </div>
  );
}
export default ProfitChart;
