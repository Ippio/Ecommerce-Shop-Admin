import useToggle from '../../hooks/useToggle'
import { useContext } from 'react'
import { Context } from '../new-product-page'


const BrandSelectBox = ({err}) => {
    const { listProductType, newProduct,setError,error } = useContext(Context)
    const [toggle, setToggle] = useToggle(false)
    const iconClass = (toggle) ? ("chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4 active") : ("chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4")
    const className = (newProduct.brand) ? ("md-select-inner-wrap rounded cursor-pointer block populated") : ("md-select-inner-wrap rounded cursor-pointer block")
    const className1 = (toggle) ? ('absolute top-4 transition-label populated with-placeholder') : ('absolute top-4 transition-label with-placeholder')
    const className2 = (toggle) ? ('placeholder-text opacity-40 with-label dropdown-open ') : ('placeholder-text opacity-40 with-label ')
    const display = (toggle) ? ('') : ('none')
    const listBrand = [...listProductType.reduce((arr, item) => {
        if (item.subName === newProduct.productType.subName) arr.push(item.brand)
        return arr
    }, [])]
    return (
        <div tabIndex={'0'} className="md-select focus:outline-none my-5"  onPointerLeave={() => {if(toggle) setToggle(!toggle)}} onClick={() => {setToggle(!toggle);setError({...error ,brand:''})} }>
            <div className={className}>
                <div className="md-select__border"></div>
                <div className="flex-grow relative py-[0.3125rem]">
                    <div className="mb-1 text-xs h-4"></div>
                    <div className={className1}> {/*Add class populated when active */}
                        Hãng
                    </div>
                    <div className={className2} style={{ minHeight: '1rem' }}> {/*Add class dropdown-open when active */}
                         {newProduct.brand.name || 'Chọn hãng'}
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path data-v-20f285ec="" d="m6 9 6 6 6-6"></path></svg>
                {/* Icon add class active when clicked */}
            </div>
            {/* <!List Option> */}
            <div className="stealth-error"><div>{err || ""}</div></div>
            <div className="relative overflow-y-auto overscroll-contain z-10 bg-accent shadow rounded-b" style={{ minWidth: '100%', display: display }}> {/*Display : 'none' to close option */}
                {
                    listBrand[0].map((brand, index) => (
                        (brand.name === newProduct.brand.name)
                            ? (<SelectedOption key={index} value={brand.name}></SelectedOption>)
                            : (<Option key={index} value={brand.name} listBrand={listBrand[0]}></Option>)
                    ))
                }
            </div>
            {/*<!---->*/}
        </div>
    )
}

const Option = ({ value, listBrand }) => {
    const { setNewProduct, newProduct } = useContext(Context)
    const handleClick = () => {
        setNewProduct({ ...newProduct, brand: value })
    }
    listBrand.forEach((brand) => {
        if (brand.name === value) value = brand
    })
    const className = 'px-4 py-2 hover:bg-gray-300 active:bg-gray-300 cursor-pointer bg-accent'
    return (
        <div onClick={() => handleClick()} tabIndex={-1} role='option' aria-selected="false" className={className}>
            {value.name}
        </div>
    )
}

const SelectedOption = ({ value }) => {
    const className = 'px-4 py-2 cursor-pointe bg-gray-300'
    return (
        <div tabIndex={-1} role='option' aria-selected="false" className={className}>
            {value}
        </div>
    )
}

export default BrandSelectBox