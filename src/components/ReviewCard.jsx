const ReviewCard = ({ image, name }) => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 hover:bg-white/10 transition duration-300">

      <div className="flex items-center gap-4">

        <img
          src={image}
          alt=""
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="text-white text-xl font-semibold">
            {name}
          </h3>

          <p className="text-yellow-400">
            ★★★★★
          </p>
        </div>

      </div>

      <p className="text-gray-300 mt-6 leading-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut enim ad minim veniam.
      </p>

    </div>
  );
};

export default ReviewCard;