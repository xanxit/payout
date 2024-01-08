import HeaderData from "../data/HeaderData.json";

const Header = () => {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center pt-8 pb-4 px-4 md:px-8">
        <h1 className="text-lg md:text-xl">Overview</h1>
        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
            >
              Last Month
              <svg
                className="-mr-1 h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
        {HeaderData.headerData.map((data, idx) => (
          <div key={idx} className="bg-white h-32 w-auto shadow-lg rounded p-5">
            <h6 className="text-gray-500 mb-6">{data.title}</h6>
            <h1 className="text-black text-xl lg:text-[32px]">{data.number}</h1>
          </div>
        ))}
      </div>
    </>
  );
};
export default Header;
