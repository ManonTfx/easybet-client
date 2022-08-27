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
import { GetAllBets } from '../../API/types/GetAllbets';

// A CHANGER !
interface IProps {
  bets: GetAllBets;
}

function ProfitChart({ bets }: IProps) {
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

  const pastBets = bets.getAllBets.filter(
    (bet: any) => bet.result !== 0 && bet.result !== null
  );

  let i = 0;
  const labels = pastBets.map(() => {
    i += 1;
    return i;
  });

  console.log(
    pastBets.reduce((acc: any, bet: any) => {
      return acc + (bet.stake * bet.odd - bet.stake) * bet.result;
    }, 0)
  );

  let total = 0;
  const data = {
    labels,
    datasets: [
      {
        data: pastBets.map((bet) => {
          if (bet.result !== null) {
            total += (bet.stake * bet.odd - bet.stake) * bet.result;
            return total;
          }
          return 0;
        }),

        //     totalWinArray.reduce((acc: any, obj: any) => {
        //   return acc + obj;
        // }, 0)
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
