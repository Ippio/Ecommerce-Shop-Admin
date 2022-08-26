import axios from "axios"
import { useContext, useState } from "react"
import { Context } from "../user-page"

const SaveSection = () => {
    const { state, setState } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const save = async (e) => {
        if(!loading){
            e.preventDefault()
            setLoading(true)
            try {
                const update = await axios.patch(`http://localhost:5001/user/${state.user._id}`, state.user)
                if (update) {
                    setLoading(false)
                    setState({ ...state, showModal: false, user: null,refreshTimes: state.refreshTimes+1 })
                    // window.location.reload(false)
                }
            } catch (error) {
                setLoading(false)
                console.log('Something wrong happened')
            }
        }
    }
    const closeModal = () => {
        setState({ ...state, showModal: false, user: null,refreshTimes: state.refreshTimes++ })
    }
    return (
        <div className="actions sticky">
            <button onClick={() => { closeModal() }} className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-accent hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    Cancel
                </span>
            </button>
            <button onClick={(e) => save(e)} className="rounded relative md-btn flex items-center px-3 justify-center text-black dark:text-white bg-primary hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                {loading
                    ? (<span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                        <svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>)
                    : (<span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                        Save
                    </span>)}
            </button>
        </div>
    )
}
export default SaveSection