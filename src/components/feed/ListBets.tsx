import OneBet from './OneBet';

function ListBets(): JSX.Element {
  const itemProvisory = [
    {
      id: 1,
      catSport: 'Football',
      nameBet: 'Match de football',
      dateBet: 'Le 22/02/2020',
      bookmaker: 'Betfair',
      oddBet: '1.5',
    },
    {
      id: 2,
      catSport: 'Tennis',
      nameBet: 'Match de football',
      dateBet: 'Le 22/02/2020',
      bookmaker: 'Betfair',
      oddBet: '1.5',
    },
    {
      id: 3,
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
          <div key={item.id}>
            <OneBet
              catSport={item.catSport}
              nameBet={item.nameBet}
              oddBet={item.oddBet}
              bookmaker={item.bookmaker}
              dateBet={item.dateBet}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ListBets;
