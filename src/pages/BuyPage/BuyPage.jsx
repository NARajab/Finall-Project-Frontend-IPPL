/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Card from "../../components/MyCourseComponent/Card";

import { useState } from "react";
import Accordion from "../../components/AccordionComponent/Accordion";
import Navbar from "../../components/NavbarComponent/Navbar";

const BuyPage = () => {
  // const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (!open.includes(index)) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const accordionData = [
    {
      title: "this paymen",
      desc: "fsadfjsdgsbkgbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    },
    {
      title: "this paymen2",
      desc: "fsadfjsdgsbkgbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    },
  ];
  // const toggleAccordion = () => {
  //   setIsAccordionOpen(!isAccordionOpen);
  // };
  return (
    <>
      <Navbar />
      {/* <div className="relative flex flex-col w-full"> */}
      <div>
        <div className="pt-24 pb-3 shadow-md lg:pt-32">
          <div>
            <Link to="/">
              <h3 className="flex items-center ml-4 font-semibold duration-300 hover:scale-105 hover:underline lg:ml-">
                <span className="mr-3">
                  <FaArrowLeft />
                </span>
                Kembali
              </h3>
            </Link>
          </div>
          <h1 className="w-11/12 p-2 mx-auto text-xs font-semibold text-center text-white bg-red-600 rounded-md md:w-8/12 xl:w-6/12 -tracking-wider">
            Selesaikan Pembayaran sampai 10 Maret 2023 12:00
          </h1>
        </div>
      </div>
      <div className="w-full px-4 py-16">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          {/* <img
            src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          /> */}
          <div className="">
            {/* <div className="p-4 border-b border-black cursor-pointer" onClick={toggleAccordion}>
              <h2 className="text-lg font-semibold text-center">Accordion Title</h2>
              {isAccordionOpen && (
                <div className="p-4">
                  <div className="inline-flex items-center justify-center h-5 gap-4 w-72">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                      alt=""
                      className="relative w-20"
                    />
                    <img
                      src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                      className="relative w-20"
                    />
                    <img
                      src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                      className="relative w-20"
                    />
                  </div>
                  Accordion Content Goes Here
                  <p>Accordion Content Goes Here</p>
                </div>
              )}
            </div> */}
            <div className="px-[40px] max-w-[800px]">
              {accordionData.map((data, index) => {
                return (
                  <Accordion
                    key={index}
                    open={index === open}
                    title={data.title}
                    desc={data.desc}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </div>

          {/* <div className="flex flex-col justify-center"> */}
          <div className="relativ bg-gray-white shadow border border-blue-950 flex-col justify-center items-center gap-2.5 px-6 pt-5 mt-2 pb-9 mx-auto w-full max-w-lg rounded-2xl">
            <div className="mb-2 text-xl font-semibold">Pembayaran Kelas</div>
            {/* <Card /> */}
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className="flex items-center justify-center">
          <div className="flex items-center justify-center lg:w-full lg:overflow-hidden"> */}
      {/* Left Column with Accordion */}
      {/* <div className="flex-shrink-0 border-r border-gray-300 lg:w-1/4">
              <div className="p-4 border-b border-black cursor-pointer" onClick={toggleAccordion}>
                <h2 className="text-lg font-semibold text-center">Accordion Title</h2>
                {isAccordionOpen && (
                  <div className="p-4">
                    <div className="inline-flex items-center justify-center h-5 gap-4 w-72">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1280px-MasterCard_Logo.svg.png"
                        alt=""
                        className="relative w-20"
                      />
                      <img
                        src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                        className="relative w-20"
                      />
                      <img
                        src="https://www.freepnglogos.com/uploads/visa-card-logo-9.png"
                        className="relative w-20"
                      />
                    </div>
                    Accordion Content Goes Here
                    <p>Accordion Content Goes Here</p>
                  </div>
                )}
              </div> 
      {/* </div> */}
      {/* </div> */}

      {/* Right Column with Card */}
      {/* <div className="lg:w-3/4">
            <div className="bg-white w-full h-[900px] lg:h-screen">
              <div className="absolute px-4 lg:pt-20 w-full lg:w-full lg:px-[760px]">
                <div className="box mt-[150px] lg:mt-0 lg:w-[480px]">
                  <div className="relativ bg-gray-white shadow border border-blue-950 flex-col justify-center items-center gap-2.5 px-6 pt-5 pb-9 mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mb-2 text-xl font-semibold">Pembayaran Kelas</div>
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default BuyPage;
