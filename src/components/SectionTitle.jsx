const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center mb-16">
      <h2 className="text-4xl font-bold text-white relative">
        {title}

        <span className="absolute -left-5 top-2 w-4 h-8 border-l-2 border-t-2 border-green-500 rounded-tl-lg"></span>

        <span className="absolute -right-5 top-2 w-4 h-8 border-r-2 border-t-2 border-green-500 rounded-tr-lg"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;