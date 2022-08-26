// import { useContext } from "react"
// import { Context } from "../order-page"
import useToggle from '../../hooks/useToggle'
import {Link} from 'react-router-dom'

const Filter = ({ filter }) => {
    // const { state } = useContext(Context)
    const [toggle, setToggle] = useToggle(false)
    let display = 'none'
    if (toggle) display = ''
    return (
        <div>
            <div className="shadow rounded-lg flex">
                <div className="relative">
                    <button
                        className="rounded-lg inline-flex items-center bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline text-gray-500 font-semibold py-2 px-2 md:px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:hidden" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <path
                                d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                        </svg>
                        <span className="hidden md:block">{ "Tất cả"}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" width="24" height="24"
                            viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                            strokeLinecap="round" strokeLinejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                    {/* Option */}
                    <div className="z-40 absolute top-0 right-0 w-40 bg-white rounded-lg shadow-lg mt-12 -mr-1 block py-1 overflow-hidden" style={{ display: display }}>
                        {/* {filter.map((option, index) => (
                            <Option key={index} value={option} toggle={toggle} setToggle={setToggle}></Option>
                        ))} */}
                    </div>
                    {/* Option */}
                </div>
            </div>
        </div>
    )
}

const Option = ({ value, setToggle, toggle }) => {
    // const { state, setState } = useContext(Context)
    // const handleClick = () => {
    //     if (value === "Tất cả") value = ''
    //     setToggle(!toggle)
    //     setState({ ...state, filter: value })

    // }
    return (
        <Link to={`?sort=${(value)}`}>
            <div className="flex justify-end px-4 hover:bg-gray-200 active:bg-gray-300">{value}</div>
        </Link>
    )
}
export default Filter