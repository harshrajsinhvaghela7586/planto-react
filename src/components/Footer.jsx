const Footer = () => {
  return (
    <footer className="mt-24 border-t border-white/10 bg-white/5 backdrop-blur-xl">

      <div className="px-6 lg:px-14 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500"></div>

            <h2 className="text-white text-3xl font-bold">
              Planto.
            </h2>
          </div>

          <p className="text-gray-300 mt-6 leading-7">
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit,
            sed do eiusmod tempor incididunt.
          </p>

          <div className="flex gap-6 mt-8 text-white font-semibold">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>

        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-2xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li className="hover:text-white cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Plants Type
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Contact
            </li>

            <li className="hover:text-white cursor-pointer transition">
              Privacy
            </li>

          </ul>
        </div>

        {/* Update */}
        <div className="lg:col-span-2">

          <h3 className="text-white text-2xl font-semibold mb-6">
            For Every Updates
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">

            <input
              type="text"
              placeholder="Enter Email..."
              className="flex-1 bg-transparent border border-white/20 rounded-full px-6 py-4 text-white outline-none"
            />

            <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300">
              SUBSCRIBE
            </button>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-6 text-center text-gray-400">
        Planto © All Rights Reserved
      </div>

    </footer>
  );
};

export default Footer;