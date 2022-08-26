import axios from 'axios'
import { useState } from 'react'
import useToggle from '../../hooks/useToggle'

const SelectBox = ({ stats,order}) => {
    const [status,setStatus] = useState(order.status)
    const [toggle, setToggle] = useToggle(false)
    const iconClass = (toggle) ? ("chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4 active") : ("chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4")
    const className = (toggle) ? ("md-select-inner-wrap rounded cursor-pointer block populated") : ("md-select-inner-wrap rounded cursor-pointer block")
    const display = (toggle) ? ('') : ('none')
    return (
        <div tabIndex={0} className="md-select focus:outline-none" onPointerLeave={() => {if(toggle) setToggle(!toggle)}} onClick={() => setToggle(!toggle)} >
            <div className={className}> {/*class rounded change to rounded-t when clicked*/}
                <div className="md-select__border"></div>
                <div className="flex-grow relative py-[0.3125rem]">
                    <div className="mb-1 text-xs h-4"></div>
                    <div className="absolute top-4 transition-label with-placeholder" ></div> {/*Add class populated to show*/}
                    <div className="placeholder-text opacity-40 with-label" style={{ minHeight: '1rem' }}>{status}</div> {/*Add class dropdown when clicked*/}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path data-v-20f285ec="" d="m6 9 6 6 6-6"></path></svg>
                {/* Icon add class active when clicked */}
            </div>
            {/* <!List Option> */}
            <div className="relative overflow-y-auto overscroll-contain z-10 bg-accent shadow rounded-b" style={{ minWidth: '100%', maxWidth: '100%', display: display }}> {/*Display : 'none' to close option */}
                {stats.map((stat,index)=>(
                    <Option key={index} stat={stat} order={order} setStatus={setStatus}></Option>
                ))}
            </div>
            {/*<!---->*/}
        </div>
    )
}

const Option = ({ stat,setStatus,order }) => {
    const handleClick = async()=>{
        setStatus(stat)
        const update = await axios.patch(`http://localhost:5001/order/${order._id}`,{status:stat})
        console.log(update)
    }
    const className = 'px-4 py-2 hover:bg-gray-300 active:bg-gray-300 cursor-pointer bg-accent'
    return (
        <div  onClick={()=>handleClick()} tabIndex={-1} role='option' aria-selected="false" className={className}>
            {stat}
        </div>
    )
}

export const SelectedOption = ({ stat }) => {
    const className = 'px-4 py-2 cursor-pointe bg-gray-300'
    return (
        <div tabIndex={-1} role='option' aria-selected="false" className={className}>
            {stat}
        </div>
    )
}

export default SelectBox