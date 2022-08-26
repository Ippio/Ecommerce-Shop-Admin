const Input = ({ label }) => {
    return (
        <div data-v-a3bfbc3a data-v-4a6a7272 className="md-input">
            <div data-v-a3bfbc3a className="md-inputwrap">
                <input data-v-a3bfbc3a="" autoComplete="" placeholder="" title="" className="placeholder-current p-4"></input>
                <div data-v-a3bfbc3a="" className="md-border"></div>
                <label data-v-a3bfbc3a="" className="md-label">{label}</label>
            </div>
            <ErrorSection></ErrorSection>
        </div>
    )
}

const ErrorSection = () => {
    return (
        <div data-v-a3bfbc3a className="md-error-wrap mt-1 mb-2">
            <div data-v-a3bfbc3a="" data-v-114aea98="" className="md-error flex items-center" style={{display:'none'}}><svg data-v-20f285ec="" data-v-a3bfbc3a="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 xSmall text-currentColor icon"><path data-v-20f285ec="" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-14v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> <span data-v-a3bfbc3a=""></span></div>
        </div>

    )
}

export default Input