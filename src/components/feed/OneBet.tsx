import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';

interface IProps {
  catSport: string;
  nameBet: string;
  dateBet: string;
  bookmaker: string;
  oddBet: string;
}
function OneBet({
  catSport,
  nameBet,
  dateBet,
  bookmaker,
  oddBet,
}: IProps): JSX.Element {
  const srcImg = () => {
    let src = '';
    if (catSport === 'Football') {
      src = football;
    }
    if (catSport === 'Tennis') {
      src = tennis;
    }
    if (catSport === 'Basket') {
      src = basket;
    }
    return src;
  };

  return (
    <div className="bg-lightGray py-4 px-4 mb-4 rounded-xl">
      <div className="flex items-center justify-between ">
        <img src={srcImg()} alt={catSport} />
        <div>{nameBet}</div>
      </div>
      <div>
        {catSport}/ {dateBet}
      </div>
      <div className="flex items-center">
        <div>{oddBet}</div>
        <div>{bookmaker}</div>
      </div>
    </div>
  );
}

export default OneBet;
