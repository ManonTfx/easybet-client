function HeroSection(): JSX.Element {
  return (
    <div className="hero-section h-screen relative">
      <div className="pt-[30vh] pl-[15vw]">
        <h1 className="text-[70px] font-bold">Pari Comme un pro</h1>
        <p className="mb-3 text-[30px]">
          Respecte nos 2 piliers fondateurs: Contrôle tes émotions et Track tous
          tes résultats
        </p>

        <button type="button" className="bg-primary px-4 py-3 rounded-lg mt-4">
          Rejoins nous
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
