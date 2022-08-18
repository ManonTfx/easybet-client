interface IProps {
  title: string;
  content: string;
  borderColor: string;
}
function OneCardStatsEasyBet({
  title,
  content,
  borderColor,
}: IProps): JSX.Element {
  return (
    <div
      style={{ borderColor }}
      className={`border-2 rounded-[100%] space-y-11 flex flex-col justify-center h-[250px] w-[250px] `}
    >
      <p className="font-bold text-xl">{title}</p>
      <p className="w-10/12 mx-auto ">{content}</p>
    </div>
  );
}

export default OneCardStatsEasyBet;
