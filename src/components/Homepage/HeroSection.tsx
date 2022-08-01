function HeroSection(): JSX.Element {
  return (
    <div className="hero-section h-screen">
      <div className="pt-[30vh] pl-[15vw]">
        <p className="text-[50px] font-bold">Pari Comme un pro</p>
        <p className="mb-3 text-[20px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum soluta
          quos exercitationem inventore.
        </p>
        <button
          type="button"
          className="bg-primary px-4 py-3 rounded-lg mt-4"
          style={{
            background:
              'linear-gradient(181.76deg, rgba(255, 255, 255, 0.4) -72.83%, #8560EE 98.51%)',
          }}
        >
          Rejoins nous
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
