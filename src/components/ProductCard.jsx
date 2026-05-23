const ProductCard = ({ image, title, price }) => {
  return (
    <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[240px] bg-green-500/10 blur-[120px] rounded-full"></div>

      {/* Image */}
      <div className="relative z-10 flex justify-center items-center h-[240px]">

        <img
          src={image}
          alt={title}
          className="max-h-[220px] object-contain transition duration-500 group-hover:scale-110 drop-shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
        />

      </div>

      {/* Content */}
      <div className="relative z-10 mt-4">

        <h3 className="text-white text-3xl sm:text-4xl font-bold">
          {title}
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex items-center justify-between mt-8">

          <span className="text-white text-3xl sm:text-4xl font-bold">
            Rs. {price}/-
          </span>

          <button className="w-[85px] h-[50px] rounded-full border border-white hover:bg-white hover:text-black transition duration-300">
            Buy
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;