import { React, createContext, useReducer } from "react";
import PageTitle from '../layouts/page-title'
import SearchSection from '../layouts/search-section'
import SortBar from './Product Page/sort-bar'
import Pagination from './Product Page/pagination'
import ProductCard from "./Product Page/product-card-2";
import Modal from "./Product Page/update-product-modal";
import { useParams } from 'react-router-dom'
import { useFetch } from "../hooks/useFetch";
import NotFound from './404'
import Loading from "../components/Loading";
const reducer = (state, action) => {
    if (action.type === 'updateProduct') {
        return ({ ...state, product: action.product, currentPage: action.page })
    }
    if (action.type === 'toggleModal') {
        return ({ ...state, modalToggle: action.value, product: action.product })
    }
    if (action.type === 'refresh') {
        return ({ ...state, modalToggle: action.value, product: action.product, refreshTimes: action.refreshTimes })
    }
    if (action.type === 'SetState') {
        return ({ ...state, products: action.products, currentPage: action.currentPage, totalPage: action.totalPage })
    }
    if (action.type === 'ChangeOption') {
        return ({ ...state, selectedOption: action.value })
    }
    if (action.type === 'SwitchPage') {
        return ({ ...state, currentPage: action.page })
    }
    return { ...state }
}

export const Context = createContext()

const options = ['Bán chạy', 'Mới nhất', 'Giá cao', 'Giá thấp']
const defaultState = {
    currentPage: 1,
    refreshTimes: 1,
    limit: 12,
    selectedOption: options[0],
    product: null,
    modalToggle: false,
}


const api = new URL('/product/type', 'http://localhost:5001')

const ProductBody = () => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    const queryObject = {
        page: params.page || state.currentPage,
        sort: state.selectedOption,
        refreshTimes: state.refreshTimes
    }
    const { productType } = useParams()
    const searchParams = new URLSearchParams(Object.entries(queryObject))
    const { data, loading } = useFetch(`${api}/${productType}?${searchParams}`)
    if (loading) return (<Loading />)
    if (!data) return (<NotFound></NotFound>)
    let pageTitle = ''
    switch (productType) {
        case 'dien-thoai':
            pageTitle = "Điện thoại"
            break;
        case 'may-tinh-bang':
            pageTitle = "Ipad"
            break;
        case 'may-tinh-xach-tay':
            pageTitle = "Laptop"
            break;
        case 'may-tinh-de-ban':
            pageTitle = "PC"
            break;
        case 'man-hinh':
            pageTitle = "Màn hình"
            break;
        default:
            break;
    }
    return (
        <Context.Provider value={{ dispatch, state }}>
            <div className='flex-grow' style={{ position: 'relative' }}>
                <div data-v-4a6a7272 className='container mb-4 wide'>
                    {/* <!Page Title> */}
                    <PageTitle title={pageTitle}></PageTitle>
                    {/* <!----> */}
                    <div>
                        {/* <!Search Section> */}
                        <SearchSection></SearchSection>
                        {/* <!----> */}
                    </div>
                    {/* <!Sort> */}
                    <div className='flex mb-6 flex-row justify-between gap-6'>
                        <SortBar options={options} selectedOption={state.selectedOption}></SortBar>
                    </div>
                    {/* <!----> */}
                    {/* <!List Product> */}
                    <div data-v-0796563c className='grid gap-2 xl:grid-cols-2 product-card-dense sm:grid-cols-1'>
                        {data.data.listProduct.map((product) => (
                            <ProductCard product={product} key={product._id}></ProductCard>
                        ))}
                    </div>
                    {/* <!----> */}
                    {/* <!Pagination> */}
                    <Pagination currentPage={Number(data.data.currentPage)} totalPage={Math.ceil(data.data.totalProduct / state.limit)}></Pagination>
                    {/* <!----> */}
                </div>
                <Modal />
            </div>
        </Context.Provider>
    )
}

export default ProductBody