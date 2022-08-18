interface IProps {
  content: string;
}
function OneCardWhyEasyBet({ content }: IProps): JSX.Element {
  return (
    <div className="bg-[#5762C0] p-8 w-6/12 mx-auto rounded-[30px]">
      <p className="my-[2vh] text-lg">{content}</p>
    </div>
  );
}

export default OneCardWhyEasyBet;
