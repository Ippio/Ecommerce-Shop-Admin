import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
const Sidebar = ({ display, hide }) => {
    let hideSideBar = ''
    if (display) { hideSideBar = 'none' }
    else { display = '' }
    return (
        // <!Layout>
        <div data-v-6ef30f13 className="flex flex-col bg-accent h-screen md:h-full" style={{ display: hideSideBar }}>
            {/* <!Show sidebar> */}
            <div data-v-6ef30f13 data-v-b48205a2 className="shade lg:hidden z-40 h-screen md:h-full" style={{ display: hideSideBar }}></div>
            <div data-v-6ef30f13 className="drawer flex-grow lg:static lg:h-auto fixed left-0 top-0 z-50 h-screen md:h-full" style={{ minWidth: '256px', boxShadow: '#141515  -25px 0px 9px -25px inset', marginLeft: '0px', transition: 'margin-left 150ms ease-in-out 0s' }}>
                <div data-v-6ef30f13 className="lg:top-0 lg:sticky flex flex-col overflow-y-auto overscroll-contain h-screen">
                    <Header display={display} close={hide}></Header>
                    {/* Home */}
                    <NavLink to='/'>
                        {
                            ({ isActive }) => {
                                return isActive ? <Home isActive={isActive} /> : <Home isActive={isActive} />
                            }
                        }
                    </NavLink>
                    {/* Home */}
                    {/* ProductCategory */}
                    <div className="px-4 pt-2 flex flex-col flex-shrink-0">
                        <div className="flex-shrink-0">
                            <div data-v-0a89b281 className="list__item px-2">
                                <div>
                                    <svg data-v-20f285ec="" data-v-06dda2ca="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </div>
                                <div className="mx-2 font-bold">Product</div>
                                <AddIcon></AddIcon>
                            </div>
                        </div>
                        <NavLink to='/product/dien-thoai'>
                            {({ isActive }) => {
                                return isActive
                                    ? <Item productType='Phone' isActive={isActive}></Item>
                                    : <Item productType='Phone' isActive={isActive}></Item>
                            }}
                        </NavLink>
                        <NavLink to='/product/may-tinh-de-ban'>
                            {({ isActive }) => {
                                return isActive
                                    ? <Item productType='PC' isActive={isActive}></Item>
                                    : <Item productType='PC' isActive={isActive}></Item>
                            }}
                        </NavLink>
                        <NavLink to='/product/may-tinh-xach-tay'>
                            {({ isActive }) => {
                                return isActive
                                    ? <Item productType='Laptop' isActive={isActive}></Item>
                                    : <Item productType='Laptop' isActive={isActive}></Item>
                            }}
                        </NavLink>
                        <NavLink to='/product/may-tinh-bang'>
                            {({ isActive }) => {
                                return isActive
                                    ? <Item productType='Ipad' isActive={isActive}></Item>
                                    : <Item productType='Ipad' isActive={isActive}></Item>
                            }}
                        </NavLink>
                        <NavLink to='/product/man-hinh'>
                            {({ isActive }) => {
                                return isActive
                                    ? <Item productType='Màn hình' isActive={isActive}></Item>
                                    : <Item productType='Màn  hình' isActive={isActive}></Item>
                            }}
                        </NavLink>
                    </div>
                    {/* ProductCategory */}
                    {/* Order */}
                    <NavLink to='/order'>
                        {({ isActive }) => {
                            return isActive
                                ? <Order isActive={isActive}></Order>
                                : <Order sActive={isActive}></Order>
                        }}
                    </NavLink>
                    {/* Order */}
                    {/* User */}
                    <NavLink to='/user'>
                        {({ isActive }) => {
                            return isActive
                                ? <User isActive={isActive}></User>
                                : <User sActive={isActive}></User>
                        }}
                    </NavLink>
                    {/* User */}
                    <StatisticItem></StatisticItem>
                </div>
            </div>
            {/* <!----> */}
        </div>
        // <!---->
    )
}

