import { Arrow } from "assets";
export default function THead() {
  return (
    <>
      <thead className="text-xs text-gray-500 bg-gray-50">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-secondary"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              ID
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-3">
            <div className="flex items-center">
              Full Name
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Type
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Date
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-6 text-center">
            <div className="flex items-center">
              Nominal(Rp)
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-6 text-center">
            <div className="flex items-center">
              Status
              <button>
                <img src={Arrow} alt="arrow" />
              </button>
            </div>
          </th>
          <th scope="col" className="py-3 px-6 text-center">
            Action
          </th>
        </tr>
      </thead>
    </>
  );
}
