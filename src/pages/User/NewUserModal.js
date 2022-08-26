import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../user-page"
import SelectBox from "./SelectBox2"

const NewUserModal = () => {
    const { state, setState } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const display = ''
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setState({ ...state, user: { ...state.user, [name]: value } })
    }
    const closeModel = () => {
        setState({ ...state, user: null, addUser: false })
    }
    const submit = async () => {
        if(!loading){
            try {
                const newUser = await axios.post('http://localhost:5001/auth/register',state.user)
                if (newUser) {
                setLoading(false)
                setState({ ...state, user: null, addUser: false,refreshTimes: state.refreshTimes+1 })
            }
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        setLoading(true)
    }
    return (
        <div data-v-5bbf12c8 data-v-7c7abafc className="md-modal self-center justify-center flex-wrap" style={{ alignItems: 'center', display: display }}>
            <div data-v-5bbf12c8 data-v-b48205a2 className="md-modal__shade no-blur"></div>
            <div data-v-5bbf12c8 data-v-3ad5e20a className="md-modal__box flex-grow" style={{ maxWidth: 'calc(480px - 3rem)', maxHeight: 'calc(100% - 3rem)' }}>
                {/* <!----> */}
                <div data-v-7c7abafc className="bg-background rounded flex flex-col" style={{}}>
                    <div data-v-4a6a7272 className='container mb-4 p-6 wide'>
                        {/* <Header ></Header> */}
                        <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Người dùng mới</h1>
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Tài khoản</label>
                        <input onChange={(e) => { handleChange(e) }} value={state.user.username} name="username" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-orange-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Tên tài khoản" autoComplete="off" />
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Mật khẩu</label>
                        <input onChange={(e) => { handleChange(e) }} value={state.user.password} name="password" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-orange-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Mật khẩu" autoComplete="off" />
                        <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                        <input onChange={(e) => { handleChange(e) }} value={state.user.email} name="email" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-orange-500 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="abc@gmail.com" autoComplete="off" />
                        {/* SelectBox */}
                        <SelectBox />
                        {/* SelectBox */}
                        {/* Option */}

                        {/* Option */}
                        <div className="flex mt-5 justify-end w-full space ">
                            <button onClick={() => { closeModel() }} className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 mx-4 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">Cancel</button>
                            <button onClick={()=>{submit()}} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                                {
                                    loading ?
                                        <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        :'Submit'
                                }
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!----> */}
            </div>
        </div>
    )
}


export default NewUserModal