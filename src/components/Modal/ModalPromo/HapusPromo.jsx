import { CloseOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const HapusPromo = () => {
    const [modal, setModal] = useState(false);
    const HandleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button
                href="#"
                onClick={HandleModal}
                type="button"
                data-modal-toggle="editUserModal"
                className=" px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-red-700 text-white"
            >
                <DeleteForeverIcon className="text-slate-500 hover:text-white" />
            </button>
            {
                modal && (
                    <div className="absolute inset-0 bg-black bg-opacity-30 z-20 h-screen w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
                        <div className="bg-white rounded-2xl px-20 py-12 w-2/5 absolute z-50 drop-shadow-4xl transform -translate-y-0 scale-90 transition-opacity transition-transform duration-300 center">
                            <div className="absolute">
                                <button onClick={HandleModal}>
                                    <CloseOutlined className="relative text-xl -top-6 left-[570px]" />
                                </button>
                            </div>
                            <div className="text-center pb-6">
                                <h1 className="text-2xl font-bold text-gray-600">Are You Sure ?</h1>
                                <p>The selected record will be permanently deleted. Are you sure you want to continue?</p>
                            </div>
                            <div className="w-full flex justify-between">
                                <button onClick={HandleModal} className="w-1/2 border-2 border-gray-400 rounded-lg text-gray-400 m-2 hover:bg-gray-400 hover:text-white">
                                    No, Cancel
                                </button>
                                <button type="submit" className="w-1/2 bg-red-600 m-2 text-white py-3 rounded-lg hover:bg-opacity-70">
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default HapusPromo;