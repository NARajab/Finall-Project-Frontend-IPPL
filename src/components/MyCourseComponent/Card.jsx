/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Book, Clock, Gem, Shield } from "lucide-react";
import Progressbar from "./ProgressBar";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { getCourseById } from "../../api/fetching";

// card course
const Card = ({ item, id }) => {
  return (
    <>
      <Link to={`/video/${id}/${item.courseId}`}>
        <div className="w-full pb-3 overflow-hidden bg-white rounded-lg">
          <div className="flex flex-col">
            <div>
              <img
                src={item.image}
                alt="ayam"
                className="object-cover w-full overflow-hidden h-28"
              />
            </div>
            <div className="flex flex-col mx-2 mt-1 md:mx-4 md:mt-2">
              <div className="flex items-center justify-between">
                <h1 className="text-sm font-bold text-color-primary lg:text-base -tracking-wide">
                  {item.categoryName}
                </h1>
                <p className="flex items-center font-semibold">
                  <span className="mr-1 lg:mr-2">
                    <FaStar color="#F9CC00" className="w-4 h-4 lg:w-5 lg:h-5" />
                  </span>
                  {item.rating}
                </p>
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-black lg:text-base -tracking-widest md:-tracking-wider">
                  {item.aboutCourse}
                </h3>
                <div className="flex flex-wrap justify-between mt-3">
                  <p className="flex items-center text-xs font-semibold text-color-primary -tracking-widest md:-tracking-wider">
                    <span className="text-green-500 mr-[2.5px]">
                      <Shield size={18} />
                    </span>{" "}
                    {item.courseLevel}
                  </p>
                  <p className="flex items-center text-xs font-semibold text-color-primary -tracking-widest md:-tracking-wider ">
                    <span className="text-green-500 mr-[2.5px]">
                      <Book size={18} />
                    </span>{" "}
                    {item.modulePerCourse} Modul
                  </p>
                  <p className="flex items-center text-xs font-semibold text-color-primary -tracking-widest md:-tracking-wider ">
                    <span className="text-green-500 mr-[2.5px]">
                      <Clock size={18} />
                    </span>{" "}
                    {item.durationPerCourseInMinutes} Menit
                  </p>
                </div>

                {/* Ini button ketika gratis */}
                {item.coursePrice === 0 && (
                  <div className="my-2">
                    <button className="px-4 py-1 text-xs font-semibold text-white transition-all duration-300 rounded-full bg-primary hover:scale-105">
                      Mulai Kelas
                    </button>
                  </div>
                )}
                {/* ini button ketika premium dan belum beli */}
                {item.courseType === "Premium" && item.coursePrice > 0 && (
                  <div className="my-2">
                    <button className="flex items-center justify-between px-4 py-1 text-xs font-semibold text-white transition-all duration-300 bg-blue-400 rounded-full hover:scale-105">
                      <span className="mr-2">
                        <Gem size={16} />
                      </span>{" "}
                      Premiun
                    </button>
                  </div>
                )}
                {/* button ketika mau beli (ada harganya) */}
                {item.courseType !== "Premium" && item.coursePrice > 0 && (
                  <div className="my-2">
                    <button className="flex items-center justify-between px-4 py-1 text-xs font-semibold text-white transition-all duration-300 bg-blue-400 rounded-full hover:scale-105">
                      {item.COurse && item.Course.coursePrice}
                    </button>
                  </div>
                )}
                {/* Ini untuk riwayat dan status bayarnya belum bayar */}
                {item.coursePrice === 0 &&
                  item.paymentStatus === "not_paid" && (
                    <div className="my-2">
                      <button className="flex items-center justify-between px-4 py-1 text-xs font-semibold text-white transition-all duration-300 bg-red-500 rounded-full hover:scale-105">
                        <span className="mr-2">
                          <Gem size={16} />
                        </span>{" "}
                        Waiting for payment
                      </button>
                    </div>
                  )}
                {/* Ini untuk riwayat dan status bayarnya udah bayar */}
                {item.paymentStatus === "paid" && (
                  <div className="my-2">
                    <button className="flex items-center justify-between px-4 py-1 text-xs font-semibold text-white transition-all duration-300 bg-green-400 rounded-full hover:scale-105">
                      <span className="mr-2">
                        <Gem size={16} />
                      </span>{" "}
                      Paid
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
