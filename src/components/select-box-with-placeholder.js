import Option from "./option";

const SelectBox = ()=>{
    return(
        <div data-v-46b7d13b data-v-bbf0a5f8 tabIndex={0} className="md-select focus:outline-none">
            <div data-v-46b7d13b className="md-select-inner-wrap rounded cursor-pointer block"> {/*class rounded chang to rounded when clicked*/}
                <div data-v-46b7d13b className="md-select__border"></div>
                <div data-v-46b7d13b className="flex-grow relative py-[0.3125rem]">
                    <div data-v-46b7d13b="" class="mb-1 text-xs h-4"></div>
                    <div data-v-46b7d13b="" class="absolute top-4 transition-label with-placeholder" >Product Type</div> {/*Add class populated to show*/}
                    <div data-v-46b7d13b="" class="placeholder-text opacity-40 with-label" style={{minHeight: '1em'}}>Select Product Type</div> {/*Add class dropdown when clicked*/}
                </div>
                <svg data-v-20f285ec="" data-v-46b7d13b="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron ml-1 flex-shrink-0 feather feather-chevron-down text-icon-black dark:text-icon-white text-false icon my-4"><path data-v-20f285ec="" d="m6 9 6 6 6-6"></path></svg>
            </div>
            {/* <!List Option> */}
            <div data-v-46b7d13b className="fixed overflow-y-auto overscroll-contain z-10 bg-accent shadow rounded-b" style={{width: '339.6px',left: '280px',display: 'none'}}> {/*Display : 'none' to close option */}
                <Option value='bla bla'></Option>
                <Option value='etc'></Option>
                <Option value='blo blo'></Option>
            </div>
            {/*<!---->*/}
        </div>
    )
}

export default SelectBox