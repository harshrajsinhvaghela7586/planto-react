const ProductCard = ({ image, title, price }) => {
  return (
    <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition duration-500 hover:-translate-y-2 hover:bg-white/10">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[200px] bg-green-500/10 blur-[100px] rounded-full"></div>

      {/* Image */}
      <div className="relative z-10 flex justify-center">
        <img
          src={image}
          alt={title}
          className="h-[240px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-6">

        <h3 className="text-white text-3xl font-bold">
          {title}
        </h3>

        <p className="text-gray-300 mt-4 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className="flex items-center justify-between mt-8">

          <span className="text-white text-4xl font-bold">
            Rs. {price}/-
          </span>

          <button className="border border-white px-5 py-3 rounded-full text-white hover:bg-white hover:text-black transition duration-300">
            Buy
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;