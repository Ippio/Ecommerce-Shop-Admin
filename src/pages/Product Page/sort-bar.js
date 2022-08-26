import { useContext,useState } from "react"
import { Context } from "../product-page"

const SortBar = ({options,selectedOption}) => {
    const [open,setOpen] = useState(()=>{return false})
    const style = (open ? 'md-select-inner-wrap rounded-t cursor-pointer' : 'md-select-inner-wrap rounded cursor-pointer')
    const iconClass = (open? 'chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4 active' : 'chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4')
    return (
        <div data-v-46b7d13b data-v-0796563c onClick={() => { setOpen(!open) }} onPointerLeave={() => { if(open){setOpen(!open)} }}  tabIndex={0} className="md-select focus:outline-none sm:w-auto w-full md-select--populated">
            <div data-v-46b7d13b className={style}>
                <div data-v-46b7d13b className="md-select__border"></div>
                <div data-v-46b7d13b className="flex-grow relative py-[0.3125rem]">
                    <div data-v-46b7d13b className="mb-1 text-xs h-4"></div>
                    <div data-v-46b7d13b className="absolute top-4 transition-label populated">Sort By</div>
                    <div data-v-46b7d13b className={'placeholder-text with-label populated'}>{selectedOption}</div>
                </div>
                {/*svg class add active when clicked*/}
                <svg data-v-20f285ec="" data-v-46b7d13b="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={iconClass}><path data-v-20f285ec="" d="m6 9 6 6 6-6"></path></svg>
            </div>
            {/* <!Show Option> */}
            {open &&(
                        <div data-v-46b7d13b className="fixed bg-accent overflow-y-auto overscroll-contain rounded-b shadow z-10 xl:ml-10" style={{ width: '300px', left: '24px',top: '240px'}}>
                            {options.map((value,index)=>(
                                (value === selectedOption?<SelectedOption key={index} value={value}></SelectedOption>:<Option key={index} value={value}></Option>)
                            ))}
                        </div>
            )}
        </div>
    )
}

const Option = ({ value }) => {
    const {dispatch} = useContext(Context)
    const changeOption = () => {
        dispatch({ type: 'ChangeOption', value: value })
    }
    const className = 'px-4 py-2 hover:bg-gray-300 active:bg-gray-300 cursor-pointer bg-accent'
    return (
        <div data-v-46b7d13b tabIndex={-1} role='option' aria-selected="false" onClick={() => changeOption()} className={className}>
            {value}
        </div>
    )
}

const SelectedOption = ({ value }) => {
    const className = 'px-4 py-2 cursor-pointe bg-gray-300'
    return (
        <div data-v-46b7d13b tabIndex={-1} role='option' aria-selected="false" className={className}>
            {value}
        </div>
    )
}

export default SortBar