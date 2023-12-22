import { CgMenuGridO } from "react-icons/cg";


import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import Menus from "./Menus";
import SearchBar from "../Shared/SearchBar";
import Logo from "../Shared/Logo";





const Body = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const scope = useMenuAnimation(isOpen);
    return (
        <div className="h-[100vh]  px-8 py-4">
            {/* leftmenus */}
            <nav className="flex gap-4 items-center justify-end">
                <a href='https://mail.google.com/mail/' target="_blank" className="text-xl " rel="noreferrer">Gmail</a>
                <a className="text-xl ">Images</a>
                <button onClick={() => setIsOpen(!isOpen)}><CgMenuGridO className="w-8 h-8" /></button>

                <div className="avatar">
                    <div className="w-12 rounded-full  ">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </nav>
            <div className={`${!isOpen && "hidden"} rounded-xl flex justify-end absolute right-10 bg-white py-4 px-4`}>
                <Menus />
            </div>

            {/* writing google  in the middele*/}
            <div className="max-w-xl mx-auto ">

                <Logo size={'9xl'}/>

                {/* search bar */}
                <SearchBar />

                {/* shortcut pannel*/}



                <div>
                    <div>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className=" bg-slate-300 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                            <AiOutlinePlus className="text-3xl" />
                        </button>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <form method="dialog" className="space-y-7">
                                    {/* if there is a button in form, it will close the modal */}
                                    <input type="text" placeholder="Name" className=" w-full outline-none border-b-2 border-emerald-900 bg-slate-300 rounded-tr-lg rounded-tl-lg px-4 py-2" />
                                    <input type="text" placeholder="URL" className=" w-full outline-none border-b-2 border-emerald-900 bg-slate-300 rounded-tr-lg rounded-tl-lg px-4 py-2" />
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}

                                        <button className="border-2 border-cyan-500 rounded-full px-2 py-1 mr-2">Cancel</button>
                                        <button className="border-2 border-cyan-500 rounded-full px-2 py-1 mr-2">Done</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>


            </div>
        </div>


    );
};

export default Body;