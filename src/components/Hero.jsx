import { FiPlay } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative text-white px-6 lg:px-14 pt-10 pb-24 overflow-hidden min-h-screen">

      {/* Background Blur Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-700/20 blur-[150px] rounded-full"></div>

      {/* Background Plant Image */}
      <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop"
          alt="plant"
          className="w-[700px] object-cover blur-sm"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Breath <br /> Natural
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6 mt-10 flex-wrap">

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

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">

          {/* Floating Review Card */}
          <div className="absolute left-0 bottom-10 hidden lg:block z-20">

            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-4 w-[220px] shadow-2xl">

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

          {/* Main Glass Card */}
          <div className="w-full max-w-[360px] rounded-[40px] backdrop-blur-xl bg-white/10 border border-white/20 p-6 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop"
              alt=""
              className="w-full h-[260px] object-cover rounded-[30px]"
            />

            <div className="mt-6">

              <p className="text-gray-300 text-sm">
                Trendy House Plant
              </p>

              <h2 className="text-4xl font-semibold mt-3">
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