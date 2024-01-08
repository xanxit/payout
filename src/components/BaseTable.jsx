import Table from "../data/Table.json";
import Pagination from "./Pagination";
const BaseTable = () => {
  const { TableHeaders, TableValues } = Table;
  return (
    <div className="flex flex-col gap-y-5 pt-8 pb-4 px-4 md:px-8">
      <h1 className="text-lg md:text-xl">Transactions | This Month</h1>
      <div className="flex flex-col justify-end gap-y-3">
        <div className="flex flex-row justify-between">
          <div>
            <img
              className="relative top-6 pl-2"
              src="/images/search-icon.svg"
            />
            <input
              placeholder="Search by order ID..."
              id="table-search"
              className="h-10 rounded-md pl-8 pr-4 -mt-1 shadow-sm"
            />
          </div>
          <div className="flex items-center gap-x-3 mt-2">
            <div className="flex items-center cursor-pointer border shadow-sm py-2 px-3 rounded flex-row text-sm gap-1 hover:bg-gray-50">
              <p>Sort </p>
              <img src="/images/sort-icon.svg" />
            </div>
            <div className="border shadow-sm p-2 rounded cursor-pointer hover:bg-gray-50">
              <img src="/images/download.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 bg-gray-50">
            <tr>
              {TableHeaders.map((data, idx) => (
                <th
                  key={idx}
                  scope="col"
                  className={`px-6 py-3 ${
                    idx > 1 ? "text-right" : "text-left"
                  }`}
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TableValues.map((data, idx) => (
              <tr
                key={idx}
                className="bg-white border-b text-left hover:bg-gray-50 "
              >
                <td className="px-6 py-4 whitespace-nowrap">{data.orderId}</td>
                {<td className="px-6 py-4">{data.orderDate}</td>}
                <td className="px-6 py-4 text-right">{data.amount}</td>
                <td className="px-6 py-4 text-right">{data.fees}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="w-full flex justify-center">
        <Pagination/>
        </div>
      </div>
    </div>
  );
};
export default BaseTable;
