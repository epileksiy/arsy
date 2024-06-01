import React from "react";
import logo from '../logo.svg';
import login from '../login.svg';
import {Link} from "react-router-dom";

export default function Navbar() {
    // const [mininav,setMininav] = useState(false);

    // const goMininav = () => {
    //     if(!mininav){
    //         setMininav(true);
    //     }else{
    //         setMininav(false);
    //     }
    // }
    return(
        <nav className="nav fixed z-10 w-full h-auto px-2 sm:px-4 py-2.5 rounded-bl-xl rounded-br-xl dark:bg-gray-900 border-b-2 border-zinc-400">
            <div className="container flex flex-wrap items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-6 mr-3 sm:h-14" alt="ARSY logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">ARSY</span>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto ml-5" id="navbar-default">
                    <div className="flex w-full p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <div className="w-full flex flex-row">
                        <div className="flex flex-row ml-10">
                            <Link to="/models" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold">[models]</Link>
                            <Link to="/faq" className="ml-4 block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-bold">[faq]</Link>
                        </div>
                        <div className="flex flex-row right-0 absolute mr-10">
                            <Link to="/onwork" className="flex flex-row items-center mr-4 py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"><img src={login} className="h-6 mr-3 sm:h-5" alt="login ico" /> Log in</Link>
                            <Link to="/onwork" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-slate-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">Sign in</Link>
                        </div>
                    </div>
                    </div>
                </div>
                {/* {mininav ? (
                    <div className="h-10 w-full">
                        <div className="flex flex-row p-3 font-semibold">
                            <Link to='/models'><p >[models]</p></Link>
                            <Link to='/faq'><p className="ml-4">[faq]</p></Link>
                        </div>
                    </div>
                ):(<div className="hidden"></div>)} */}

                    <div className="md:hidden h-10 w-full">
                        <div className="flex flex-row p-3 font-semibold">
                            <Link to='/models'><p >[models]</p></Link>
                            <Link to='/faq'><p className="ml-4">[faq]</p></Link>
                        </div>
                    </div>

            </div>
        </nav>
    );
}