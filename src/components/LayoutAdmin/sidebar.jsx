import React, { useState } from "react";
import { admin, logo_black, discount, review, transaction, office } from "assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';

const SidebarAdmin = () => {
    const [toggle, setToggle] = useState(false);

    const HANDLETOGGLE = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    return (
        <div className={`${toggle ? "w-auto" : "w-32"} bg-white px-12`}>
            <div className="bg-white min-h-screen rounded-br-3xl rounded-tr-3xl">
                <div className="py-12 w-full" >
                    <div className="flex w-auto">
                        <img src={logo_black} className="w-12" alt="" />
                        <h4 className={`${toggle ? "visible" : "invisible"} w-full my-auto font-bold text-xl ml-3`}>BETTER SPACE</h4>
                    </div>
                    <div className="py-12">
                        <div>
                            <label class="flex">
                                <FontAwesomeIcon className="my-auto text-gray-500 pl-1 h-5" icon={faSearch} />
                                <input class={`${toggle ? "visible" : "invisible"} placeholder:text-slate-400 block w-full py-2 pl-12 pr-3 shadow-sm border-0 sm:text-lg focus:outline-none focus:ring-0`} placeholder="Search " type="text" name="search" />
                            </label>
                        </div>
                        <div className="absolute -right-4">
                            <button
                                onClick={HANDLETOGGLE}
                                className="px-4 py-2 bg-blue-500 w-auto rounded-full">
                                <FontAwesomeIcon className="my-auto mx-auto bg-blue-500 text-white h-4" icon={toggle ? faChevronLeft : faChevronRight} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col font-semibold text-gray-500 justify-start">
                            <Link className="flex py-4">
                                <GridViewIcon style={{ color: 'grey', fontSize: '32px' }} />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Dashboard</p>
                            </Link>
                            <Link className="flex py-4">
                                <ManageAccountsOutlinedIcon style={{ color: 'grey', fontSize: '32px' }} />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>User</p>
                            </Link>
                            <Link className="flex py-4">
                                <img src={office} className="h-8" alt="" />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Office</p>
                            </Link>
                            <Link className="flex py-4">
                                <img src={transaction} className="h-8" alt="" />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Transaction</p>
                            </Link>
                            <Link className="flex py-4">
                                <img src={review} className="h-8" alt="" />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Review</p>
                            </Link>
                            <Link className="flex py-4">
                                <img src={discount} className="h-8" alt="" />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Promo</p>
                            </Link>
                            <Link className="flex py-4">
                                <img src={admin} className="h-8" alt="" />
                                <p className={`${toggle ? "visible" : "invisible"} mx-8 my-auto text-lg`}>Admin</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarAdmin;