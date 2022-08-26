import { useContext } from "react"
import BorderLine from "../../components/border-line"
import { VNDFormat } from "../../utils/VnCurrencyFormat"
import { Context } from "../order-page"
// import './style.css'

const OrderModal = () => {
    const { state ,setState} = useContext(Context)
    let display = (state.showModal) ? ('') : ('none')
    const closeModel = ()=>{
        setState({...state,order:null,showModal:false})
    }
    return (
        <div data-v-5bbf12c8 data-v-7c7abafc className="md-modal self-center justify-center flex-wrap" style={{ alignItems: 'center', display: display }}>
            <div data-v-5bbf12c8 data-v-b48205a2 className="md-modal__shade no-blur"></div>
            <div data-v-5bbf12c8 data-v-3ad5e20a className="md-modal__box flex-grow" style={{ maxWidth: 'calc(1280px - 3rem)', maxHeight: 'calc(100% - 3rem)' }}>
                {/* <!----> */}
                <div className="bg-background rounded flex flex-col">
                    {/* Header */}
                    <div className="flex justify-center font-bold text-3xl my-4">
                        <span>Hóa đơn</span>
                    </div>
                    {/* Header */}
                    <div className="mx-6">
                        {/* CustomerInfo */}
                        <div className="">
                            <div className="p-4 bg-gray-100 ">
                                <h1 className="ml-2 font-bold uppercase">Thông tin khách hàng</h1>
                            </div>
                            <div className="my-2">
                                <span className="font-bold">Họ tên:</span>
                                <span className="mx-4">{state.order.customerInfo.name}</span>
                            </div>
                            {state.order.customerInfo.name && (<div className="my-2">
                                <span className="font-bold">Email:</span>
                                <span className="mx-4">{state.order.customerInfo.email}</span>
                            </div>)}
                            <div className="my-2">
                                <span className="font-bold">Số điện thoại:</span>
                                <span className="mx-4">{state.order.customerInfo.phoneNumber}</span>
                            </div>
                            <div className="my-2">
                                <span className="font-bold">Địa chỉ:</span>
                                <span className="mx-4">{state.order.customerInfo.address}</span>
                            </div>
                            {state.order.customerInfo.textNote && (<div className="my-2">
                                <span className="font-bold">Ghi chú:</span>
                                <span className="mx-4">{state.order.customerInfo.textNote}</span>
                            </div>)}
                        </div>
                        {/* CustomerInfo */}
                        <BorderLine />
                        {/* ListProduct */}
                        <div className="">
                            <div className="p-4 bg-gray-100 ">
                                <h1 className="ml-2 font-bold uppercase">Sản phẩm</h1>
                            </div>
                            <table className="mt-2 w-full text-sm lg:text-base" cellspacing="0">
                                <thead>
                                    <tr className=" uppercase">
                                        <th className="hidden md:table-cell"></th>
                                        <th className="text-left">Product</th>
                                        <th className=" text-left lg:pl-0">
                                            <span className="lg:hidden" title="Quantity">Quantity</span>
                                            <span className="hidden lg:inline">Quantity</span>
                                        </th>
                                        <th className="text-right md:table-cell">Unit price</th>
                                        <th className="text-right">Total price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {state.order.orderItems.map((product,index)=>(
                                        <Product key={index} product={product}/>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* ListProduct */}
                        <BorderLine />
                        {/* OrderDetail */}
                        <div className="">
                            <div className="p-4 bg-gray-100 ">
                                <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Subtotal
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        {VNDFormat(state.order.subTotal)}
                                    </div>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Tax
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        {VNDFormat(state.order.tax)}
                                    </div>
                                </div>
                                <div className="flex justify-between border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Shipping Fee
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        {VNDFormat(state.order.shippingFee)}
                                    </div>
                                </div>
                                {/* <div className="flex justify-between pt-4 border-b">
                                    <div className="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                                        <form action="" method="POST">
                                            <button type="submit" className="mr-2 mt-1 lg:mt-2">
                                                <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" /></svg>
                                            </button>
                                        </form>
                                        Coupon "90off"
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                                        -133,944.77€
                                    </div>
                                </div> */}
                                {/* <div className="flex justify-between pt-4 border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        New Subtotal
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        14,882.75€
                                    </div>
                                </div> */}
                                {/* <div className="flex justify-between pt-4 border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Tax
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        2,976.55€
                                    </div>
                                </div> */}
                                <div className="flex justify-between pt-4 border-b">
                                    <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                        Total
                                    </div>
                                    <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                        {VNDFormat(state.order.total)}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* OrderDetail */}
                        <div className="actions sticky">
                            <button onClick={()=>closeModel()} className="rounded w-80 relative md-btn flex items-center px-3 justify-center text-white bg-gray-800 rounded shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none  px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                                    Ok
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!----> */}
            </div>
        </div>
    )
}

const Product = ({product}) => {
    console.log(product)
    const replaceUrl = (str) => {
        str = str.replace(/\\/g, "/")
        return str
    }
    const url = 'http://localhost:5001/'
    return (
        <tr>
            <td className="hidden pb-4 md:table-cell">
                <span>
                    <img src={url.concat(replaceUrl(product.product.urlPicture))}className="w-28 rounded" alt="Thumbnail" />
                </span>
            </td>
            <td>
                <p className="mb-2 ">{product.product.name}</p>
            </td>
            <td className="justify-center pt-4 md:flex md:mt-8">
                <div className="w-20 h-10 ">
                    <div className="relative text-center flex flex-row w-full h-8">
                        <span>{product.amount}</span>
                    </div>
                </div>

            </td>
            <td className=" text-right md:table-cell">
                <span className="text-sm lg:text-base font-medium">
                    {product.product.price}
                </span>
            </td>
            <td className="text-right">
                <span className="text-sm lg:text-base font-medium">
                    {Number(product.product.price * product.amount)}
                </span>
            </td>
        </tr>
    )
}


export default OrderModal