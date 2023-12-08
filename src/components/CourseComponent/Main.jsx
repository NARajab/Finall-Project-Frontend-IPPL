/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { cn } from "../../libs/utils";
import Card from "./Card";
import PropTypes from "prop-types";

const Main = ({ course, valueChecked, handleCardClick }) => {
  // console.log(data);
  // console.log(courses);
  const [flag, setFlag] = useState(0);

  // const filterCourses = () => {
  //   if (flag === "All") {
  //     return courses;

  //   } else {
  //     return courses.filter((item) => item.courseStatus === flag);
  //   }
  const filterCourses = () => {
    if (flag === "All" && valueChecked) {
      return (
        course.filter((item) => item.Category === valueChecked) &&
        course.filter((item) => item.courseLevel === valueChecked)
      );
    } else if (flag === "inProgress" && valueChecked) {
      return (
        course.filter((item) => item.Category === valueChecked) &&
        course.filter((item) => item.courseLevel === valueChecked)
      );
    } else if (flag === "All") {
      return course;
    } else {
      return course.filter((item) => item.courseType === flag);
    }
  };
  useEffect(() => {
    setFlag("All");
  }, []);
  console.log(course.Category);
  return (
    <div>
      {/* filter */}
      <div className="grid grid-cols-3 gap-x-2">
        <div
          className={cn(
            "bg-white font-semibold rounded-xl md:rounded-2xl text-slate-500/80 transition",
            flag === "All" && "bg-primary text-white transition-all"
          )}
        >
          <button
            onClick={() => setFlag("All")}
            className="w-full h-8 text-xs md:h-10 -tracking-wider md:tracking-wider md:text-sm"
          >
            All
          </button>
        </div>
        <div
          className={cn(
            "bg-white font-semibold rounded-xl md:rounded-2xl text-slate-500/80 transition",
            flag === "Premium" && "bg-primary text-white transition-all"
          )}
        >
          <button
            onClick={() => setFlag("Premium")}
            className="w-full h-8 text-xs md:h-10 -tracking-wider md:tracking-wider md:text-sm"
          >
            Premium
          </button>
        </div>
        <div
          className={cn(
            "bg-white font-semibold rounded-xl md:rounded-2xl text-slate-500/80 transition",
            flag === "Free" && "bg-primary text-white transition-all"
          )}
        >
          <button
            onClick={() => setFlag("Free")}
            className="w-full h-8 text-xs md:h-10 -tracking-wider md:tracking-wider md:text-sm"
          >
            Free
          </button>
        </div>
      </div>
      {/* loop semua data */}
      <div className="grid gap-8 mt-4 md:grid-cols-2 md:mt-6">
        {Array.isArray(course) &&
          filterCourses().map((val, i) => (
            <Card
              key={i}
              item={val}
              filter={flag}
              onCardClick={handleCardClick}
            />
          ))}
      </div>
    </div>
  );
};

Main.propTypes = {
  courses: PropTypes.array,
};

export default Main;
