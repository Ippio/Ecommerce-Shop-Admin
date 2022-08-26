
import axios from "axios"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import "./style.css"
const UserModal = ({ showProfile, setShowProfile }) => {
    const {auth,setAuth} = useAuth()
    const display = (showProfile) ? ('') : 'none'
    const navigate = useNavigate()

    const logOut = async()=>{
        try{
            const response = await axios.get('http://localhost:5001/auth/logout')
            if(response){
                setAuth(null)
                console.log('log out')
                setShowProfile(false)
                navigate('/login',{replace:true})
            }
        }
        catch(err){}
    }
    return (
        auth &&
        <div className="md-modal self-flex-start justify-end" style={{ alignItems: 'flex-start', display: display }}>
            <div className="md-modal__shade no-blur">
            </div>
            <div className="md-modal__box" style={{ minWidth: '250px', maxWidth: '800px', maxHeight: 'calc((100% - 3rem) - 58px)', marginTop: '58px', marginRight: '16px' }}>
                <div className="profile__container bg-background">
                    <div>
                        {/* Close */}
                        <button onClick={()=>setShowProfile(false)} data-v-6b3fd699 className='rounded relative md-btn flex items-center px-3 ml-auto flex-shrink-0 justify-center  rounded-full px-0' style={{ minHeight: '32px', minWidth: '32px' }}>
                            <div data-v-6b3fd699="" class="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                            <span data-v-6b3fd699="" class="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="med text-currentColor icon"><path data-v-20f285ec="" d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
                        </button>
                        {/* Close */}
                        {/* UserSection */}
                        <div>
                            <div className="flex flex-col">
                                <span className="mx-auto">
                                    <div className="avatar">
                                        <img data-v-30b505b8="" alt="Avatar" width="1065" height="1065" src="https://mangadex.org/avatar.png" style={{ width: '64px', height: '64px' }} />
                                    </div>
                                </span>
                                <span className="avatar__text">{auth.user.username}</span>
                                <div className="role-tag mx-auto" style={{ backgroundColor: 'rgb(250, 250, 250)', color: ' rgb(0, 0, 0)' }}>
                                    {auth.user.role}
                                </div>
                            </div>
                        </div>
                        {/* UserSection */}
                        <hr className="my-6 border-black" />
                        {/* Logout */}
                        <button onClick={()=>logOut()} className="list__item">
                            <svg data-v-20f285ec="" data-v-6bf95648="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <span>Sign Out</span>
                        </button>
                        {/* Logout */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserModal