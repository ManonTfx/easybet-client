import { v4 } from 'uuid';

interface IProps {
  totalStaked: number;
  averageOdd: number;
  averageBet: number;
  totalWin: number;
  percentageWin: number;
  esperance: number;
}
function SecondaryStatisticalsFigures({
  totalStaked,
  averageOdd,
  averageBet,
  totalWin,
  percentageWin,
  esperance,
}: IProps): JSX.Element {
  const arrayDataLeft = [
    {
      label: 'Total parié',
      value: ` ${Math.floor(totalStaked)} €`,
    },
    {
      label: 'Cote moyenne',
      value: averageOdd.toPrecision(3),
    },
    {
      label: 'Mise moyenne',
      value: ` ${averageBet.toPrecision(3)} €`,
    },
  ];
  const arrayDataRight = [
    {
      label: 'Total Gagné',
      value: ` ${Math.floor(totalWin)} €`,
    },
    {
      label: 'Taux de victoire',
      value: ` ${percentageWin} %`,
    },
    {
      label: 'Esperance > 10K paris',
      value: ` ${esperance} €`,
    },
  ];
  return (
    <div className="lg:w-10/12">
      <div className="lg:flex p-5 w-full justify-between lg:w-1/2 ">
        <div>
          {arrayDataLeft.map((data) => {
            return (
              <div
                key={v4()}
                className="text-center lg:w-[200px] border-[#3BA6B9] text-center border-2 mx-2 py-2 rounded-[5px] mb-2"
              >
                <p className="text-xl">{data.label}</p>
                <p className="text-lg">{data.value}</p>
              </div>
            );
          })}
        </div>
        <div>
          {arrayDataRight.map((data) => {
            return (
              <div
                key={v4()}
                className="lg:w-[200px] border-[#3BA6B9] text-center border-2 mx-2 py-2 mb-2 rounded-[5px]"
              >
                <p className="text-xl">{data.label}</p>
                <p className="text-lg">{data.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SecondaryStatisticalsFigures;
