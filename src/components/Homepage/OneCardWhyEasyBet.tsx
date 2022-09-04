interface IProps {
  content: string;
}
function OneCardWhyEasyBet({ content }: IProps): JSX.Element {
  return (
    <div className="bg-black bg-opacity-50 p-8 w-6/12 mx-auto rounded-[30px]">
      <p className="my-[2vh] lg:text-lg text-sm">{content}</p>
    </div>
  );
}

export default OneCardWhyEasyBet;
