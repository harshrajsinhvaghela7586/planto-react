import { FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden text-white px-5 sm:px-8 lg:px-14 pt-10 lg:pt-16 pb-24 min-h-screen">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/10 blur-[180px] rounded-full"></div>

      {/* Background Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">

        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop"
          alt=""
          className="w-[900px] object-cover blur-sm"
        />

      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div className="max-w-2xl">

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05]">
            Breath <br />
            Natural
          </h1>

          <p className="text-gray-300 mt-8 text-base sm:text-lg leading-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-5 mt-10">

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Explore
            </button>

            <button className="flex items-center gap-4 group">

              <div className="w-14 h-14 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-300">
                <FiPlay />
              </div>

              <span className="text-gray-300">
                Live Demo
              </span>

            </button>

          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Review Card */}
          <div className="absolute -left-4 bottom-8 hidden xl:block z-20">

            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-[30px] p-5 w-[240px]">

              <div className="flex items-center gap-3">

                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />

                <div>

                  <h4 className="font-semibold">
                    Alina Patel
                  </h4>

                  <p className="text-yellow-400 text-sm">
                    ★★★★★
                  </p>

                </div>

              </div>

              <p className="text-sm text-gray-300 mt-4 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

            </div>

          </div>

          {/* Main Card */}
          <div className="w-full max-w-[380px] rounded-[40px] backdrop-blur-2xl bg-white/10 border border-white/20 p-6 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=900&auto=format&fit=crop"
              alt=""
              className="w-full h-[240px] sm:h-[300px] object-cover rounded-[30px]"
            />

            <div className="mt-6">

              <p className="text-gray-300 text-sm">
                Trendy House Plant
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold mt-3">
                Calathea Plant
              </h2>

              <button className="mt-6 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
                Buy Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;