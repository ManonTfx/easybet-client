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
      value: ` ${Math.floor(winnings)} €`,
    },
    {
      label: 'ROI',
      value: ` ${roi} %`,
    },
  ];
  return (
    <div className="flex p-5 w-full justify-between lg:px-[100px]">
      {arrayData.map((data) => {
        return (
          <div
            key={v4()}
            className="w-[200px] border-[#3BA6B9] text-center border-2 mx-2 py-2 rounded-[5px] "
          >
            <p className="text-xl">{data.label}</p>
            <p className="text-lg">{data.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MoreImportantFigures;
