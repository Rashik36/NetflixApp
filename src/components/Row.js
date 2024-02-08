import axios from "axios";
import React, { useEffect, useState } from "react";
import Movies from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const sliderLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <h2 className=" text-white font-bold md:text-xl p-4">{title}</h2>
      <div className=" relative flex items-center group">
        <MdChevronLeft
          onClick={sliderLeft}
          size={40}
          className=" bg-white rounded-full  left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden"
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => {
            return <Movies key={id} item={item} />;
          })}
        </div>
        <MdChevronRight
          onClick={sliderRight}
          size={40}
          className=" bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden"
        />
      </div>
    </div>
  );
};

export default Row;
