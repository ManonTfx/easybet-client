/* eslint-disable camelcase */
import { useContext } from 'react';
import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';
import { DarkModeContext } from '../../context/darkModeContext';
import { GetOneBet_getBetByID } from '../../API/types/GetOneBet';
import { DashboardContext } from '../../context/dashboardContext';
import ModalTrack from './ModalTrack';

interface IProps {
  datas: GetOneBet_getBetByID;
}
function OneBet({ datas }: IProps): JSX.Element {
  const { colorCards } = useContext(DarkModeContext);
  const { updateIsModal, isModal } = useContext(DashboardContext);
  const srcImg = () => {
    let src = '';
    switch (datas.category.toLowerCase()) {
      case 'football':
        src = football;
        break;
      case 'tennis':
        src = tennis;
        break;
      case 'basketball':
        src = basket;
        break;
      default:
    }
    return src;
  };
  return (
    <div className={`bg-[${colorCards}] py-4 px-4 mb-4 rounded-xl `}>
      <div className="flex items-center ">
        <img src={srcImg()} alt={datas.category} />
        <div className="text-xl ml-2">{datas.name}</div>
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
            {datas.stake}/10
          </div>
          <div className="px-5  bg-[#E4AC65] rounded-full">
            {datas.bookmaker}
          </div>
        </div>
        <button
          onClick={() => updateIsModal(true)}
          className="bg-[#3EB5CA] rounded-sm px-8 py-2 hover:opacity-90"
          type="button"
        >
          TRACK
        </button>
      </div>
      {isModal && <ModalTrack datas={datas} />}
    </div>
  );
}

export default OneBet;
