import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { dataJakarta } from "store/dataJakarta";
import CreateIcon from "@mui/icons-material/Create";
import Swal from "sweetalert2";

const InputField = ({
  name,
  label,
  placeholder,
  defaultValue,
  onClick,
  onChange,
  className = "border-gray-400",
  type = "text",
  disabled,
}) => (
  <div className="relative">
    <input
      type={type}
      id="floating_outlined"
      className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-2 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
      placeholder={placeholder}
      name={name}
      onClick={onClick}
      defaultValue={defaultValue}
      onChange={onChange}
      disabled={disabled}
    />
    <label
      htmlFor="floating_outlined"
      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
    >
      {label}
    </label>
  </div>
);

const EditOffice = ({ dataDetailOffice }) => {
  const [jakartaLits, setJakartaList] = useState(dataJakarta);
  // const [prov, setProv] = useState([]);
  const [citys, setCitys] = useState([]);

  const [city, setCity] = useState("Central Jakarta");
  // const [indexCity, setIndexCity] = useState();
  const [district, setDistrict] = useState([]);

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const [data, setData] = useState({
    id: dataDetailOffice.id,
    title: dataDetailOffice.title,
    office_type: dataDetailOffice.office_type,
    price: dataDetailOffice.price,
    open_hour: dataDetailOffice.open_hour,
    close_hour: dataDetailOffice.close_hour,
    description: dataDetailOffice.description,
    office_length: dataDetailOffice.office_length,
    city: dataDetailOffice.city,
    district: dataDetailOffice.district,
    address: dataDetailOffice.address,
    time: dataDetailOffice.time,
    lat: dataDetailOffice.lat,
    lng: dataDetailOffice.lng,
    accomodate: dataDetailOffice.accomodate,
    working_desk: dataDetailOffice.working_desk,
    meeting_room: dataDetailOffice.meeting_room,
    private_room: dataDetailOffice.private_room,
    images: dataDetailOffice.images,
    facilities_id: dataDetailOffice.facilities_id,
    facilities_desc: dataDetailOffice.facilities_desc,
    distance: dataDetailOffice.distance,
    rate: dataDetailOffice.rate,
  });

  const [imageUpload, setImageUpload] = useState("");
  console.log(dataDetailOffice.facilities_id);
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
    const file = ev.target.files[0];
    setImageUpload(file);
  };

  const setHandleChangeData = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  useEffect(() => {
    setJakartaList(dataJakarta);
    const list = [];
    jakartaLits.map((city) => {
      return list.push(city.city);
    });
    setCitys(list);
    // Lock City
    setDistrict(jakartaLits[0].district);
  }, [dataJakarta]);

  const handleSelectedCity = (evt) => {
    const checked = evt.target.value;
    setCity(checked);
    // console.log(checked);
    const index = citys.indexOf(checked);
    // setIndexCity(index);
    setDistrict(jakartaLits[index].district);
  };

  const handleSelectedDistrict = (evt) => {
    const checked = evt.target.value;
    // setCity(checked)
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

  const [modal, setModal] = useState(false);
  const HandleModal = () => {
    setModal(!modal);
  };

  console.log(data);
  console.log(dataDetailOffice.office_type);
  return (
    <>
      <button
        type="button"
        onClick={HandleModal}
        data-modal-toggle="editUserModal"
        className="px-2 py-2 font-medium bg-slate-100 hover:underline rounded-lg hover:bg-blue-600"
      >
        <CreateIcon className="text-slate-500 hover:text-white" />
      </button>

      {modal && (
        <div className="flex flex-row bg-black bg-opacity-30 overflow-y-scroll fixed left-0 top-0 z-50 justify-center items-center p-4 pt-32 w-full md:inset-0">
          <div className="bg-white rounded-2xl px-20 py-12 mt-96 mb-12 w-3/4 z-50 drop-shadow-4xl transform -translate-y-0 scale-25 transition-opacity transition-transform duration-300 center">
            <div className="flex flex-col w-full">
              <div className="flex justify-between px-8 py-4 w-full bg-white rounded-2xl drop-shadow-4xl">
                {/* <div className="absolute">
                                    <button onClick={HandleModal}>
                                        <CloseOutlined className="relative text-xl -top-0 right-4" />
                                    </button>
                                </div> */}
                <h1 className="text-2xl text-gray-800 font-bold my-auto">
                  Edit Office
                </h1>
                <button
                  type="button"
                  onClick={HandleModal}
                  className="text-white bg-fifth hover:bg-red-400 font-medium rounded-full text-sm px-5 my-auto py-2.5 flex text-center"
                >
                  <p className="my-auto">Close</p>
                </button>
              </div>
              <form
                className="bg-white rounded-2xl drop-shadow-4xl w-full py-4 px-4 justify-between flex mt-8"
                key={dataDetailOffice.id}
              >
                <div className="mx-2 mt-4 mb-4 w-1/2">
                  <div className="pb-6">
                    <InputField
                      name="id"
                      label="Office ID"
                      placeholder="Office ID"
                      defaultValue={dataDetailOffice.id}
                      onChange={(ev) => setHandleChangeData(ev)}
                    />
                  </div>
                  <div className="pb-6">
                    <InputField
                      name="title"
                      label="Full Name"
                      placeholder="Full Name"
                      defaultValue={dataDetailOffice.title}
                      onChange={(ev) => setHandleChangeData(ev)}
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
                          name="office_type"
                          onChange={(ev) => setHandleChangeData(ev)}
                          defaultChecked={
                            dataDetailOffice.office_type === "Office"
                              ? true
                              : undefined
                          }
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
                          name="office_type"
                          onChange={(ev) => setHandleChangeData(ev)}
                          defaultChecked={
                            dataDetailOffice.office_type === "Coworking Space"
                              ? true
                              : undefined
                          }
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
                          name="office_type"
                          onChange={(ev) => setHandleChangeData(ev)}
                          defaultChecked={
                            dataDetailOffice.office_type === "Meeting Room"
                              ? true
                              : undefined
                          }
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
                        label="Price(Rp)"
                        placeholder="Price(Rp)"
                        defaultValue={dataDetailOffice.price}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                    <div className="flex mx-auto w-full ml-8">
                      <div className="flex items-center mx-8">
                        <input
                          id="inline-radio"
                          type="radio"
                          value="hour"
                          name="time"
                          onChange={() => {}}
                          checked={
                            dataDetailOffice.time === "Hour" ? true : false
                          }
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="inline-radio"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          / hour
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="inline-2-radio"
                          type="radio"
                          value="month"
                          name="time"
                          onChange={() => {}}
                          checked={
                            dataDetailOffice.time === "Month" ? true : false
                          }
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
                        name="open_hour"
                        label="open_hour"
                        placeholder="open_hour"
                        type="time"
                        defaultValue={dataDetailOffice.open_hour}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                    <div className="pb-6 w-full ml-8">
                      <InputField
                        name="close_hour"
                        label="Close"
                        placeholder="Close"
                        type="time"
                        defaultValue={dataDetailOffice.close_hour}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                  </div>
                  <div className="pb-6 w-full">
                    <InputField
                      name="length_office"
                      label="Length Office / M2"
                      placeholder="Length Office / M2"
                      defaultValue={dataDetailOffice.office_length}
                      onChange={(ev) => setHandleChangeData(ev)}
                    />
                  </div>
                  <div className="pb-6 w-full">
                    <InputField
                      name="description"
                      label="Description"
                      placeholder="Description"
                      defaultValue={dataDetailOffice.description}
                      onChange={(ev) => setHandleChangeData(ev)}
                    />
                  </div>
                  <div className="pb-6 w-full flex justify-between">
                    <div className="w-full">
                      <select
                        id="city"
                        onChange={(ev) => handleSelectedCity(ev)}
                        defaultValue={dataDetailOffice.city}
                        className="border-2 py-3.5 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        {/* <option selected>Region</option> */}
                        {/* <option value={"DKI Jakarta"} id="regionIndex" selected>DKI Jakarta</option> */}
                        {jakartaLits.map((city, index) => {
                          return (
                            <option
                              value={city.city}
                              key={index}
                              id="regionIndex"
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
                        id="city"
                        onChange={(ev) => handleSelectedDistrict(ev)}
                        defaultValue={dataDetailOffice.district}
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
                      defaultValue={dataDetailOffice.address}
                      onChange={(ev) => setHandleChangeData(ev)}
                    />
                  </div>
                  <div className="pb-6 w-full flex justify-between">
                    <div className="w-full">
                      <InputField
                        name="lat"
                        label="Latitude"
                        placeholder="Latitude"
                        onClick={getLocation}
                        defaultValue={dataDetailOffice.lat}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                    <div className="w-full ml-8">
                      <InputField
                        name="lng"
                        label="Longitude"
                        placeholder="Longitude"
                        onClick={getLocation}
                        defaultValue={dataDetailOffice.lng}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                  </div>
                  <div className="flex items-center pb-6 justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="gap-6">
                        <div className="flex justify-between py-2">
                          <img
                            src={dataDetailOffice.images[0]}
                            alt="image1"
                            className="max-w-[90px] max-h-[90px] mx-2 rounded-md"
                          />
                          <img
                            src={dataDetailOffice.images[1]}
                            alt="image2"
                            className="max-w-[90px] max-h-[90px] mx-2 rounded-md"
                          />
                          <img
                            src={dataDetailOffice.images[2]}
                            alt="image3"
                            className="max-w-[90px] max-h-[90px] mx-2 rounded-md"
                          />
                          <img
                            src={dataDetailOffice.images[3]}
                            alt="image3"
                            className="max-w-[90px] max-h-[90px] mx-2 rounded-md"
                          />
                        </div>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        onChange={(ev) => onImageUpload(ev)}
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
                <div className="mx-12 w-1/2">
                  <p className="text-start mb-2 mt-4">Capacity</p>
                  <div className="pb-6 w-full flex justify-between">
                    <div className="w-3/4">
                      <InputField
                        name="accommodate"
                        label="Accommodate"
                        placeholder="Accommodate"
                        defaultValue={dataDetailOffice.accommodate}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                    <div className="w-1/4 ml-4">
                      <InputField
                        name="person"
                        label="Person"
                        placeholder="Person"
                        className="border-gray-200"
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
                        defaultValue={dataDetailOffice.working_desk}
                        onChange={(ev) => setHandleChangeData(ev)}
                      />
                    </div>
                    <div className="w-1/4 ml-4">
                      <InputField
                        name="desk"
                        label="Desk"
                        placeholder="Desk"
                        className="border-gray-200"
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
                        defaultValue={dataDetailOffice.meeting_room}
                        onChange={(ev) => setHandleChangeData(ev)}
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
                  <div className="pb-6 w-full flex justify-between">
                    <div className="w-3/4">
                      <InputField
                        name="private_room"
                        label="Private Room"
                        placeholder="Private Room"
                        onChange={(ev) => setHandleChangeData(ev)}
                        defaultValue={dataDetailOffice.private_room}
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
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[0] === "1"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="1"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      High Speed Wifi
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[1] === "2"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="2"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Avalible many charging slot
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[2] === "3"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="3"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Air Conditioner in all room
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[3] === "4"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="4"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Projector to presentation
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[4] === "5"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="5"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Free parking htmlFor your vehicle
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[5] === "6"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="6"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Snacks and drinks available
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[6] === "7"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="7"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Prayer room available
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[7] === "8"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="8"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Clean toilet with water heater
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[8] === "9"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="9"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      Enter the room using the access card
                    </label>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      defaultChecked={
                        dataDetailOffice.facilities_id[9] === "10"
                          ? true
                          : undefined
                      }
                      onChange={handleChangeFacilities}
                      id="default-checkbox"
                      type="checkbox"
                      value="10"
                      name="facilities"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-400 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-checkbox"
                      className="ml-8 border-2 pl-3 py-3 w-full text-start border-gray-400 rounded-lg text-sm font-normal text-gray-900 dark:text-gray-300"
                    >
                      nice view from the window
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EditOffice;
