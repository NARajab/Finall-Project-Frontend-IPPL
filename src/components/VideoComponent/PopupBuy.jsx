import { useState } from "react";
// import Card from "../MyCourseComponent/Card";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { cn } from "../../libs/utils";

const PopupBuy = () => {
  const [isClick, setIsClick] = useState(true);
  return (
    <div
      className={cn(
        "bg-black/60 z-50 fixed top-0 left-0 right-0 bottom-0",
        isClick && "hidden"
      )}
    >
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="relative flex flex-col items-center justify-center w-full p-3 bg-white rounded-lg sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 h-fit">
          <div
            className="absolute duration-300 rounded-full cursor-pointer top-2 right-2 hover:bg-primary hover:text-white"
            onClick={() => {
              setIsClick(true);
            }}
          >
            <IoMdClose size={24} />
          </div>
          <h1 className="text-xl font-semibold text-black">
            Selangkah lagi menuju
          </h1>
          <h1 className="text-xl font-semibold text-color-primary">
            Kelas Premium
          </h1>
          {/* <div className="w-8/12 overflow-hidden border rounded-md border-color-primary"> */}
          {/* <Card /> */}
          {/* </div> */}
          <div className="w-10/12 mt-2 duration-300 md:w-8/12 lg:w-7/12 hover:scale-105">
            <button className="flex items-center justify-center w-full h-10 font-semibold text-white rounded-full bg-primary">
              Beli Sekarang
              <span className="ml-2">
                <FaArrowCircleRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupBuy;
