import { v4 } from 'uuid';

interface IProps {
  totalBets: number;
  winnings: number;
  roi: number;
}
function MoreImportantFigures({
  totalBets,
  winnings,
  roi,
}: IProps): JSX.Element {
  const arrayData = [
    {
      label: 'Nombre de paris',
      value: totalBets,
    },
    {
      label: 'Gains',
      value: ` ${winnings} €`,
    },
    {
      label: 'ROI',
      value: ` ${roi} %`,
    },
  ];
  return (
    <div className="flex p-5 w-full justify-around">
      {arrayData.map((data) => {
        return (
          <div key={v4()} className="w-[150px] text-center">
            <p className="text-xl">{data.label}</p>
            <p className="text-lg">{data.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MoreImportantFigures;
