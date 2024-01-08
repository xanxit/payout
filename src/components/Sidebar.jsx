import SideBarData from "../data/SideNav.json";
import { useState } from "react";

const SideBar = () => {

  const [showNav , setShowNav] = useState(false)

  const toggleNav= ()=> {
    setShowNav(!showNav)
  }
  return (
    <>
      <button onClick={() => toggleNav()}
        type="button"
        className="inline-flex items-center z-10 p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden focus:ring-2 focus:ring-gray-200"
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        className={`fixed top-0 left-0 z-40 w-3/4 md:w-64 h-screen transition-transform text-white ease-in-out duration-300 md:block ${showNav ? 'block' : 'hidden'}`}
      >
        <div
          className="h-full px-3 py-4 flex flex-col overflow-y-auto"
          style={{ background: "#1E2640" }}
        >
          <a href="#" className="flex items-center gap-x-12 md:gap-x-3 px-1 mb-5">
            <img
              src="/images/NavImg.svg"
              className="h-10 me-3 w-auto"
              alt="Flowbite Logo"
            />
            <div className="self-center flex flex-col gap-1">
              <p style={{ fontSize: "15px" }}>Nishyan</p>
              <p
                style={{ fontSize: "13px" }}
                className="text-gray-300 underline hover:text-gray-200"
              >
                {" "}
                Visit Store
              </p>
            </div>
            <img className="justify-end lg:pl-12 rotate-90 md:rotate-0" src="/images/Chevron Down.svg" onClick={() => toggleNav()}/>
          </a>
          <ul className="space-y-1 my-6 relative">
            {SideBarData.listItems.map((data, idx) => (
              <li className="" key={idx}>
                <a
                  href="#"
                  className={`flex flex-row items-center lg:justify-start text-center lg:text-left p-2 gap-x-3 rounded-lg hover:bg-gray-700 group ${
                    data?.isActive && "bg-gray-600 text-white"
                  }`}
                >
                  <img className="h-5 w-5" src={data?.image} />
                  <span className="ms-3">{data?.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-end">
          <div
            className="bottom-0 fixed w-52 h-16 rounded my-2 p-4 mx-2 flex flex-row gap-x-4 items-center"
            style={{ background: "#353C53" }}
          >
            <img src="/images/balance.svg" className="h-10 w-auto" />
            <div className="flex flex-col gap-y-1">
              <p style={{ fontSize: "13px" }} className="text-gray-200">
                Available credits{" "}
              </p>
              <p
                style={{ fontSize: "16px" }}
                className="font-semibold text-gray-100"
              >
                222.10{" "}
              </p>
            </div>
          </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
