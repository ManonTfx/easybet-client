import OneCardStatsEasyBet from './OneCardStatsEasyBet';

function StatsEasyBetSection(): JSX.Element {
  return (
    <div
      style={{
        background:
          'radial-gradient(circle, rgba(58,57,98,1) 0%, rgba(34,28,45,1) 100%)',
      }}
      className="h-screen "
    >
      <div className="pt-[20vh] text-center">
        <h2 className="text-[50px] font-bold mb-5">
          Les stats ne mentent pas{' '}
        </h2>
        <p>
          Nous avons plus de 7000 paris à notre actif mais nous avons décidé de
          relancer les stats à louverture de la plateforme.
        </p>
        <div className="flex justify-center space-x-4 items-center mt-11">
          <OneCardStatsEasyBet
            title="+200 Paris"
            content="Nous procurrons en moyenne 3 paris par jour"
            borderColor="#3EB5CA"
          />
          <OneCardStatsEasyBet
            title="+10% ROI"
            content="Cela signifie que sur le long terme, miser 100e t’en rapporte 10"
            borderColor="#8790E0"
          />
          <OneCardStatsEasyBet
            title="0 Bullshit"
            content="Aucun résultat n’est supprimé. L’historique est vérifiable."
            borderColor="#E4AC65"
          />
        </div>
      </div>
    </div>
  );
}

export default StatsEasyBetSection;
