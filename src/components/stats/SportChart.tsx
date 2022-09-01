import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
//
// import { GetAllBets } from '../../API/types/GetAllBets';
import { GetAllBets } from '../../API/types/GetAllbets';

interface IProps {
  bets: GetAllBets;
}

function SportChart({ bets }: IProps) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const pastBets = bets.getAllBets.filter(
    (bet: any) => bet.result !== 0 && bet.result !== null
  );

  const uniqueSport = [...new Set(pastBets.map((bet) => bet.category))];

  const betsNbBySport = [];
  for (let i = 0; i < uniqueSport.length; i += 1) {
    let betNbBySport = 0;
    betsNbBySport.push(
      pastBets.reduce((counter: number, obj) => {
        if (obj.category === uniqueSport[i]) betNbBySport += 1;
        return betNbBySport;
      }, 0)
    );
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels: uniqueSport,
    datasets: [
      {
        label: '# of Votes',
        data: betsNbBySport,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="w-3/12 m-auto mt-4">
      <p className="mb-3">
        Repartition selon les {uniqueSport.length} sports joués
      </p>
      <Doughnut data={data} options={options} />
    </div>
  );
}
export default SportChart;
