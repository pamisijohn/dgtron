import { heroImg } from "../../assets/images";
import ButtonCta from "../common/ButtonCta";
import ButtonLearnMore from "../common/ButtonLearnMore";

const HeroSection = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center min-h-max max-container">
      <div className="relative xl:w-1/2 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <h1 className="mt-10 font-secondaryFont text-6xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          Innovative Energy Solutions for a{" "}
          <span className="text-dgt-green inline-block">Greener</span> Tomorrow
        </h1>
        <p className="font-primaryFont text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          We envision a world where renewable energy is accessible to all,
          driving adoption through quality, efficiency, and environmental
          responsibility
        </p>

        <div className="flex gap-4">
          <ButtonLearnMore label="Learn more" />
          <ButtonCta label="Free quote" />
        </div>
      </div>

      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <img
          src={heroImg}
          alt="hero image"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
