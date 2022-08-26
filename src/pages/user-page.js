import PageTitle from "../layouts/page-title"
import SearchBar from "./User/SearchBar"
import UpdateModal from "./User/Modal"
import TableRow from "./User/TableRow"
import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import Pagination from "./User/pagination"
import NotFound from "./404"
import Loading from "../components/Loading"
import NewUserModal from "./User/NewUserModal"
export const Context = createContext()
const defaultState = {
    currentPage: 1,
    limit: 20,
    showModal: false,
    user: null,
    addUser:false,
    refreshTimes:1
}
const UserPage = () => {
    const [state, setState] = useState(defaultState)
    const api = new URL('/user', 'http://localhost:5001')
    const queryObject = {
        page: state.currentPage,
        refreshTimes: state.refreshTimes
    }
    console.log(state)
    const { data, loading } = useFetch(`${api}?${Object.entries(queryObject)}`)
    if (loading) return (<Loading/>)
    if (!data) return (<NotFound></NotFound>)
    const openAddUserModel=()=>{
        setState({...state,addUser:true,user:{username:'',password:'',email:'', role:''}})
    }
    console.log(state)
    return (
        <Context.Provider value={{ state, setState }}>
            <div className="overflow-x-auto">
                <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                        <PageTitle title='Tài khoản'></PageTitle>
                        {/* Search/Filter */}
                        <div class="flex justify-between items-center my-5">
                            <SearchBar></SearchBar>
                            <button onClick={()=>openAddUserModel()} class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                                <p class="text-sm font-medium leading-none text-white">Add User</p>
                            </button>
                        </div>
                        {/* Table*/}
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Tài khoản</th>
                                        <th className="py-3 px-6 text-left">Email</th>
                                        <th className="py-3 px-6 text-center">Quyền</th>
                                        <th className="py-3 px-6 text-center">Ngày tạo</th>
                                        <th className="py-3 px-6 text-center">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {data.data.users.map((user) => (
                                        <TableRow key={user._id} user={user}></TableRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Table*/}
                        <Pagination currentPage={data.data.currentPage} totalPage={Math.ceil(Number(data.data.totalUser) / 20)}></Pagination>
                    </div>
                    {state.user && <UpdateModal />}
                    {state.addUser && <NewUserModal/>}
                </div>
            </div>
        </Context.Provider>
    )
}

export default UserPage