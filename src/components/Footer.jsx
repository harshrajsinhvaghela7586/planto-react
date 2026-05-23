const Footer = () => {
  return (
    <footer className="mt-32 border-t border-white/10 bg-white/[0.03] backdrop-blur-2xl">

      <div className="px-5 sm:px-8 lg:px-14 py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-14">

        <div>

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-300 to-green-600"></div>

            <h2 className="text-white text-4xl sm:text-5xl font-bold">
              Planto.
            </h2>

          </div>

          <p className="text-gray-300 mt-8 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
          </p>

          <div className="flex gap-8 mt-10 text-white font-semibold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>

        </div>

        {/* Links */}
        <div>

          <h3 className="text-white text-3xl font-bold mb-8">
            Quick Links
          </h3>

          <ul className="space-y-5 text-gray-300">

            <li className="hover:text-white transition cursor-pointer">
              Home
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Plants Type
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Contact
            </li>

            <li className="hover:text-white transition cursor-pointer">
              Privacy
            </li>

          </ul>

        </div>

        {/* Subscribe */}
        <div className="xl:col-span-2">

          <h3 className="text-white text-3xl font-bold mb-8">
            For Every Updates
          </h3>

          <div className="flex flex-col sm:flex-row gap-5">

            <input
              type="text"
              placeholder="Enter Email..."
              className="flex-1 bg-transparent border border-white/20 rounded-full px-7 py-4 text-white outline-none"
            />

            <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300">
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10 py-7 text-center text-gray-400">
        Planto © All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;