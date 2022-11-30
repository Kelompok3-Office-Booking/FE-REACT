import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const InputField = ({ name, defaultValue, label, placeholder, onChange, className, type = "text", disabled, autoComplete = "off" }) => (
    <div className="relative">
        <input
            type={type}
            id="floating_outlined"
            className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            disabled={disabled}
            autoComplete={autoComplete}
            defaultValue={defaultValue}
        />
        <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            {label}
        </label>
    </div>
);

const ViewOffice = () => {
    const [modal, setModal] = useState(false);
    const HandleModal = () => {
        setModal(!modal);
    }

    return (
        <>
            <button
                onClick={HandleModal}
                href="#"
                type="button"
                data-modal-toggle="editUserModal"
                className=" p-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-blue-600">
                <RemoveRedEyeIcon className="text-slate-500 hover:text-white" />
            </button>

            {/* Modal View */}
            {
                modal && (
                    <div className={` transition-transform absolute`}>
                        <div
                            id="extralarge-modal"
                            tabIndex={-1}
                            className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50  mr-0 md:h-full transition duration-300">
                            <div className="relative w-full max-w-lg h-full md:h-auto">
                                {/* Modal content */}
                                <form
                                    onSubmit={() => { }}
                                    className="relative bg-white rounded-tl-3xl rounded-bl-3xl shadow "
                                >
                                    {/* Modal header */}
                                    <div className="p-3 mt-1 absolute rounded-t">
                                        <button
                                            onClick={HandleModal}
                                            type="button"
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ease-in-out delay-100"
                                            data-modal-toggle="editUserModal"
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="py-8 px-6 space-y-2">
                                        <div className="px-6 lg:px-8 space-y-4">
                                            <h3 className="mb-4 text-xl text-start font-medium text-gray-900 ">
                                                Detail Office
                                            </h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                <InputField
                                                    name="office_id"
                                                    label="Office ID"
                                                    placeholder="Office ID"
                                                    disabled={true}
                                                    defaultValue={"UIOIS"}
                                                />
                                                <InputField
                                                    name="type"
                                                    label="Type"
                                                    placeholder="Type"
                                                    disabled={true}
                                                    defaultValue={"HAHAHA"}
                                                />

                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="type"
                                                        label="Type"
                                                        placeholder="Type"
                                                        disabled={true}
                                                        defaultValue={"Ini adalah namamu"}
                                                    />
                                                </div>

                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="price"
                                                        label={`Price / ${"hour"}`}
                                                        placeholder="Type"
                                                        disabled={true}
                                                        defaultValue={`Rp. ${20000}`}
                                                    />
                                                </div>
                                                <InputField
                                                    name="address"
                                                    label="Address"
                                                    placeholder="Address"
                                                    disabled={true}
                                                    defaultValue={"Address nya disini ya"}
                                                />
                                                <InputField
                                                    name="district"
                                                    label="District"
                                                    placeholder="District"
                                                    disabled={true}
                                                    defaultValue={"Lokasi mu"}
                                                />
                                                <InputField
                                                    name="open"
                                                    label="Open"
                                                    type="time"
                                                    placeholder="Open"
                                                    disabled={true}
                                                    defaultValue={`2022 - 12 - 01`}
                                                />
                                                <InputField
                                                    name="close"
                                                    label="Close"
                                                    type="close"
                                                    placeholder="Close"
                                                    disabled={true}
                                                    defaultValue={`2022 - 12 - 01`}
                                                />
                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="district"
                                                        label="District"
                                                        className="h-24"
                                                        placeholder="District"
                                                        disabled={true}
                                                        defaultValue={"Description from this office mu"}
                                                    />
                                                </div>
                                                <InputField
                                                    name="capacity"
                                                    label="Capacity"
                                                    placeholder="Capacity"
                                                    disabled={true}
                                                    defaultValue={"120 Person"}
                                                />
                                                <InputField
                                                    name="meeting_room"
                                                    label="Meeting Room"
                                                    placeholder="Meeting Room"
                                                    disabled={true}
                                                    defaultValue={"12 room"}
                                                />
                                                <InputField
                                                    name="private_room"
                                                    label="Private Room"
                                                    placeholder="Private Room"
                                                    disabled={true}
                                                    defaultValue={"8 room"}
                                                />
                                                <InputField
                                                    name="working_desk"
                                                    label="Working Desk"
                                                    placeholder="Working Desk"
                                                    disabled={true}
                                                    defaultValue={"50 desk"}
                                                />
                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="facilities"
                                                        label="Facilities"
                                                        placeholder="Facilities"
                                                        disabled={true}
                                                        defaultValue={"10 Facilities"}
                                                    />
                                                    <p className="pt-2 text-start">{`detail fasilitas disini njir`}</p>
                                                </div>
                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="address"
                                                        label="Address"
                                                        placeholder="Address"
                                                        disabled={true}
                                                        defaultValue={"Jl. Jendral Sudirma No. 58, Kebayoran baru, South Jakarta  "}
                                                    />
                                                </div>
                                                <InputField
                                                    name="latitude"
                                                    label="Latitude"
                                                    placeholder="Latitude"
                                                    disabled={true}
                                                    defaultValue={"-6.275939871233736"}
                                                />
                                                <InputField
                                                    name="longitude"
                                                    label="Longitude"
                                                    placeholder="Longitude"
                                                    disabled={true}
                                                    defaultValue={"106.82135462293893"}
                                                />
                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="length_room"
                                                        label="Length Room"
                                                        placeholder="Length Room"
                                                        disabled={true}
                                                        defaultValue={"30m2"}
                                                    />
                                                </div>
                                                <div className="col-span-2 relative">
                                                    <InputField
                                                        name="total_booked"
                                                        label="Total Booked"
                                                        placeholder="Total Booked"
                                                        disabled={true}
                                                        defaultValue={"30m2"}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="flex items-center justify-center w-full">
                                                    <label for="dropzone-file" class="flex flex-wrap items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                        <div>
                                                            <img src="" alt="" />
                                                            nanti gambar di load disini
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>

                                            {/* Modal footer */}
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    onClick={HandleModal}
                                                    className="w-full flex justify-center py-2 px-5 mb-2 text-sm font-medium text-gray-400 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-success hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-200">
                                                    <CloseOutlined className="text-lg mb-1 mr-2" />
                                                    <p className="my-auto">Close</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default ViewOffice;