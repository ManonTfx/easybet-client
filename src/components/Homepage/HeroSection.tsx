function HeroSection(): JSX.Element {
  return (
    <div className="hero-section h-screen">
      <div className="pt-[30vh] pl-[15vw]">
        <p className="text-4xl font-bold mb-4">Pari Comme un pro</p>
        <p className="mb-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum soluta
          quos exercitationem inventore.
        </p>
        <button type="button" className="bg-primary p-2 rounded-lg">
          Rejoins nous
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
