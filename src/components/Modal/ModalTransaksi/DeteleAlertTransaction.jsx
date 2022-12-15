import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "store/Feature/FeatureTransaction/transactionSlice";
import toast, { Toaster } from 'react-hot-toast';
import CloseIcon from '@mui/icons-material/Close';
import { checkbox } from "assets";

const DeleteAlertTransaction = ({ idTransaksi, setReload }) => {
    const dispatch = useDispatch();

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton:
                "focus:outline-none text-white bg-fifth hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2",
            cancelButton:
                "py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200",
        },
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
        .fire({
            title: "Are you sure?",
            text: "The selected record will be permanently deleted. Are you want to continue",
            showCancelButton: true,
            confirmButtonText: "Yes, Delete",
            cancelButtonText: "No, cancel",
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                try {
                    // console.log(idTransaksi);
                    dispatch(deleteTransaction(idTransaksi));
                    setReload();
                    Swal.fire(
                        {
                            icon: "success",
                            title: "Deleted!",
                            text: "Your data has been deleted.",
                            showConfirmButton: false,
                            timer: 1200
                        }
                    );
                    toast.custom((t) => (
                        <div
                            className={`${t.visible ? 'animate-enter ease-in-out duration-200' : 'animate-leave ease-in-out duration-200'
                                } max-w-md w-80 bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
                            <div className="flex-1 w-0 p-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 pt-0.5">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={checkbox}
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3 flex-col text-start">
                                        <p className="text-sm font-bold text-success">
                                            Success
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                            Successfully Deleted
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex border-gray-200">
                                <button
                                    onClick={() => toast.dismiss(t.id)}
                                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-slate-400 hover:text-slate-600 focus:outline-none"
                                >
                                    <CloseIcon />
                                </button>
                            </div>
                        </div>
                    ))
                    return result;
                } catch (error) {
                    return Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Delete is Failed ",
                    });
                }
            }
        });
};

export default DeleteAlertTransaction;
