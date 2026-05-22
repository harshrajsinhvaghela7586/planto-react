import SectionTitle from "../components/SectionTitle";

const BestPlant = () => {
  return (
    <section className="px-6 lg:px-14 py-24">

      <SectionTitle title="Our Best O2" />

      <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 lg:p-16">

        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-green-500/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop"
              alt=""
              className="w-full max-w-[450px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>

            <h2 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-gray-300 mt-6 leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ut enim ad minim veniam.
            </p>

            <button className="mt-10 border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BestPlant;