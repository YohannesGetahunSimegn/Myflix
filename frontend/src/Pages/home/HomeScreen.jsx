import React from "react";
import Navbar from "../../components/Navbar.jsx";
import { Link } from "react-router-dom";
import { Info, Play } from "lucide-react";
import useGetTrendingContent from "../../hooks/useGetTrendingContent.jsx";
import { ORIGINAL_IMG_BASE_URL } from "../../utils/constants.js";

const HomeScreen = () => {
  const { trendingContent } = useGetTrendingContent();
  console.log("trendingContent", trendingContent);
  return (
    <>
      <div className="relative h-screen text-white ">
        <Navbar />
        <img
          src={ORIGINAL_IMG_BASE_URL + trendingContent?.backdrop_path}
          alt="Hero image"
          className="absolute top-0 left-0 w-full object-cover -z-50"
        />
        <div
          className="absolute top-0 left-0 w-full h-full bg-black/50"
          area-hidden="true"
        />
        <div className="absolute top-0 left-o w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32">
          <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute w-full h-full top-0 left-0 -z-10" />

          <div className="max-w-2xl">
            <h1 className="mt-4 text-6xl font-extrabold text-balance">
              Extraction
            </h1>
            <p className="mt-2 text-lg">2014 | 18+</p>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              obcaecati magni deserunt aperiam harum labore quasi, incidunt, qui
              sequi numquam doloremque officia, minus dolor eveniet laudantium
              distinctio maiores minima? Recusandae, nulla eaque!
            </p>
          </div>

          <div className="flex mt-8">
            <Link
              to="/watch/123"
              className="bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center"
            >
              <Play className="size-6 mr-2 fill-black" />
              Play
            </Link>
            <Link
              to="/watch/123"
              className="bg-slate-600 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center"
            >
              <Info className="size-6 mr-2" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
