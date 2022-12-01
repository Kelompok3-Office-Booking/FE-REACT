import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteAlertOffice from "./DeleteAlertOffice";


const DeleteOffice = ({
    idOffice,
    loading,
    setReload
}) => {
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
                    <DeleteAlertOffice idOffice={idOffice} loading={loading} setReload={setReload} />
                )
            }
        </>
    )
}

export default DeleteOffice;