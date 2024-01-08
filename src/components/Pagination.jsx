const Pagination = () => {
  const numbers = Array.from({ length: 11 }, (_, index) => index + 10);
  return (
    <div className="px-8 lg:px-0">
      <nav className="my-16 md:my-4">
        <ul className="flex px-10 lg:px-0 items-center md:gap-x-2 text-xs md:text-base h-10">
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700"
            >
              <img className="h-3 w-auto pr-2" src="/images/left.svg"/>
              Previous
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-8 w-auto leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-8 w-auto leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700"
            >
              ...
            </a>
          </li>
          {numbers.map((number, index) => (
            <li className={`${index>2 && 'hidden lg:block'}`} key={index}>
              <a
                href="#"
                aria-current="page"
                className={`flex items-center justify-center px-2 md:px-4 h-8 w-auto rounded-lg ${number===10 ? 'text-white bg-[#146EB4] hover:bg-[#146fb4ba] hover:text-white' : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'}`}
              >
                {number}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="flex items-center justify-center px-4 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 hover:text-gray-700"
            >
              Next
              <img className="h-3 w-auto pl-2" src="/images/right.svg"/>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Pagination;
