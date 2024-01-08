const TopNav = () => {
  return (
    <div className="hidden md:block top-0 h-16 z-40 w-full bg-white border-b shadow-md">
      <div className="flex flex-wrap justify-between px-8 pt-4">
        <div className="flex flex-wrap gap-x-4 items-center justify-center -mt-2">
          <p className="text-md text-gray-700 font-semibold">Payments</p>
          <p className="text-xs text-gray-500 inline-flex">
            <img className="h-4 w-4 mr-1" src="images/question-mark.svg"/>
            How it works</p>
        </div>
        <div>
        <img className="absolute top-6 pl-3" src="/images/search-icon.svg"/>
          <input
            placeholder="Search features, tutorials, etc."
            className="bg-[#F2F2F2] h-10 rounded-md pl-8 pr-4 -mt-1" 
            style={{ width: "400px" }}
          />
            
        </div>
        <div className="flex cursor-pointer gap-x-4 items-center -mt-2">
          <img className="h-10 w-auto" src="/images/cta.svg"/>
          <img className="h-10 w-auto" src="/images/dropdown.svg"/>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
