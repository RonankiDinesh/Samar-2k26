import { NavLink } from 'react-router-dom';
import '../homeStyles.css';

import SamarLogo from '../../../assets/logo/samarLogoWhite.png';
import SamarText from '../../../assets/customIllustration/samartext.png';
import Astronaut from "../../../assets/illustration/astronaut.png";

function LandingSection() {
  return (
    <section
      id="home"
      className="w-screen h-screen flex flex-col justify-center items-center overflow-hidden"
    >

 <main className="w-full h-full flex items-center relative">

  {/* LEFT: ASTRONAUT (PUSHED LEFT) */}
  <div className="absolute left-0 bottom-0 w-[55%] flex items-end justify-start pl-12">
    <img
      src={Astronaut}
      alt="Astronaut"
      className="w-[575px] max-w-none object-contain cosmic-float"
    />
  </div>

  {/* RIGHT: CONTENT (CENTERED VISUALLY) */}
  <div className="ml-auto w-[60%] mr-10 h-full flex flex-col justify-center items-center text-white text-center pt-16 pr-16">

    {/* LOGO + YEAR */}
    <div className="flex items-center gap-4">
      <img
        src={SamarLogo}
        alt="Samar Logo"
        className="w-[110px] cosmic-glow"
      />
      <h1 className="font-knightWarrior text-7xl glow-text drop-shadow-[3px_3px_0px_#000]">
        2026
      </h1>
    </div>

    {/* SAMAR TEXT */}
    <div className="mt-8">
      <img
        src={SamarText}
        alt="Samar Intro Text"
        className="w-[1000px]"
      />
    </div>

    {/* DESCRIPTION */}
    <p className="w-[600px] mt-8 font-fastLines text-3xl tracking-widest drop-shadow-[2px_2px_0px_#000]">
      A Flagship Sport&apos;s Event Organized by{' '}
      <a
        href="https://shaurya-nitrr.netlify.app/"
        target="_blank"
        rel="noreferrer"
        className="text-[#8CCCFF] hover:text-white transition-all"
      >
        Shaurya Sports Committee
      </a>
      , NITRR
    </p>

    {/* BUTTONS */}
    <div className="flex gap-6 mt-10">
      <NavLink
        to="/register"
        className="border-2 px-16 py-4 text-xl italic border-[#8CCCFF] text-white font-crossFly rounded-tl-3xl rounded-br-3xl hover:bg-rose-500 hover:rounded-lg hover:scale-[.97] transition-all backdrop-blur-lg"
      >
        REGISTER
      </NavLink>

      <a
        href="https://general-championship-seven.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="border-2 px-12 py-4 text-xl italic border-white text-white font-crossFly rounded-tr-3xl rounded-bl-3xl hover:bg-white hover:text-black hover:rounded-lg hover:scale-[.97] transition-all backdrop-blur-lg"
      >
        GC WEBSITE
      </a>
    </div>

  </div>
</main>

    </section>
  );
}

export default LandingSection;
