/* eslint-disable camelcase */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from '@apollo/client';
import { toast } from 'react-toastify';
import football from '../../assets/cat/football.svg';
import tennis from '../../assets/cat/tennis.svg';
import basket from '../../assets/cat/basket.svg';
import Modal from '../modal/Modal';
import { DashboardContext } from '../../context/dashboardContext';
import NumberInput from '../formInputs/NumberInput';
import { AuthContext } from '../../context/authContext';
import { CreateUserBet_createUserBet } from '../../API/types/CreateUserBet';
import {
  CREATE_USERBET_MUTATION,
  UPDATE_USERBET,
} from '../../API/mutation/userBets';
import { GET_ALL_BETS, GET_ONE_BET } from '../../API/query/bets';
import TextInput from '../formInputs/TextInput';
import { DarkModeContext } from '../../context/darkModeContext';

interface IProps {
  dataUserBets: any;
}

function ModalTrack({ dataUserBets }: IProps): JSX.Element {
  const { handleSubmit } = useForm();

  const { updateIsModal, idBetActif } = useContext(DashboardContext);
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(DarkModeContext);

  // ** READ ONE BET
  const {
    loading: loadingBet,
    error: errorBet,
    data: dataBet,
  } = useQuery(GET_ONE_BET, {
    variables: { getBetByIdId: idBetActif },
  });

  const userBetId = dataUserBets.getAllUserBets.filter(
    (userBet: any) =>
      userBet.userId === user?.login.id && userBet.betId === idBetActif
  );

  const [odd, setOdd] = useState(userBetId.length > 0 ? userBetId[0].odd : '');
  const [amount, setAmount] = useState(
    userBetId.length > 0 ? userBetId[0].amount : ''
  );

  // **  CREATE A USERBET
  const [create, { loading: createLoading, error: createError }] =
    useMutation<CreateUserBet_createUserBet>(CREATE_USERBET_MUTATION, {
      onCompleted: () => {
        updateIsModal(false);
        toast('Votre pari a bien été enregistré!');
      },
      refetchQueries: [GET_ALL_BETS],
    });

  // ** UPDATE A USERBET
  const [update, { loading: updateLoading, error: updateError }] = useMutation(
    UPDATE_USERBET,
    {
      onCompleted: () => {
        updateIsModal(false);
        toast('Votre pari a bien été modifié!');
      },
      refetchQueries: [GET_ALL_BETS],
    }
  );
  const srcImg = () => {
    let src = '';
    switch (dataBet.getBetByID.category.toLowerCase()) {
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

  const onSubmit = () => {
    const trackData = {
      amount: Number(amount),
      odd: parseFloat(odd),
      betId: idBetActif,
      userId: user?.login.id,
    };

    const trackDataUpdate = {
      amount: Number(amount),
      odd: parseFloat(odd),
      betId: idBetActif,
      updateUserBetId: userBetId[0].id,
    };

    if (userBetId.length > 0) {
      update({ variables: { ...trackDataUpdate } });
    } else {
      create({ variables: { ...trackData } });
    }
  };

  if (createLoading || loadingBet || updateLoading) {
    return <p>...loading</p>;
  }
  if (createError || errorBet || updateError) {
    toast('Une erreur est survenue');
  }
  return (
    <Modal>
      <div className="w-full bg-[#5D6AD2] !text-white text-2xl text-center py-2">
        Suivre Pari
      </div>
      <div
        style={{ backgroundColor: isDarkMode ? '#121212' : '#dcdff0' }}
        className="p-3 pl-5 pt-4 "
      >
        <p className="text-xl">{dataBet.getBetByID.name}</p>
        <div className="flex items-center my-3">
          <img
            className="mr-4"
            src={srcImg()}
            alt={dataBet.getBetByID.category}
          />
          <p className="mr-4">
            {dataBet.category} @{dataBet.getBetByID.odd}
          </p>
          <div className="px-2 bg-[#D9D9D9] text-black rounded-full mr-2">
            {dataBet.getBetByID.stake}/10
          </div>
          <div className="px-5  bg-[#E4AC65] rounded-full">
            {dataBet.getBetByID.bookmaker}
          </div>
        </div>
        <div className="border-t border-t-[#5D6AD2]">
          <p className="text-sm my-2">
            Indiquez le choix avec les cotes exactes et le montant que vous avez
            misé afin d avoir un suivi:
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="create/update/track">
          <div className="w-2/12">
            <TextInput
              placeholder="Cote"
              label="Cote"
              id="odd"
              required
              error=""
              value={odd}
              setValue={setOdd}
            />
          </div>
          <div className="w-2/12 flex items-center">
            <NumberInput
              placeholder="Montant"
              label="Montant"
              value={amount}
              setValue={setAmount}
              id="amount"
              required
              error=""
            />
            <div className="mt-11 ml-2 ">EUR</div>
          </div>
          <div className="flex w-full justify-end items-center py-4 px-3">
            <button
              onClick={() => updateIsModal(false)}
              className=" !text-white bg-[#FF4E4E] bg-opacity-60 py-2 px-4 mr-3 rounded-sm"
              type="button"
            >
              Annuler
            </button>
            <button
              className="!text-white bg-[#3DA184] py-2 px-4 rounded-sm"
              type="submit"
            >
              {userBetId.length > 0 ? 'Modifier' : 'Valider'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default ModalTrack;
