const TopNav = () => {
  return (
    <div className="top-0 h-16 z-40 w-full bg-white border-b border-solid border-[#D9D9D9]">
      <div className="flex flex-wrap justify-between px-8 pt-4">
        <div className="flex flex-wrap gap-x-4 items-center justify-center -mt-2">
          <p className="text-md text-gray-700 font-semibold">Payments</p>
          <p className="text-xs hidden text-gray-500 lg:inline-flex">
            <img className="h-4 w-4 mr-1" src="images/question-mark.svg" />
            How it works
          </p>
        </div>
        <div>
          <img
            className="absolute hidden md:block top-6 md:pl-3"
            src="/images/search-icon.svg"
          />
          <input
            placeholder="Search features, tutorials, etc."
            className="bg-[#F2F2F2] h-10 rounded-md pl-4 md:pl-8 pr-4 -mt-1  w-[180px] lg:w-[400px]"
          />
        </div>
        <div className="md:flex hidden cursor-pointer gap-x-4 items-center -mt-2">
          <img className="h-10 w-auto" src="/images/cta.svg" />
          <img className="h-10 w-auto" src="/images/dropdown.svg" />
        </div>
      </div>
    </div>
  );
};
export default TopNav;
