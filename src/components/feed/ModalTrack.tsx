/* eslint-disable camelcase */
import { useContext } from 'react';
import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';
import { GetOneBet_getBetByID } from '../../API/types/GetOneBet';

import Modal from '../modal/Modal';
import { DashboardContext } from '../../context/dashboardContext';

interface IProps {
  datas: GetOneBet_getBetByID;
}
function ModalTrack({ datas }: IProps): JSX.Element {
  const { updateIsModal } = useContext(DashboardContext);
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
    <Modal>
      <div className="w-full bg-[#5D6AD2] text-2xl text-center py-2">
        Suivre Pari
      </div>
      <div className="p-3">
        <p className="text-lg">{datas.name}</p>
        <div className="flex items-center my-3">
          <img className="mr-4" src={srcImg()} alt={datas.category} />
          <p className="mr-4">
            {datas.category} @{datas.odd}
          </p>
          <div className="px-2 bg-[#D9D9D9] text-black rounded-full mr-2">
            {datas.stake}/10
          </div>
          <div className="px-5  bg-[#E4AC65] rounded-full">
            {datas.bookmaker}
          </div>
        </div>
        <div className="border-t border-t-[#5D6AD2]">
          <p className="text-sm my-2">
            Indiquez le choix avec les cotes exactes et le montant que vous avez
            misé afin d avoir un suivi:
          </p>
        </div>
        <div className="flex w-full justify-end items-center py-4 px-3">
          <button
            onClick={() => updateIsModal(false)}
            className="bg-[#FF4E4E] bg-opacity-60 py-2 px-4 mr-3"
            type="button"
          >
            Annuler
          </button>
          <button className="bg-[#3DA184] py-2 px-4" type="button">
            Valider
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ModalTrack;
