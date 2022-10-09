/* eslint-disable camelcase */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';
import volleyball from '../../assets/cat/volleyball.svg';
import tabletennis from '../../assets/cat/tabletennis.svg';
import badminton from '../../assets/cat/badminton.svg';
import icehokey from '../../assets/cat/icehokey.svg';
import esports from '../../assets/cat/esports.svg';
import handball from '../../assets/cat/handball.svg';
import snooker from '../../assets/cat/snooker.svg';
import cycling from '../../assets/cat/cycling.svg';
import { DarkModeContext } from '../../context/darkModeContext';
import { DashboardContext } from '../../context/dashboardContext';
import { GetBetByID_getBetByID } from '../../API/types/GetBetByID';

interface IProps {
  datas: GetBetByID_getBetByID;
}
function OneBet({ datas }: IProps): JSX.Element {
  const { isDarkMode } = useContext(DarkModeContext);
  const { updateIsModal, updateIdBetActif } = useContext(DashboardContext);

  const srcImg = () => {
    let src = '';
    switch (datas.category.toLowerCase()) {
      case 'football':
        src = football;
        break;
      case 'tennis':
        src = tennis;
        break;
      case 'table tennis':
        src = tabletennis;
        break;
      case 'snooker':
        src = snooker;
        break;
      case 'badminton':
        src = badminton;
        break;
      case 'volleyball':
        src = volleyball;
        break;
      case 'handball':
        src = handball;
        break;
      case 'ice hockey':
        src = icehokey;
        break;
      case 'e sports':
        src = esports;
        break;
      case 'cycling':
        src = cycling;
        break;
      case 'basketball':
        src = basket;
        break;
      default:
    }
    return src;
  };

  const backgroundColorBookmakers = () => {
    let background = '';
    switch (datas.bookmaker.toLowerCase()) {
      case 'pinnacle':
        background = '#E4AC65';
        break;
      case 'bet365':
        background = '#3BA6B9';
        break;
      case '1xbit':
        background = '#3DA184';
        break;
      case 'mrxbet':
        background = '#FF5829';
        break;
      case 'gg.bet':
        background = '#C6FE01';
        break;
      case 'betwinner':
        background = '#8790E0';
        break;
      default:
        background = '#000000';
    }
    return background;
  };

  const displayResult = (bet: GetBetByID_getBetByID) => {
    let profit = 0;
    if (bet.result === 0 || bet.result === null) {
      profit = 0;
    } else if (bet.result < 0) {
      profit = bet.stake * bet.result;
    } else {
      profit = (bet.stake * bet.odd - bet.stake) * bet.result;
    }
    return profit.toPrecision(2).toString();
  };
  return (
    <div
      className={`${
        isDarkMode ? 'bg-[#221C2D]' : 'bg-[#dcdff1]'
      } py-4 px-4 mb-4 rounded-xl `}
    >
      <div className="flex items-center justify-between ">
        <div className="flex items-center ">
          <img src={srcImg()} alt={datas.category} />
          <Link to={`/bet/${datas.id}`}>
            <div className="text-xl ml-2">{datas.name}</div>
          </Link>
        </div>
        <div>{displayResult(datas)}</div>
      </div>
      <div>
        {datas.type.split('@')[0]} @ {datas.odd}
      </div>
      <div className="text-lg">
        {datas.category} -{' '}
        <span className="text-xs opacity-80">
          le {new Date(datas.date).toLocaleDateString('fr')}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center mt-2">
          <div className="px-2 bg-[#D9D9D9] text-black rounded-full mr-2">
            {datas.stake}/20
          </div>
          <div
            style={{ backgroundColor: backgroundColorBookmakers() }}
            className="px-5 !text-white rounded-full"
          >
            {datas.bookmaker}
          </div>
        </div>
        <button
          onClick={() => {
            updateIdBetActif(datas.id);
            updateIsModal(true);
          }}
          className="bg-[#6640D0] rounded-sm px-8 py-2 hover:opacity-90 !text-white"
          type="button"
        >
          TRACK
        </button>
      </div>
    </div>
  );
}

export default OneBet;
