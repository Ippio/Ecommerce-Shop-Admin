import { useContext, useState } from "react"
import removeVietnameseTones from "../../../utils/CharAssciConvert"
import axios from "axios"
// import convertImage from "../../utils/ConvertImage"
import FormatString from "../../../utils/FormatString"
import jsonToFormData from "../../../utils/getFormData"
import { Context } from "../../product-page"
const SaveSection = ({ setError }) => {
    const { state, dispatch } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    const requiredField = ['name', 'nameExt', 'price', 'brand', 'quantity']
    const errorFields = {}
    const errorMsg = 'Vui lòng nhập đủ thông tin'
    const cancel = (e) => {
        e.preventDefault()
        dispatch({ type: 'toggleModal', value: !state.modalToggle, product: null })
        setError({})
    }
    // console.log(state.product)
    const deleteItem = async (e) => {
        e.preventDefault()
        if(!deleteLoading){
            try {
                setDeleteLoading(true)
                console.log('delete')
                const deletedItem = await axios.delete(`http://localhost:5001/product/${state.product._id}`,)
                if (deletedItem) {
                    console.log(deletedItem)
                    setDeleteLoading(false)
                    dispatch({ type: 'refresh', value: !state.modalToggle, product: null, refreshTimes: ++state.refreshTimes })
                    // window.location.reload(false)
                }
            } catch (error) {
                console.log(error)
                setDeleteLoading(false)
            }
        }
    }
    const save = async (e) => {
        e.preventDefault()
        if(!loading){
            const check = requiredField.reduce((arr, field) => {
                if (!state.product[field]) {
                    arr.push(field)
                    return arr
                }
                return arr
            }, [])
            if (check.length !== 0) {
                requiredField.forEach((field) => {
                    if (!state.product[field]) {
                        errorFields[field] = errorMsg
                    }
                })
                setError({ ...errorFields })
            }
            else {
                const data = (state.product) ? { ...state.product, productType: state.product.productType._id, brand: (state.product.brand.id) || (state.product.brand._id), name: FormatString(state.product.name), nameExt: FormatString(state.product.nameExt), productNameAscii: removeVietnameseTones(state.product.nameExt), nameAscii: removeVietnameseTones(state.product.name) } : null
                const form_data = jsonToFormData(data)
                console.log(data)
                setLoading(true)
                try {
                    console.log('try')
                    const update = await axios.patch(`http://localhost:5001/product/${data._id}`, form_data)
                    if (update) {
                        console.log(update)
                        setLoading(false)
                        dispatch({ type: 'refresh', value: !state.modalToggle, product: null, refreshTimes: ++state.refreshTimes })
                        setError({})
                        // window.location.reload(false)
                    }
                } catch (error) {
                    console.log(error)
                    setLoading(false)
                }
            }
        }
    }
    return (
        <div className="actions sticky">
            <button onClick={(e) => { cancel(e) }} className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-accent hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    Cancel
                </span>
            </button>
            <button onClick={(e)=>{deleteItem(e)}} className="rounded relative md-btn flex items-center px-3 justify-center text-black dark:text-white bg-red-600 hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    {deleteLoading
                        ? (<svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>)
                        : ('Delete')}
                </span>
            </button>
            <button onClick={(e) => save(e)} className="rounded relative md-btn flex items-center px-3 justify-center text-black dark:text-white bg-primary hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    {loading
                        ? (<svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>)
                        : ('Save')}
                </span>
            </button>
        </div>
    )
}
export default SaveSection