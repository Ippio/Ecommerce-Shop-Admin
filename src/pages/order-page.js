import Filter from "./Order Page/Filter"
import SearchBar from "./Order Page/SearchBar"
import TableRow from "./Order Page/TableRow"
import Pagination from "./Order Page/Pagination"
import { createContext, useState } from "react"
import { useFetch } from "../hooks/useFetch"
import NotFound from "./404"
import PageTitle from "../layouts/page-title"
import OrderModal from "./Order Page/OrderModal"
import Loading from "../components/Loading"
export const Context = createContext()
const filter = ['Tất cả', 'Chưa duyệt', 'Duyệt', 'Đang giao', 'Hoàn tất', 'Hủy']
const defaultState = {
    currentPage: 1,
    limit: 20,
    filter: '',
    showModal: false,
    order: null
}
const OrderPage = () => {
    const api = new URL('/order/', 'http://localhost:5001')
    const [state, setState] = useState(defaultState)
    const queryObject = {
        page: state.currentPage,
        // sort: state.selectedOption
        status: state.filter
    }
    const searchParams = new URLSearchParams(Object.entries(queryObject))
    const { data, loading } = useFetch(`${api}?${searchParams}`)
    if (loading) return (<Loading/>)
    if (!data) return (<NotFound></NotFound>)
    return (
        <Context.Provider value={{ state, setState }}>
            <div className="overflow-x-auto">
                <div className="min-w-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
                    <div className="w-full lg:w-5/6">
                    <PageTitle title='Đơn hàng'></PageTitle>
                        {/* Search/Filter */}
                        <div class="flex justify-between items-center my-5">
                            <SearchBar></SearchBar>
                            <Filter filter={filter}></Filter>
                        </div>
                        {/* Table*/}
                        <div className="bg-white shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Mã hóa đơn</th>
                                        <th className="py-3 px-6 text-left">Khách hàng</th>
                                        <th className="py-3 px-6 text-center">Thành tiền</th>
                                        <th className="py-3 px-6 text-center">Ngày tạo</th>
                                        <th className="py-3 px-6 text-center">Tình trạng</th>
                                        <th className="py-3 px-6 text-center">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {data.orders.map((order) => (
                                        <TableRow key={order._id} order={order}></TableRow>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Table*/}
                        <Pagination currentPage={state.currentPage} totalPage={Math.ceil(Number(data.totalOrders) / Number(state.limit))}></Pagination>
                    </div>
                </div>
                {state.order && (<OrderModal></OrderModal>)}
            </div>
        </Context.Provider>
    )
}

export default OrderPage