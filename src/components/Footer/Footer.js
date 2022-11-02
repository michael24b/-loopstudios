import logo from "../../images/logo.svg";
import fb from "../../images/icon-facebook.svg";
import twitter from "../../images/icon-twitter.svg";
import pin from "../../images/icon-pinterest.svg";
import insta from "../../images/icon-instagram.svg";
import Links from "./Links";
import Icons from "./Icons";

const Footer = () => {
  return (
    <footer className="bg-black">
      {/* <!-- Container --> */}
      <div className="container max-w-6xl py-10 mx-auto">
        {/* <!-- Footer Flex Container --> */}
        <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
          {/* <!-- Menu & Logo Container --> */}
          <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
            {/* <!-- Logo --> */}
            <div className="h-8">
              <img src={logo} alt="" className="w-44 md:ml-3" />
            </div>
            {/* <!-- Menu Container --> */}
            <div className="flex flex-col items-center  space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
              {/* <!-- Links --> */}
              <Links name="About" />
              <Links name="Careers" />
              <Links name="Events" />
              <Links name="Products" />
              <Links name="Support" />
            </div>
          </div>

          {/* <!-- Social & Copy Container --> */}
          <div className="flex flex-col space-y-4 text-gray-500">
            {/* <!-- icons Container --> */}
            <div className="flex mx-auto space-x-4  md:mx-0">
              {/* <!-- Icons --> */}
              <Icons icon={fb} />
              <Icons icon={twitter} />
              <Icons icon={pin} />
              <Icons icon={insta} />
            </div>

            {/* <!-- Copy --> */}
            <div className="font-bold">
              &copy; 2022 Loopstudios. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
