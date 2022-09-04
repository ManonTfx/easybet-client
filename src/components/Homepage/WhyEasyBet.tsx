import OneCardWhyEasyBet from './OneCardWhyEasyBet';

function WhyEasyBet(): JSX.Element {
  return (
    <div className="h-screen bg-[#221C2D] lg:pt-[20vh] pt-[50px] text-center last-section">
      <h2 className="lg:text-[50px] text-[30px] font-bold mb-8">
        Pourquoi EasyBet ?
      </h2>
      <div className="lg:w-7/12 m-auto w-full lg:px-0 px-[10px]">
        <div className="flex space-x-6">
          <OneCardWhyEasyBet content="Une expertise depuis plus de 5 ans sur les paris sportifs." />
          <OneCardWhyEasyBet content="Un ensemble de tutorial pour apprendre à gagner réellement sur le long terme." />
        </div>
        <div className="flex space-x-6 mt-6">
          <OneCardWhyEasyBet content="Un accès au groupe privé des parieurs gagnants." />
          <OneCardWhyEasyBet content="Des outils pour tracker tous tes résultats en 1 clic." />
        </div>
      </div>
    </div>
  );
}

export default WhyEasyBet;
