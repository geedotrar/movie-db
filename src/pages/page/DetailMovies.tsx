import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiYoutubeLine } from "react-icons/ri";

export default function DetailMovies(props: any) {
  // let findData = props.data.find((dt: any) => dt.id === props.id);
  // const date = new Date(findData.release_date).toLocaleDateString("en-GB");
  // console.log(findData);
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    let findData = props.data.find((dt: any) => dt.id === props.id);

    setMovieData(findData);
  }, [props.data, props.id]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const date = new Date(movieData.release_date).toLocaleDateString("en-GB");

  return (
    <div>
      {movieData && (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-2xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="border-b border-solid border-slate rounded-t px-5">
                <div className="grid grid-flow-col justify-stretch ">
                  <div className="flex items-center">
                    <h3 className="text-3xl font-semibold">{movieData.title}</h3>
                    (⭐{movieData.vote_average})
                  </div>
                  <p grid-flow-col="true" justify-stretch="true" className="flex justify-end">
                    <span onClick={() => props.setDisplay(false)} className="flex justify-end text-black text-4xl pl-4 cursor-pointer ">
                      ×
                    </span>
                  </p>
                </div>
                <div>
                  <p>
                    Release date: <span className="text-red-500">{date}</span>
                  </p>
                </div>
              </div>
              <div className="p-6">
                <div>
                  <img src={`${process.env.NEXT_PUBLIC_IMG_PATH}/${movieData.poster_path}`} alt="Popular-Movies" className="h-52 float-left pr-4" />
                  <p className="text-slate-500 text-lg leading-relaxed text-justify">{movieData.overview}</p>
                </div>
              </div>
              <div className="flex items-center justify-center px-5 py-2 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-red-500 text-white active:bg-red-800 font-bold uppercase text-sm px-20 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  <Link href={`/page/${movieData.id}`}>
                    <span className="flex items-center ">
                      <RiYoutubeLine size={30} />
                      WATCH THE TRAILER
                    </span>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
