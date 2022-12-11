import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { dataJakarta } from "store/dataJakarta";

const InputField = ({
  name,
  label,
  defaultValue,
  placeholder,
  onClick,
  onChange,
  className = "border-gray-400",
  type = "text",
  disabled,
  autoComplete = "off",
}) => (
  <div className="relative">
    <input
      type={type}
      id="floating_outlined"
      className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      disabled={disabled}
      autoComplete={autoComplete}
      onClick={onClick}
      defaultValue={defaultValue}
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    >
      {label}
    </label>
  </div>
);

const fasilitas_office = [
  "High Speed Wifi",
  "Avalible many charging slot",
  "Air Conditioner in all room",
  "Projector to presentation",
  "Free parking for your vehicle",
  "Snacks and drinks available",
  "Prayer room available",
  "Clean toilet with water heater",
  "Enter the room using the access card",
  "nice view from the window",
];

const AddOffice = () => {
  const [jakartaLits, setJakartaList] = useState(dataJakarta);
  const [citys, setCitys] = useState([]);

  const [city, setCity] = useState("Central Jakarta");
  // const [indexCity, setIndexCity] = useState();
  const [district, setDistrict] = useState([]);
  // const [city, setCity] = useState("");

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const [data, setData] = useState({
    office_id: "",
    full_name: "",
    type: "",
    price: 0,
    time: "",
    open: "",
    close: "",
    name: "",
    description: "",
    length: "",
    city: "",
    district: "",
    address: "",
    latitude: "",
    longitude: "",
    accommodate: "",
    working_desk: "",
    meeting_room: "",
    private_room: "",
  });

  const [imageUpload, setImageUpload] = useState([]);

  const [officeFacility, setOfficeFacility] = useState({
    facilities: [],
  });

  const handleChangeFacilities = (ev) => {
    // Destructuring gess
    const { value, checked } = ev.target;
    const { facilities } = officeFacility;

    console.log(`${value} is ${checked}`);

    if (checked) {
      setOfficeFacility({
        facilities: [...facilities, value],
      });
    } else {
      setOfficeFacility({
        facilities: facilities.filter((ev) => ev !== value),
      });
    }
  };

  const onImageUpload = (ev) => {
    const imageUpload = [];
    for (let i = 0; i < ev.target.files.length; i++) {
      imageUpload.push(ev.target.files[i]);
    }
    setImageUpload(imageUpload);
    console.log(imageUpload);
  };

  const handleChangeData = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSelectedRegion = (evt) => {
    const checked = evt.target.value;
    setCity(checked);
    console.log(checked);
    // const index = citys.findIndex((city) => +city === region);
    const index = citys.indexOf(checked);
    // setIndexCity(index);
    setDistrict(jakartaLits[index].district);
  };

  const handleSelectedCity = (evt) => {
    const checked = evt.target.value;
    setCity(checked);
    console.log(checked);
    // const index = citys.findIndex((city) => +city === region);
    const index = citys.indexOf(checked);
    // setIndexCity(index);
    setDistrict(jakartaLits[index].district);
  };

  const handleSelectedDistrict = (evt) => {
    const checked = evt.target.value;
    // setDistrict(checked)
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  // console.log(lat, lng);
  // console.log(data);
  console.log(data);
  // console.log(imageUpload.name);
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
                onChange={(ev) => handleChangeData(ev)}
              />
            </div>
            <div className="pb-6">
              <InputField
                name="full_name"
                label="Full Name"
                placeholder="Full Name"
                onChange={(ev) => handleChangeData(ev)}
              />
            </div>
            <div className="pb-6 flex-col text-start">
              <p className="pb-4">Select Type</p>
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    id="inline-radio"
                    type="radio"
                    value="Office"
                    onChange={(ev) => handleChangeData(ev)}
                    name="type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Office
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value="Coworking"
                    onChange={(ev) => handleChangeData(ev)}
                    name="type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-2-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Coworking
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    id="inline-checked-radio"
                    type="radio"
                    value="Meeting Room"
                    onChange={(ev) => handleChangeData(ev)}
                    name="type"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-checked-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Meeting Room
                  </label>
                </div>
              </div>
            </div>
            <div className="pb-6 flex w-full">
              <div className="w-full">
                <InputField
                  name="price"
                  type="number"
                  label="Price(Rp)"
                  placeholder="Price(Rp)"
                  onChange={(ev) => handleChangeData(ev)}
                />
              </div>
              <div className="flex mx-auto w-full ml-8">
                <div className="flex items-center mx-12">
                  <input
                    id="inline-radio"
                    type="radio"
                    value="month"
                    name="time"
                    onChange={(ev) => handleChangeData(ev)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    / month
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    value="month"
                    name="time"
                    onChange={(ev) => handleChangeData(ev)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="inline-2-radio"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    / month
                  </label>
                </div>
              </div>
            </div>
            <div className="w-full flex">
              <div className="pb-6 w-full">
                <InputField
                  name="open"
                  label="Open"
                  placeholder="Open"
                  type="time"
                  onChange={(ev) => handleChangeData(ev)}
                />
              </div>
              <div className="pb-6 w-full ml-8">
                <InputField
                  name="close"
                  label="Close"
                  placeholder="Close"
                  type="time"
                  onChange={(ev) => handleChangeData(ev)}
                />
              </div>
            </div>
            <div className="pb-6 w-full">
              <InputField
                name="length"
                label="Length"
                placeholder="Length"
                onChange={(ev) => handleChangeData(ev)}
              />
            </div>
            <div className="pb-6 w-full">
              <InputField
                name="description"
                label="Description"
                placeholder="Description"
                onChange={(ev) => handleChangeData(ev)}
              />
            </div>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-full">
                <select
                  id="city"
                  name="city"
                  onClick={(ev) => handleSelectedCity(ev)}
                  onChange={(ev) => handleChangeData(ev)}
                  className="border-2 py-3.5 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                >
                  {/* <option selected>Region</option> */}
                  {/* <option value={"DKI Jakarta"} id="regionIndex" selected>DKI Jakarta</option> */}
                  {jakartaLits.map((city, index) => {
                    return (
                      <option
                        value={city.city}
                        id="regionIndex"
                        key={index}
                        index={index}
                      >
                        {city.city}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="w-full ml-8">
                <select
                  id="district"
                  name="district"
                  onClick={(ev) => handleSelectedDistrict(ev)}
                  onChange={(ev) => handleChangeData(ev)}
                  className="border-2 py-3.5 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* <option selected>City</option> */}
                  {district.map((val, index) => {
                    return (
                      <option
                        value={val}
                        id="regionIndex"
                        key={index}
                        index={index}
                      >
                        {val}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="pb-6 w-full">
              <InputField
                name="address"
                label="Address"
                placeholder="Address"
                onChange={(ev) => handleChangeData(ev)}
              />
            </div>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-full">
                <InputField
                  name="latitude"
                  label="Latitude"
                  placeholder="Latitude"
                  onClick={getLocation}
                  defaultValue={lat}
                  onChange={(ev) => handleChangeData(ev)}
                />
              </div>
              <div className="w-full ml-8">
                <InputField
                  name="longitude"
                  label="Longitude"
                  placeholder="Longitude"
                  onClick={getLocation}
                  defaultValue={lng}
                  onChange={(ev) => handleChangeData(ev)}
                />
              </div>
            </div>
            <div className="flex items-center pb-6 justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  name="image"
                  onChange={(ev) => onImageUpload(ev)}
                  className="hidden"
                />
              </label>
            </div>
            <div className="w-full flex justify-between">
              <button
                type="reset"
                className="w-1/2 border-2 border-success rounded-lg text-success mr-8 hover:bg-success hover:text-white"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-1/2 bg-success text-white py-3 rounded-lg hover:bg-opacity-70"
              >
                Save
              </button>
            </div>
          </div>
          <div className="mx-2 ml-8 w-1/2">
            <p className="text-start mb-2 mt-4">Capacity</p>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-3/4">
                <InputField
                  name="accommodate"
                  label="Accommodate"
                  placeholder="Accommodate"
                  onChange={(ev) => handleChangeData(ev)}
                  type="number"
                />
              </div>
              <div className="w-1/4 ml-4">
                <InputField
                  name="person"
                  label="Person"
                  placeholder="Person"
                  disabled={true}
                  className="border-gray-200"
                />
              </div>
            </div>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-3/4">
                <InputField
                  name="working_desk"
                  label="Working Desk"
                  placeholder="Working Desk"
                  onChange={(ev) => handleChangeData(ev)}
                  type="number"
                />
              </div>
              <div className="w-1/4 ml-4">
                <InputField
                  name="desk"
                  label="Desk"
                  placeholder="Desk"
                  disabled={true}
                  className="border-gray-200"
                />
              </div>
            </div>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-3/4">
                <InputField
                  name="meeting_room"
                  label="Meeting Room"
                  placeholder="Meeting Room"
                  onChange={(ev) => handleChangeData(ev)}
                  type="number"
                />
              </div>
              <div className="w-1/4 ml-4">
                <InputField
                  name="room"
                  label="Room"
                  placeholder="Room"
                  disabled={true}
                  className="border-gray-200"
                />
              </div>
            </div>
            <div className="pb-6 w-full flex justify-between">
              <div className="w-3/4">
                <InputField
                  name="private_room"
                  label="Private Room"
                  placeholder="Private Room"
                  onChange={(ev) => handleChangeData(ev)}
                  type="number"
                />
              </div>
              <div className="w-1/4 ml-4">
                <InputField
                  name="room"
                  label="Room"
                  placeholder="Room"
                  className="border-gray-200"
                  disabled={true}
                />
              </div>
            </div>
            <p className="text-start mb-2">Facilities</p>
            {fasilitas_office.map((fasilitas, index) => {
              return (
                <div className="flex items-center mb-2" key={index}>
                  <input
                    onChange={handleChangeFacilities}
                    id="default-checkbox"
                    type="checkbox"
                    value={index}
                    name="facilities"
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                  >
                    {fasilitas}
                  </label>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
};

export default AddOffice;
