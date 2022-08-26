import './style.css';
import { Bin } from '../../components/icon'

const AddItemSection = ({ label }) => {
    return (
        <div data-v-348c6d29 className='input-container'>
            {/* <Label> */}
            <div data-v-348c6d29 className="label">
                <div data-v-348c6d29="" className="">{label || 'Label'}</div>
            </div>
            {/* <Label> */}
            <div style={{ height: 'auto' }}>
                <Item></Item>
                <AddBtn></AddBtn>
            </div>
        </div>
    )
}

const AddBtn = ({ value }) => {
    return (
        <div data-v-7c7abafc className="relative mt-4">
            <div data-v-7c7abafc className="rounded absolute top-0 left-0 w-full h-full border-current opacity-40" style={{ border: '1px dashed' }}></div>
            <button data-v-6b3fd699 data-v-7c7abafc className="rounded relative md-btn flex items-center px-3 justify-center text-black " style={{ minHeight: '40px', minWidth: '100%' }}>
                <div data-v-6b3fd699 className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    <svg data-v-20f285ec="" data-v-6b3fd699="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-currentColor icon mr-4"><path data-v-20f285ec="" d="M12 5v14m-7-7h14"></path></svg>
                    {value || 'Add'}
                </span>
            </button>
        </div>
    )
}

const Item = ({ error }) => {
    const className = error ? ("text-item-container md-has-error") : ("text-item-container")
    return (
        <div className="grid grid-cols-1 gap-2">
            <div>
                <div className={className}> {/*add class md-has-error if error happennd*/}
                    <span className="font-bold">Storage</span>
                    <div className="bg-current opacity-30" style={{ minWidth: '1px', height: '24px' }} />
                    {/* Input */}
                    <div className="relative flex-grow min-w-0">
                        <input className="inline-input"></input>
                        <div className="absolute top-0 opacity-60 pointer-events-none pl-1 width-full line-clamp-1 break-all" />
                    </div>
                    {/* Input */}
                    <Bin></Bin>
                </div>
                <div data-v-14a1439e="" className="stealth-error"><div>{error || ""}</div></div>
            </div>
        </div>
    )
}

export default AddItemSection