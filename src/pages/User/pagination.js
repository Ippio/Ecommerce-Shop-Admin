import { useContext } from "react";
import { Context } from "../user-page";
const Pagination = ({ currentPage, totalPage }) => {
    const pageNumbers = []
    if (currentPage >= 5) pageNumbers.push(1)
    for (let index = (currentPage - 3 > 0 && currentPage !== 4) ? currentPage - 3 : 1; (index <= currentPage + 3 && index <= Number(totalPage)); index++) {
        pageNumbers.push(index)
        if (index === currentPage + 3 && currentPage + 3 < Number(totalPage)) pageNumbers.push(Number(totalPage))
    }
    return (
        <div className='flex justify-center flex-wrap gap-2 my-6'>
            <BackIcon currentPage={currentPage}></BackIcon>
            {
                pageNumbers.map((page, index) => {
                    if (currentPage + 3 < totalPage && currentPage + 3 === page) return (<EctIcon key={index + 10}></EctIcon>)
                    if (currentPage > 4 && currentPage - 3 === page) return (<EctIcon key={index + 10}></EctIcon>)
                    if (currentPage === page) return <CurrentPageIcon key={index} page={page}></CurrentPageIcon>
                    else return <PageIcon key={index} page={page}></PageIcon>
                }
                )}
            <NextIcon currentPage={currentPage} totalPage={totalPage}></NextIcon>
        </div>
    )
}

const BackIcon = ({ currentPage }) => {
    const { setPage } = useContext(Context)
    const backOnePage = () => {
        if (currentPage !== 1) {
            setPage(Number(currentPage) - 1)
        }
    }
    let className = 'rounded relative md-btn flex items-center px-3 justify-center px-0 '
    if (currentPage === 1) { className = "rounded relative md-btn flex items-center px-3 justify-center px-0 disabled" }
    return (
        <span data-v-6b3fd699 data-v-b2c24e40 href="#" onClick={() => backOnePage()} className={className} style={{ minHeight: '40px', minWidth: '40px' }}>
            <div data-v-6b3fd699="" className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
            <span data-v-6b3fd699="" className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left text-currentColor icon"><path data-v-20f285ec="" d="M19 12H5m7 7-7-7 7-7"></path></svg> </span>
        </span>
    )
}

const NextIcon = ({ currentPage, totalPage }) => {
    const { setPage } = useContext(Context)
    const nextPage = () => {
        if (currentPage !== totalPage) {
            setPage(Number(currentPage) - 1)
        }
    }
    let className = 'rounded relative md-btn flex items-center px-3 justify-center px-0 '
    if (Number(currentPage) === Number(totalPage)) { className = 'rounded relative md-btn flex items-center px-3 justify-center px-0 disabled' }
    return (
        <span data-v-6b3fd699 data-v-b2c24e40 href="#" onClick={() => nextPage()} className={className} style={{ minHeight: '40px', minWidth: '40px' }}>
            <div data-v-6b3fd699="" className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
            <span data-v-6b3fd699="" className='flex items-center justify-center font-medium select-none' style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right text-currentColor icon"><path data-v-20f285ec="" d="M5 12h14m-7-7 7 7-7 7"></path></svg> </span>
        </span>
    )
}

const EctIcon = () => {
    return (
        <button data-v-6b3fd699 className="rounded relative md-btn flex items-center px-3 justify-center  px-0" style={{ minHeight: '40px', minWidth: '40px' }}>
            <div data-v-6b3fd699 className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid" style={{ minHeight: '40px', minWidth: '40px' }}></div>
            <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-currentColor icon"><path data-v-20f285ec="" d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm7 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
        </button>
    )
}

const PageIcon = ({ page }) => {
    const { setPage } = useContext(Context)
    const setCurrentPage = () => {
        setPage(page)
    }
    return (
        <span data-v-6b3fd699 data-v-b2c24e40 onClick={() => setCurrentPage()} href="#" className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-accent hover:bg-zinc-200 active:bg-slate-100 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent" style={{ minHeight: '40px', minWidth: '40px' }}>
            <span data-v-6b3fd699="" className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>{page}</span>
        </span>
    )
}

const CurrentPageIcon = ({ page }) => {
    return (
        <span data-v-6b3fd699 data-v-b2c24e40 href="#" className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-primary hover:bg-orange-600 active:bg-orange-700 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent" style={{ minHeight: '40px', minWidth: '40px' }}>
            <span data-v-6b3fd699="" className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>{page}</span>
        </span>
    )
}

// const PageInput = () => {
//     return (
//         <input data-v-b2c24e40 pattern="[0-9]*" autoFocus='' className="page-input"></input>
//     )
// }


export default Pagination