const Header = ({ close, display }) => {
    return (
        <div className="flex items-center py-2 mx-4 flex-shrink-0">
            <Logo></Logo>
            {/* <!Close Buttom> */}
            <button onClick={close} data-v-6b3fd699 className="rounded relative md-btn flex items-center px-3 ml-auto lg:visible -mr-2 justify-center  rounded-full px-0" style={{ minHeight: '40px', minWidth: '40px', display: display }}>
                <div data-v-6b3fd699="" className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" >
                    <svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </span>
            </button>
            {/* <!----> */}
        </div>
    )
}

const Home = ({ isActive }) => {
    const className = (isActive) ? ('list__item px-2 !font-bold menu__item--active-highlight') : ('list__item px-2 !font-bold menu__item--hover-highlight"')
    return (
        <div className="px-4 pt-2 flex flex-col flex-shrink-0">
            <div className="flex-shrink-0">
                <div data-v-0a89b281 className={className}>
                    <div>
                        <svg data-v-20f285ec="" data-v-0a89b281="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home text-currentColor icon"><path data-v-20f285ec="" d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path data-v-20f285ec="" d="M9 22V12h6v10"></path></svg>
                    </div>
                    <div className="mx-2">Home</div>
                </div>
            </div>
        </div>
    )
}

// const ProductItem = () => {
//     return (
//         <div className="px-4 pt-2 flex flex-col flex-shrink-0">
//             <div className="flex-shrink-0">
//                 <div data-v-0a89b281 className="list__item px-2">
//                     <div>
//                         <svg data-v-20f285ec="" data-v-06dda2ca="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//                     </div>
//                     <div className="mx-2 font-bold">Product</div>
//                     <AddIcon></AddIcon>
//                 </div>
//             </div>
//         </div>
//     )
// }

const User = ({ isActive }) => {
    const className = (isActive) ? ('list__item px-2 !font-bold menu__item--active-highlight') : ('list__item px-2 !font-bold menu__item--hover-highlight"')
    return (
        <div className="px-4 pt-2 flex flex-col flex-shrink-0">
            <div className="flex-shrink-0">
                <div data-v-0a89b281 className={className}>
                    <div>
                        <svg data-v-20f285ec="" data-v-06dda2ca="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    <div className="mx-2">User</div>
                </div>
            </div>
        </div>
    )
}

const Order = ({ isActive }) => {
    const className = (isActive) ? ('list__item px-2 !font-bold menu__item--active-highlight') : ('list__item px-2 !font-bold menu__item--hover-highlight"')
    return (
        <div className="px-4 pt-2 flex flex-col flex-shrink-0">
            <div className="flex-shrink-0">
                <div data-v-0a89b281 className={className}>
                    <div>
                        <svg className="text-currentColor icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" /></svg>
                    </div>
                    <div className="mx-2">Order</div>
                </div>
            </div>
        </div>
    )
}

const StatisticItem = () => {
    return (
        <div className="px-4 pt-2 flex flex-col flex-shrink-0">
            <div className="flex-shrink-0">
                <div data-v-0a89b281 className="list__item px-2 !font-bold menu__item--hover-highlight">
                    <div>
                        <svg data-v-20f285ec="" data-v-64d87bc7="" width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="none" className="text-icon-black dark:text-icon-white text-false icon" size="24" alt="Status" data-v-85283b92=""><path data-v-20f285ec="" d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37 51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28 15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272Z" fill="currentColor"></path></svg>
                    </div>
                    <div className="mx-2">Statistic</div>
                </div>
            </div>
        </div>
    )
}

const AddIcon = () => {
    return (
        <NavLink className="ml-auto" to="/product/create">
            {<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-currentColor icon"><path data-v-20f285ec="" d="M12 5v14m-7-7h14"></path></svg>}
        </NavLink>
    )
}

const Item = ({ productType, isActive }) => {
    const className = (isActive) ? ('list__item px-2 !font-bold menu__item--active-highlight') : ('list__item px-2 !font-bold menu__item--hover-highlight"')
    return (
        <span href="/" className="pt-1 flex-shrink-0">
            <div data-v-0a89b281 className={className}>
                <div data-v-0a89b281="" className="mx-2">{productType}</div>
            </div>
        </span>
    )
}

export default Sidebar