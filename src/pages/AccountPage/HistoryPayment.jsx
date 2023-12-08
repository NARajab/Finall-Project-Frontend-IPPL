import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import HamburgerMenuAccount from "../../components/AccountComponent/HamburgerMenuAccount";
import ButtonBack from "../../components/AccountComponent/ButtonBack";
import MenuList from "../../components/AccountComponent/MenuList";
import Card from "../../components/MyCourseComponent/Card";
import Navbar from "../../components/NavbarComponent/Navbar";

const UserPage = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const handleHamburgerClick = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <>
      <Navbar />
      <div className="relative w-full">
        <div className="w-full h-64 pt-24 bg-layer"></div>
        <div className="container mx-auto -mt-40 lg:-mt-32">
          {/* button kembali ke beranda/home */}
          <ButtonBack />

          {/* card border */}
          <div className="items-center h-full max-w-3xl mx-4 mt-4 mb-6 bg-white border-2 border-indigo-600 lg:mx-auto rounded-2xl">
            {/* heading akun */}
            <div className="py-4 text-center bg-indigo-600 rounded-t-lg">
              <h1 className="text-lg font-bold text-white">Akun</h1>
            </div>

            {/* hamburger menu akun di mobile dan tablet*/}
            <HamburgerMenuAccount
              handleHamburgerClick={handleHamburgerClick}
              openHamburger={openHamburger}
            />

            <div className="flex flex-col items-center justify-center mb-10 lg:mt-8 lg:flex lg:flex-row lg:justify-around">
              {/* menu pilihan pada laptop */}
              <div className="lg:-mt-[280px] ml-4">
                <MenuList />
              </div>
              {/* card ubah password */}
              <div className="">
                {/* heading ubah password */}
                <div className="mb-5 text-xl font-semibold text-center">
                  Riwayat Pembayaran
                </div>
                {/* card history */}
                <div className="flex flex-col items-center gap-4 shadow-xl rounded-3xl">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
