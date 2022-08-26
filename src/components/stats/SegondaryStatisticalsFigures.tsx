import { v4 } from 'uuid';

interface IProps {
  totalStaked: number;
  avarageOdd: number;
  avarageBet: number;
  totalWin: number;
  percentageWin: number;
  esperance: number;
}
function SecondaryStatisticalsFigures({
  totalStaked,
  avarageOdd,
  avarageBet,
  totalWin,
  percentageWin,
  esperance,
}: IProps): JSX.Element {
  const arrayDataLeft = [
    {
      label: 'Total parié',
      value: ` ${totalStaked} €`,
    },
    {
      label: 'Cote moyenne',
      value: avarageOdd,
    },
    {
      label: 'Mise moyenne',
      value: ` ${avarageBet} €`,
    },
  ];
  const arrayDataRight = [
    {
      label: 'Total Gagné',
      value: ` ${totalWin} €`,
    },
    {
      label: 'Taux de victoire',
      value: ` ${percentageWin} %`,
    },
    {
      label: 'Esperance > 1K paris',
      value: ` ${esperance} €`,
    },
  ];
  return (
    <div className=" w-9/12">
      <div className="flex p-5 w-full justify-between w-1/2">
        <div>
          {arrayDataLeft.map((data) => {
            return (
              <div key={v4()} className="w-[150px] text-center">
                <p className="text-xl">{data.label}</p>
                <p className="text-lg">{data.value}</p>
              </div>
            );
          })}
        </div>
        <div>
          {arrayDataRight.map((data) => {
            return (
              <div key={v4()} className="w-[150px] text-center">
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
