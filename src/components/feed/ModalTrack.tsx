/* eslint-disable camelcase */
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';
import { GetOneBet_getBetByID } from '../../API/types/GetOneBet';

import Modal from '../modal/Modal';
import { DashboardContext } from '../../context/dashboardContext';
import NumberInput from '../formInputs/NumberInput';
import { AuthContext } from '../../context/authContext';
import { CreateUserBet_createUserBet } from '../../API/types/CreateUserBet';
import { CREATE_USERBET_MUTATION } from '../../API/mutation/userBets';
import { GET_ALL_BETS } from '../../API/query/bets';
import TextInput from '../formInputs/TextInput';

interface IProps {
  datas: GetOneBet_getBetByID;
}
function ModalTrack({ datas }: IProps): JSX.Element {
  const { handleSubmit, register } = useForm();

  const { updateIsModal } = useContext(DashboardContext);
  const { user } = useContext(AuthContext);

  // **  CREATE A USERBET
  const [create, { loading: createLoading, error: createError }] =
    useMutation<CreateUserBet_createUserBet>(CREATE_USERBET_MUTATION, {
      onCompleted: () => {
        updateIsModal(false);
        toast.success('Suivi enregistré!');
      },
      refetchQueries: [GET_ALL_BETS],
    });

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

  // TODO CHANGE TYPE
  const onSubmit = (data: any) => {
    const trackData = {
      amount: Number(data.amount),
      odd: parseFloat(data.odd),
      betId: datas.id,
      userId: user?.login.id,
    };
    create({ variables: { ...trackData } });
  };

  if (createLoading) {
    return <p>...loading</p>;
  }
  if (createError) {
    toast('Une erreur est survenue');
  }
  return (
    <Modal>
      <div className="w-full bg-[#5D6AD2] text-2xl text-center py-2">
        Suivre Pari
      </div>
      <div className="p-3 pl-5 pt-4">
        <p className="text-xl">{datas.name}</p>
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
        <form onSubmit={handleSubmit(onSubmit)} action="create/update/track">
          <TextInput
            placeholder="Odd"
            label="Odd"
            register={register}
            name="odd"
            id="odd"
            required
            error=""
          />
          <NumberInput
            placeholder="Amount"
            label="Amount"
            register={register}
            name="amount"
            id="amount"
            required
            error=""
          />
          <div className="flex w-full justify-end items-center py-4 px-3">
            <button
              onClick={() => updateIsModal(false)}
              className="bg-[#FF4E4E] bg-opacity-60 py-2 px-4 mr-3 rounded-sm"
              type="button"
            >
              Annuler
            </button>
            <button className="bg-[#3DA184] py-2 px-4 rounded-sm" type="submit">
              Valider
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalTrack;
