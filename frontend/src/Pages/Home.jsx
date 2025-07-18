import React, { useState } from "react";
import animeVideo from "../assets/animeVideo.mp4";
function Home() {
  const [start, setStart] = useState(false);
  return (
    <div className="grid grid-cols-2 w-full">
      <div className="left flex-col flex items-center justify-center">
        <p className="font-bold text-4xl">
          <span className="text-5xl">F</span>ace{" "}
          <span className="text-5xl">R</span>ecogonization
        </p>

        <p className="text-2xl m-12 hyphens-auto">
          Here you can able to Recgonize the Face with the Basic operation
        </p>
        <button
          onClick={() => setStart((pre) => !pre)}
          className="rounded-2xl bg-neutral-300 px-8 py-4 group text-neutral-700 transition-all duration-300 ease-in-out cursor-pointer active:scale-90 shadow shadow-gray-200"
        >
          <p className="duration-1000 ease-in-out transition-all animate-bounce group-hover:animate-none delay-150">
            {start ? "Started! -->" : "Lets Go! -->"}
          </p>
        </button>
      </div>
      <div className="right flex-col flex items-center justify-center">
        {start ? (
          <>
            {/* <img src="" alt="img will Loaded" /> */}
            <img
              className="rounded-xl shadow-md shadow-neutral-500 w-4/5"
              // src="https://img.freepik.com/free-photo/anime-style-house-architecture_23-2151064885.jpg?ga=GA1.1.556464942.1752728515&semt=ais_hybrid&w=740"
              src="http://127.0.0.1:8000/video"
              alt="img will Load"
            />
          </>
        ) : (
          <div className=" ">
            <div className="group w-4/5 relative transition-all ease-in-out duration-500">
              <video
                className="rounded-xl shadow-md shadow-neutral-500 group-hover:blur-xs"
                loop
                autoPlay
                muted
              >
                <source src={animeVideo} type="video/mp4" />
              </video>
              <p className="group-hover:flex text-2xl text-justify p-4 absolute top-0 w-full items-center justify-center hidden h-full bg-black/20">
                Click lets go to perform the face finder operation to find the number of face in the webcam
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
