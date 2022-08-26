
import SearchBar from "../components/search-bar";
const SearchSection = () => {
    return (
        <div className="flex mb-6">
            <SearchBar></SearchBar>
            <Filter></Filter>
        </div>
    )
}

const Filter = () => {
    return (
        <button data-v-6b3fd699 className="rounded relative md-btn flex items-center px-3 ml-1 justify-center text-black rounded-full" style={{ minWidth: '40px', minHeight: '40px' }}>
            <div data-v-6b3fd699="" className="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
            <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                <svg data-v-20f285ec="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-icon-black dark:text-icon-white text-false icon" data-v-6b3fd699=""><path data-v-20f285ec="" d="M22 3H2l8 9.46V19l4 2v-8.54L22 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                <span data-v-6b3fd699="" className="hidden sm:block ml-1">Filter</span>
            </span>
        </button>
    )
}

export default SearchSection