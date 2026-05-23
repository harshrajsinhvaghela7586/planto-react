import SectionTitle from "../components/SectionTitle";

const BestPlant = () => {
  return (
    <section className="px-5 sm:px-8 lg:px-14 py-28">

      <SectionTitle title="Our Best O2" />

      <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>

        <div className="relative z-10 grid lg:grid-cols-2 items-center gap-10">

          {/* Image */}
          <div className="flex justify-center">

            <img
              src="https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full max-w-[650px] object-cover"
            />

          </div>

          {/* Content */}
          <div className="px-6 lg:px-0 lg:pr-16 py-14">

            <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We Have Small And Best O2 Plants Collection's
            </h2>

            <p className="text-gray-300 mt-8 leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
            </p>

            <p className="text-gray-300 mt-6 leading-8 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>

            <button className="mt-10 border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
              Explore
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BestPlant;