import { useContext, useState } from "react"
import { Context } from "../new-product-page"
import removeVietnameseTones from "../../utils/CharAssciConvert"
import axios from "axios"
import FormatString from "../../utils/FormatString"
import jsonToFormData from "../../utils/getFormData"
import ErrorModal from '../../components/ErrorModal'
import NotificationModel from '../../components/NotificationModel'
const SaveSection = () => {
    const [showErrorModal, setShowErrorModal] = useState(false)
    const [showNotiModal, setShowNotiModal] = useState(false)
    const { newProduct, setError } = useContext(Context)
    const [loading, setLoading] = useState(false)
    const requireField = ['name', 'nameExt', 'brand', 'price','quantity']
    const state = {}
    const errorMsg = 'Vui lòng nhập đủ thông tin'
    const save = async (e) => {
        e.preventDefault()
        if(!loading){
            const check = requireField.reduce((arr, field) => {
                if (!newProduct[field]) {
                    arr.push(field)
                    return arr
                }
                return arr
            }, [])
            if (check.length !== 0) {
                requireField.forEach((field) => {
                    if (!newProduct[field]) {
                        state[field] = errorMsg
                    }
                })
                setError({ ...state })
            }
            else {
                setLoading(true)
                const data = { ...newProduct, productType: newProduct.productType.id, brand: newProduct.brand.id, name: FormatString(newProduct.name), nameExt: FormatString(newProduct.nameExt), productNameAscii: removeVietnameseTones(newProduct.nameExt), nameAscii: removeVietnameseTones(newProduct.name) }
                const form_data = jsonToFormData(data)
                try {
                    const upload = await axios.post('http://localhost:5001/product', form_data)
                    if (upload) {
                        setLoading(false)
                        console.log(upload)
                        setShowNotiModal(true)
                    }
                } catch (error) {
                    setLoading(false)
                    console.log(error)
                    setShowErrorModal(true)
                }
            }
        }
    }
    return (
        <div className="actions sticky">
            <button className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-accent hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    Cancel
                </span>
            </button>
            <button onClick={(e) => { save(e) }} className="rounded relative md-btn flex items-center px-3 justify-center text-black dark:text-white bg-primary hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    {loading
                        ? (<svg class="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>)
                        : ('Save')}
                </span>
            </button>
            <ErrorModal show={showErrorModal} closeModal={()=>setShowErrorModal(false)} msg='Something wrong happened' />
            <NotificationModel show={showNotiModal} closeModal={()=>setShowNotiModal(false)} msg='Tạo thành công' />
        </div>
    )
}
export default SaveSection