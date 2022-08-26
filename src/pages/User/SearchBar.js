const SearchBar = () => {
    return (
        <div className="flex-1 pr-4">
            <div className="relative md:w-1/3">
                <input type="search"
                    className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                    placeholder="Search..." />
                <div className="absolute top-0 left-0 inline-flex items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" viewBox="0 0 24 24"
                        strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                        strokeLinejoin="round">
                        <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                        <circle cx="10" cy="10" r="7" />
                        <line x1="21" y1="21" x2="15" y2="15" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar