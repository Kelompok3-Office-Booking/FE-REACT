import AddPromo from "components/Modal/ModalPromo/AddPromo";
import EditPromo from "components/Modal/ModalPromo/EditPromo";
import React, { useEffect } from "react";
import { Arrow } from "assets";
import DeleteAllData from "components/Alert/deleteAllData";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import HapusPromo from "components/Modal/ModalPromo/HapusPromo";
import { useDispatch, useSelector } from "react-redux";
import { fetchPromo } from "store/Feature/FeaturePromo/promoSlice";
import DeleteAlert from "components/Alert/deleteAlert";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PromoPage = () => {

    const dispatch = useDispatch();
    const listOfPromo = useSelector((state) => state.promo.data);
    console.log(listOfPromo);

    useEffect(() => {
        dispatch(fetchPromo());
    }, [dispatch])

    const HANDLEDELETE = () => {
        DeleteAlert();
    };
    const HANDLEDELETEALL = () => {
        DeleteAllData();
    };

    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-between px-8 py-4 w-full bg-white rounded-2xl shadow">
                    <h1 className="text-3xl font-bold my-auto">Voucher Promo</h1>
                    <div className="flex content-center pl-12 rounded-xl text-lg py-2">
                        <AddPromo />
                    </div>
                </div>
                <div className="mt-4 z-10">
                    <div className="overflow-x-auto relative shadow-md sm:rounded-2xl">
                        <div className="flex justify-between items-center py-4 bg-white px-4">
                            <div className="flex">
                                <h1 className="inline pr-4 text-base my-auto text-neutral-500">
                                    (7) Record Found
                                </h1>
                                <button
                                    type="button"
                                    onClick={''}
                                    className="text-white bg-fifth hover:bg-red-400 font-medium rounded-full text-sm px-5 py-2.5 flex text-center mr-2 mb-2"
                                >
                                    <DeleteForeverIcon className="text-white" />
                                    <p className="my-auto">Delete Selected</p>
                                </button>
                            </div>
                            <label htmlFor="table-search" className="sr-only">
                                Search
                            </label>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg
                                        className="w-5 h-5 text-gray-500 "
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="table-search-users"
                                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Search for users"
                                />
                            </div>
                        </div>
                        <table className="w-full text-sm text-left text-gray-500 ">
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
                                        <div className="flex justify-center">
                                            <p className="my-auto">Voucher Code</p>
                                            <button>
                                                <img src={Arrow} alt="arrow" />
                                            </button>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-3">
                                        <div className="flex justify-center">
                                            <p className="my-auto">Periode</p>
                                            <button>
                                                <img src={Arrow} alt="arrow" />
                                            </button>
                                        </div>
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        <div className="flex justify-center">
                                            <p className="my-auto">Nominal</p>
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
                            <tbody>
                                {listOfPromo?.map((promo) => (
                                    <tr
                                        className="bg-white border-b hover:bg-gray-50"
                                        key={promo.id}
                                    >
                                        <td className="p-4 w-4">
                                            <div className="flex items-center">
                                                <input
                                                    id="checkbox-table-search-1"
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                                                />
                                                <label
                                                    htmlFor="checkbox-table-search-1"
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6 text-center">{promo.voucher_code}</td>
                                        <td className="py-4 px-6 text-center">{promo.periode}</td>
                                        <td className="py-4 px-6 text-center">{promo.nominal} %</td>
                                        <td className="py-4 px-6 flex gap-2 items-center justify-center">
                                            {/* Modal toggle */}
                                            <button
                                                href="#"
                                                type="button"
                                                data-modal-toggle="editUserModal"
                                                className=" px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-blue-600"
                                            >
                                                <RemoveRedEyeIcon className="text-slate-500 hover:text-white" />
                                            </button>
                                            <HapusPromo />
                                            <EditPromo />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromoPage;