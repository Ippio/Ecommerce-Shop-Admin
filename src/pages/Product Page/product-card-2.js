import { useContext } from "react"
import { GreenStatus, RedStatus } from "../../components/status-tag"
import { VNDFormat } from "../../utils/VnCurrencyFormat"
import { Context } from "../product-page"
import './style.css'
const ProductCard = ({ product }) => {
    const replaceUrl = (str) => {
        str = str.replace(/\\/g, "/")
        return str
    }
    const { dispatch, state } = useContext(Context)
    const urlImage = replaceUrl(`http://localhost:5001/${product.urlPicture}`)
    const openModal = () => {
        dispatch({ type: 'toggleModal', value: !state.modalToggle, product: product })
    }
    return (
        <div className="product-card">
            {/* Image */}
            <div className="product-card-image cursor-pointer" style={{ gridArea: ' image / image / image / image' }}>
                <span className="group flex items-start relative mb-auto cover " />
                <img alt="" src={urlImage} className="rounded shadow-md w-full h-auto" />
            </div>
            {/* Image */}
            {/* Button */}
            {/* <div className="cursor-pointer" style={{ gridArea: ' button / button / button / btn' }}>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Submit</button>
            </div> */}
            {/* Button */}
            {/* Product name */}
            <div onClick={() => { openModal() }} className="font-bold title cursor-pointer" style={{ gridArea: ' name / name / name / name' }}>
                <span >{product.name}</span>
            </div>
            {/* Product name */}
            {/* Stats */}
            <div className="stats align-middle" style={{ gridArea: ' stats / stats / stats / stats' }}>
                <div className="stat flex align-center relative">
                    <svg data-v-20f285ec="" data-v-f70d2b94="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 feather feather-star rel text-currentColor icon"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    9.0
                </div>
                <div className="stat flex align-center relative">
                    <svg data-v-20f285ec="" data-v-f70d2b94="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 small text-icon-black dark:text-icon-white text-false icon"><path d="M12.667 14 8 10.667 3.333 14V3.333A1.333 1.333 0 0 1 4.668 2h6.667a1.333 1.333 0 0 1 1.333 1.333V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    123
                </div>
                <div className="stat flex align-center relative">
                    <svg data-v-20f285ec="" data-v-f70d2b94="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 small text-icon-black dark:text-icon-white text-false icon"><path d="M14 10a1.333 1.333 0 0 1-1.333 1.333h-8L2 14V3.333A1.333 1.333 0 0 1 3.333 2h9.334A1.333 1.333 0 0 1 14 3.333V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    50
                </div>
            </div>
            {/* Stats */}
            {/* Status */}
            <div className="flex flex-wrap status mb-auto" style={{ gridArea: ' status / status / status / status' }}>
                {(product.quantity !== 0)
                    ? (<GreenStatus status="Đang bán"></GreenStatus>)
                    : (<RedStatus status={"Hết hàng"}></RedStatus>)
                }
            </div>
            {/* Status */}
            {/* Price */}
            <div className="price font-bold" style={{ gridArea: ' price / price / price / price' }}>
                <span >{VNDFormat(product.price)}</span>
            </div>
            {/* Price */}
            <div className="py-2 description !py-0" style={{ gridArea: ' description / description / description / description' }}>
                <div className="md-md-container dense">
                    <p>{product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque eu ultrices vitae. Euismod in pellentesque massa placerat duis. Massa tincidunt dui ut ornare. Diam vel quam elementum pulvinar etiam non quam lacus suspendisse."}</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCard
