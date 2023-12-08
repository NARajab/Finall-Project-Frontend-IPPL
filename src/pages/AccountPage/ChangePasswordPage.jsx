import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import HamburgerMenuAccount from "../../components/AccountComponent/HamburgerMenuAccount";
import ButtonBack from "../../components/AccountComponent/ButtonBack";
import MenuList from "../../components/AccountComponent/MenuList";
import Navbar from "../../components/NavbarComponent/Navbar";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const UserPage = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const [showPasswords, setShowPasswords] = useState({
    lama: false,
    baru: false,
    ulangi: false,
  });

  const [passwords, setPasswords] = useState({
    lama: "",
    baru: "",
    ulangi: "",
  });

  // fungsi buka tutup hamburger menu
  const handleHamburgerClick = () => {
    setOpenHamburger(!openHamburger);
  };

  // fungsi untuk merubah status showPasswords menjadi true ke false atau sebaliknya untuk password tertentu
  // disertai dengan parameter inputName untuk mengetahui password mana yang sedang di handle atau dieksekusi
  const handleTogglePassword = (inputName) => () => {
    setShowPasswords((prevShowPasswords) => ({
      ...prevShowPasswords,
      [inputName]: !prevShowPasswords[inputName],
    }));
  };

  // fungsi untuk mengupdate nilai dari masing-masing password jika terjadi perubahan pada input
  const handleInputChange = (inputName) => (event) => {
    const inputValue = event.target.value;
    setPasswords((prevPasswords) => ({
      ...prevPasswords,
      [inputName]: inputValue,
    }));
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
          <div className="items-center h-full max-w-3xl mx-4 mt-4 bg-white border-2 border-indigo-600 lg:mx-auto rounded-2xl">
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
              <div className="lg:-mt-[136px]">
                <MenuList />
              </div>
              {/* card ubah password */}
              <div className="-mt-4 lg:mt-3">
                {/* heading ubah password */}
                <div className="mb-5 text-xl font-semibold text-center">
                  Ubah Password
                </div>
                {/* input update password */}
                <div className="flex flex-col items-center gap-4">
                  {/* masukkan password lama */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="lama"
                      className="mb-2 text-sm font-medium text-gray-800"
                    >
                      Masukkan Password Lama
                    </label>
                    <div className="relative w-64">
                      <input
                        type={showPasswords.lama ? "text" : "password"}
                        id="lama"
                        className="w-64 px-4 py-2 text-xs border-2 rounded-xl border-slate-300"
                        onChange={handleInputChange("lama")}
                      />
                      {passwords.lama && (
                        <button
                          className="absolute transform -translate-y-1/2 top-1/2 right-3 focus:outline-none"
                          onClick={handleTogglePassword("lama")}
                        >
                          {showPasswords.lama ? <BsEye /> : <BsEyeSlash />}
                        </button>
                      )}
                    </div>
                  </div>
                  {/* masukkan password baru */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="baru"
                      className="mb-2 text-sm font-medium text-gray-800"
                    >
                      Masukkan Password Baru
                    </label>
                    <div className="relative w-64">
                      <input
                        type={showPasswords.baru ? "text" : "password"}
                        id="baru"
                        className="w-64 px-4 py-2 text-xs border-2 rounded-xl border-slate-300"
                        onChange={handleInputChange("baru")}
                      />
                      {passwords.baru && (
                        <button
                          className="absolute transform -translate-y-1/2 top-1/2 right-3 focus:outline-none"
                          onClick={handleTogglePassword("baru")}
                        >
                          {showPasswords.baru ? <BsEye /> : <BsEyeSlash />}
                        </button>
                      )}
                    </div>
                  </div>
                  {/* ulangin password baru */}
                  <div className="flex flex-col">
                    <label
                      htmlFor="ulang"
                      className="mb-2 text-sm font-medium text-gray-800"
                    >
                      Ulangi Password Baru
                    </label>
                    <div className="relative w-64">
                      <input
                        type={showPasswords.ulangi ? "text" : "password"}
                        id="ulang"
                        className="w-64 px-4 py-2 text-xs border-2 rounded-xl border-slate-300"
                        onChange={handleInputChange("ulangi")}
                      />
                      {passwords.ulangi && (
                        <button
                          className="absolute transform -translate-y-1/2 top-1/2 right-3 focus:outline-none"
                          onClick={handleTogglePassword("ulangi")}
                        >
                          {showPasswords.ulangi ? <BsEye /> : <BsEyeSlash />}
                        </button>
                      )}
                    </div>
                  </div>
                  {/* button simpan perubahan */}
                  <button className="px-6 py-3 mt-2 text-sm font-semibold text-white bg-indigo-500 border-none rounded-2xl hover:bg-indigo-700">
                    Ubah Password
                  </button>
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
