import { useState } from "react";
import Logo from "../components/Logo";
import SearchBar from "../components/search-bar";
import useAuth from "../hooks/useAuth";
import UserModal from "./userModal";

const Navbar = ({ display, show }) => {
    let showSideBar = ''
    const { auth } = useAuth()
    if (!display) { showSideBar = 'none' }
    const [showProfile, setShowProfile] = useState(false)
    return (
        <div data-v-437cb320 className='py-2 px-6 z-10 top-0 sticky bg-background relative z-1000' style={{ borderBottomColor: 'var(--md-shade-mid)', borderBottomWidth: '1px', borderBottomStyle: 'solid' }}>
            <div data-v-437cb320 className="absolute w-full h-full top-0 left-0 bg-background border-primary" style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: 'var(--md-primary)', opacity: '0' }}></div>
            <div data-v-437cb320 className="nav-bar flex items-center sticky">
                {/* <!SidebarBtn> */}
                <button data-v-6b3fd699 data-v-437cb320 className="rounded relative md-btn flex items-center px-3 mr-2 justify-center rounded-full px-0" style={{ minHeight: '40px', minWidth: '40px', display: showSideBar }}>
                    <div onClick={show} data-v-6b3fd699 className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                    <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                        <svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="M3 12h12M3 6h18M3 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                </button>
                {/* <!-----> */}
                {/* <!Logo> */}
                <Logo display={showSideBar}></Logo>
                {/* <!-----> */}
                {/* <!Empty space> */}
                <div data-v-437cb320="" className="flex-grow"></div>
                {/* <!-----> */}
                {/* <!Search bar> */}
                {auth &&
                <div data-v-437cb320 className="nav-bar-search sm:flex items-center rounded-full hidden flex-grow cursor-pointer">
                    <SearchBar></SearchBar>
                </div>}
                {/* <!-----> */}
                {/* <!User icon> */}

                {(auth) &&
                    (<UserIcon show={setShowProfile}></UserIcon>)
                }
                <UserModal showProfile={showProfile} setShowProfile={setShowProfile} />
            </div>
        </div>
    )
}

const UserIcon = ({ show }) => {
    return (
        <div onClick={() => show(true)} className="flex flex-shrink-0 justify-end items-center">
            <button data-v-6b3fd699 data-v-437cb320 className="rounded relative md-btn flex items-center px-3 sm:hidden ml-auto justify-center px-0">
                <div data-v-6b3fd699 className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
            </button>
            <div className="bg-accent cursor-pointer flex items-center justify-center ml-4 overflow-hidden rounded-full" style={{ minHeight: '40px', minWidth: '40px' }}>
                <img data-v-437cb320 src="https://mangadex.org/avatar.png" alt="" style={{ width: '40px', height: '40px' }}></img>
            </div>
        </div>
    )
}

export default Navbar