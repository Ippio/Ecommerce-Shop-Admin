import { useContext } from "react"
import { Context } from "../user-page"
import SaveSection from './SaveSection'
import SelectBox from "./SelectBox"

const UpdateModal = () => {
    const {state,setState}= useContext(Context)
    const display = (state.showModal)?'':'none'
    const handleChange = (e)=>{
        const value = e.target.value
        const name = e.target.name
        setState({...state,user:{...state.user,[name]:value}})
    }
    return (
        <div data-v-5bbf12c8 data-v-7c7abafc className="md-modal self-center justify-center flex-wrap" style={{ alignItems: 'center', display: display }}>
            <div data-v-5bbf12c8 data-v-b48205a2 class="md-modal__shade no-blur"></div>
            <div data-v-5bbf12c8 data-v-3ad5e20a className="md-modal__box flex-grow" style={{ maxWidth: 'calc(1440px - 3rem)', maxHeight: 'calc(100% - 3rem)' }}>
                {/* <!----> */}
                <div data-v-7c7abafc className="bg-background rounded flex flex-col" style={{}}>
                    <div data-v-4a6a7272 className='container mb-4 p-6 wide'>
                        <Header ></Header>
                        <div className='mt-4'>
                            <form data-v-4a6a7272>
                                {/* <!----> */}
                                <Input name='username' value={state.user.username} handleChange={handleChange} label="Username"></Input>
                                <Input name='email' value={state.user.email} handleChange={handleChange}  label="Email" ></Input>
                                <Input name='password' value={state.user.password} handleChange={handleChange} type='password' label="Password" ></Input>
                                <SelectBox></SelectBox>
                                {/* <!----> */}
                            </form>
                            <SaveSection/>
                        </div>
                    </div>
                </div>
                {/* <!----> */}
            </div>
        </div>
    )
}

const Header = () => {
    const {state,setState}= useContext(Context)
    const closeModal = ()=>{
        setState({...state,showModal:false,user:null})
    }
    return (
        <div data-v-7c7abafc className='mx-1 flex text-xl font-bold'>
            Cập nhật tài khoản
            <button onClick={()=>closeModal()} data-v-6b3fd699 className='rounded relative md-btn flex items-center px-3 ml-auto flex-shrink-0 justify-center  rounded-full px-0' style={{ minHeight: '32px', minWidth: '32px' }}>
                <div data-v-6b3fd699="" class="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                <span data-v-6b3fd699="" class="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="med text-currentColor icon"><path data-v-20f285ec="" d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
            </button>
        </div>
    )
}

const Input = ({ type, name,label, value, handleChange, error,setError }) => {
    const className = (value) ? ("md-inputwrap md-populated ") : ("md-inputwrap")
    const mdInput = (error) ? ("md-input md-has-error") : ("md-input")
    return (
        <div data-v-a3bfbc3a data-v-4a6a7272 className={mdInput}>
            <div data-v-a3bfbc3a className={className}>
                <input value={value} type={type} name={name} onChange={(e) => handleChange(e)} data-v-a3bfbc3a="" className="placeholder-current p-4 "></input>
                <div data-v-a3bfbc3a="" className="md-border"></div>
                <label data-v-a3bfbc3a="" className="md-label">{label}</label>
            </div>
            <ErrorSection error={error}></ErrorSection>
        </div>
    )
}

const ErrorSection = ({ error }) => {
    let display = 'none'
    if (error) display = ''
    return (
        <div data-v-a3bfbc3a className="md-error-wrap mt-1 mb-2">
            <div data-v-a3bfbc3a="" data-v-114aea98="" className="md-error flex items-center" style={{ display: display }}>
                <svg data-v-20f285ec="" data-v-a3bfbc3a="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 xSmall text-currentColor icon"><path data-v-20f285ec="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span data-v-a3bfbc3a=""></span>{error}</div>
        </div>
    )
}

export default UpdateModal