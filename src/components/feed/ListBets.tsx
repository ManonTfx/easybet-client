import OneBet from './OneBet';

function ListBets(): JSX.Element {
  const itemProvisory = [
    {
      catSport: 'Football',
      nameBet: 'Match de football',
      dateBet: 'Le 22/02/2020',
      bookmaker: 'Betfair',
      oddBet: '1.5',
    },
    {
      catSport: 'Tennis',
      nameBet: 'Match de football',
      dateBet: 'Le 22/02/2020',
      bookmaker: 'Betfair',
      oddBet: '1.5',
    },
    {
      catSport: 'Basket',
      nameBet: 'Match de football',
      dateBet: 'Le 22/02/2020',
      bookmaker: 'Betfair',
      oddBet: '1.5',
    },
  ];
  return (
    <div className="py-4 px-4">
      {itemProvisory.map((item) => {
        return (
          <OneBet
            catSport={item.catSport}
            nameBet={item.nameBet}
            oddBet={item.oddBet}
            bookmaker={item.bookmaker}
            dateBet={item.dateBet}
          />
        );
      })}
    </div>
  );
}

export default ListBets;
