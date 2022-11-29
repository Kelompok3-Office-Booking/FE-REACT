import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const InputField = ({ name, label, placeholder, onChange, className, type = "text", disabled, autoComplete = "off" }) => (
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
        />
        <label
            for="floating_outlined"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            {label}
        </label>
    </div>
);

const AddOffice = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-start px-8 py-4 w-full bg-white rounded-2xl shadow">
                    <Link to={"/admin-dashboard/office"}>
                        <ArrowLeftOutlined className="my-auto pr-4" />
                    </Link>
                    <h1 className="text-2xl font-bold my-auto">Add Office</h1>
                </div>
                <form className="bg-white rounded-2xl shadow w-full py-4 px-4 justify-between flex mt-8">
                    <div className="mx-2 mt-4 mb-4 w-1/2">
                        <div className="pb-6">
                            <InputField
                                name="office_id"
                                label="Office ID"
                                placeholder="Office ID"
                            />
                        </div>
                        <div className="pb-6">
                            <InputField
                                name="full_name"
                                label="Full Name"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="pb-6 flex-col text-start">
                            <p className="pb-4">Select Type</p>
                            <div className="flex">
                                <div class="flex items-center mr-4">
                                    <input id="inline-radio" type="radio" value="Office" name="type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Office</label>
                                </div>
                                <div class="flex items-center mr-4">
                                    <input id="inline-2-radio" type="radio" value="Coworking" name="type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Coworking</label>
                                </div>
                                <div class="flex items-center mr-4">
                                    <input id="inline-checked-radio" type="radio" value="Meeting Room" name="type" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="inline-checked-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Meeting Room</label>
                                </div>
                            </div>
                        </div>
                        <div className="pb-6 flex w-full">
                            <div className="w-full">
                                <InputField
                                    name="price"
                                    label="Price(Rp)"
                                    placeholder="Price(Rp)"
                                />
                            </div>
                            <div className="flex mx-auto w-full ml-8">
                                <div class="flex items-center mx-12">
                                    <input id="inline-radio" type="radio" value="Office" name="time" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="inline-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">/ hour</label>
                                </div>
                                <div class="flex items-center">
                                    <input id="inline-2-radio" type="radio" value="Coworking" name="time" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="inline-2-radio" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">/ month</label>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="pb-6 w-full">
                                <InputField
                                    name="address"
                                    label="Address"
                                    placeholder="Address"
                                    className="mb-6"
                                />
                                <InputField
                                    name="open"
                                    label="Open"
                                    placeholder="Open"
                                    type="time"
                                />
                            </div>
                            <div className="pb-6 w-full ml-8">
                                <InputField
                                    name="district"
                                    label="District"
                                    placeholder="District"
                                    className="mb-6"
                                />
                                <InputField
                                    name="close"
                                    label="Close"
                                    placeholder="Close"
                                    type="time"
                                />
                            </div>
                        </div>
                        <div className="pb-6 w-full">
                            <InputField
                                name="name"
                                label="Name"
                                placeholder="Name"
                            />
                        </div>
                        <div className="pb-6 w-full">
                            <InputField
                                name="description"
                                label="Description"
                                placeholder="Description"
                            />
                        </div>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-full">
                                <InputField
                                    name="city"
                                    label="City"
                                    placeholder="City"
                                    className=""
                                />
                            </div>
                            <div className="w-full ml-8">
                                <InputField
                                    name="district"
                                    label="District"
                                    placeholder="District"

                                />
                            </div>
                        </div>
                        <div className="pb-6 w-full">
                            <InputField
                                name="address"
                                label="Address"
                                placeholder="Address"
                            />
                        </div>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-full">
                                <InputField
                                    name="latitude"
                                    label="Latitude"
                                    placeholder="Latitude"
                                    className=""
                                />
                            </div>
                            <div className="w-full ml-8">
                                <InputField
                                    name="longitude"
                                    label="Longitude"
                                    placeholder="Longitude"
                                />
                            </div>
                        </div>
                        <div className="flex items-center pb-6 justify-center w-full">
                            <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className="w-full flex justify-between">
                            <button type="reset" className="w-1/2 border-2 border-success rounded-lg text-success mr-8 hover:bg-success hover:text-white">
                                Reset
                            </button>
                            <button type="submit" className="w-1/2 bg-success text-white py-3 rounded-lg hover:bg-opacity-70">
                                Save
                            </button>
                        </div>
                    </div>
                    <div className="mx-12 w-1/2">
                        <p className="text-start mb-2 mt-4">Capacity</p>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-3/4">
                                <InputField
                                    name="accommodate"
                                    label="Accommodate"
                                    placeholder="Accommodate"
                                    className=""
                                    disabled={false}
                                />
                            </div>
                            <div className="w-1/4 ml-4">
                                <InputField
                                    name="person"
                                    label="Person"
                                    placeholder="Person"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-3/4">
                                <InputField
                                    name="working_desk"
                                    label="Working Desk"
                                    placeholder="Working Desk"
                                    className=""
                                    disabled={false}
                                />
                            </div>
                            <div className="w-1/4 ml-4">
                                <InputField
                                    name="desk"
                                    label="Desk"
                                    placeholder="Desk"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-3/4">
                                <InputField
                                    name="meeting_room"
                                    label="Meeting Room"
                                    placeholder="Meeting Room"
                                    className=""
                                    disabled={false}
                                />
                            </div>
                            <div className="w-1/4 ml-4">
                                <InputField
                                    name="room"
                                    label="Room"
                                    placeholder="Room"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <div className="pb-6 w-full flex justify-between">
                            <div className="w-3/4">
                                <InputField
                                    name="private_room"
                                    label="Private Room"
                                    placeholder="Private Room"
                                    className=""
                                    disabled={false}
                                />
                            </div>
                            <div className="w-1/4 ml-4">
                                <InputField
                                    name="room"
                                    label="Room"
                                    placeholder="Room"
                                    disabled={true}
                                />
                            </div>
                        </div>
                        <p className="text-start mb-2">Facilities</p>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">High Speed Wifi</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Avalible many charging slot</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Air Conditioner in all room</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Projector to presentation</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Free parking for your vehicle</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Snacks and drinks available</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Prayer room available</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Clean toilet with water heater</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">Enter the room using the access card</label>
                        </div>
                        <div className="flex items-center mb-2">
                            <input id="default-checkbox" type="checkbox" value="" name="facilities" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="default-checkbox" className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300">nice view from the window</label>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddOffice;