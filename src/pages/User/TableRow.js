
import axios from 'axios';
import { useContext } from "react";
import getCurrentTimeFromStamp from '../../utils/TimeFormat';
import { Context } from "../user-page";
const TableRow = ({user}) => {
    const {state,setState} = useContext(Context)
    const handleDelete = async()=>{
        const deletedUser = await axios.delete(`http://localhost:5001/user/${user._id}`)
        if(deletedUser) window.location.reload(false)
    }
    const openModal = ()=>{
        setState({...state,showModal:true,user:{...user,password:''}})
    }
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            {/* User name */}
            <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                    <span className="font-medium">{user.username}</span>
                </div>
            </td>
            {/* User name */}
            {/* Email */}
            <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                    <span>{user.email}</span>
                </div>
            </td>
            {/* Email */}
            <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-center">
                    <span className="font-bold text-red-500">{user.role}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-left">
                <div className="flex items-center justify-center">
                    <span>{getCurrentTimeFromStamp(user.createdAt)}</span>
                </div>
            </td>
            <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                    {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{minWidth:'20px'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div> */}
                    <div onClick={()=>openModal()} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{minWidth:'20px'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                    {/* Delete */}
                    <div onClick={()=>handleDelete()} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{minWidth:'20px'}}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>
                    {/* Delete */}
                </div>
            </td>
        </tr>
    )
}

export default TableRow