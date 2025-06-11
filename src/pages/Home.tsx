import React from "react";

const Home = () => {
  // Black key positions matching the original HTML
  const blackKeyPositions = ["6.5%", "19.5%", "44.5%", "57.5%", "70.5%"];

  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-[1200px] mx-auto px-4 mt-4 pt-8">
        {" "}
        <h1 className="text-white font-extrabold text-[3.5rem] leading-[1.1] max-w-[700px] mb-10">
          Built By
          <br />
          Gaurav
        </h1>
        <section
          aria-label="Musical keyboard style abstract images with blue and pink neon colors"
          className="flex justify-center max-w-[700px] mx-auto rounded-[2rem] overflow-hidden select-none"
        >
          <div className="relative w-full max-w-[700px] h-[300px] rounded-[2rem] bg-gradient-to-b from-black via-gray-900 to-black">
            {/* White keys background */}
            <div className="flex w-full h-full rounded-[2rem] overflow-hidden">
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-b from-cyan-600 via-pink-500 to-cyan-600 shadow-[0_0_20px_#0ff,0_0_40px_#f0f]"
                  ></div>
                ))}
            </div>

            {/* Black keys */}
            <div className="absolute top-0 left-0 right-0 h-[60%] pointer-events-none">
              <div className="relative h-full w-full">
                {blackKeyPositions.map((position, index) => (
                  <div
                    key={index}
                    className="absolute top-0 w-[6%] h-full bg-gradient-to-b from-black via-gray-900 to-black rounded-b-lg shadow-[0_0_15px_#0ff,0_0_30px_#f0f] z-10"
                    style={{ left: position }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
