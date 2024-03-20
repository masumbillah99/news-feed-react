import logo from "../../assets/logo_light.png";
import FootBar from "./FootBar";
import SocialIcon from "./SocialIcon";
import Subscribe from "./Subscribe";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 pb-8 pt-20 text-white sm:pt-24">
      <div className="container mx-auto">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:col-span-7 xl:grid-cols-5">
            <img className="max-md:col-span-2" src={logo} alt="lws" />

            <FootBar />

            <SocialIcon />
          </div>

          <Subscribe />
        </div>
      </div>

      {/* copy right information */}
      <div className="container mt-6 lg:mt-12">
        <p className="text-center">
          Copyright &copy;2023 | All rights reserved by Learn with Sumit
        </p>
      </div>
    </footer>
  );
}
