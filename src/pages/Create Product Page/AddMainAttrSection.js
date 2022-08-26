import './style.css'
import { useContext } from 'react'
import { Context } from '../new-product-page'
const AddAttrSection = ({ label ,name,error }) => {
    return (
        <div className="input-container">
            {/* Label */}
            <div className="label mt-0">
                <div>{label || 'Label'}</div>
            </div>
            {/* Label */}
            {/* Input */}
            <div>
                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <div>
                            <Input name={name}></Input>
                            {/* Error */}
                            <div className="stealth-error"><div>{error || ""}</div></div>
                            {/* Error */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Input */}
        </div>
    )
}

const Input = ({name}) => {
    const type = (name === 'price' || name ==='quantity')?'number': 'text'
    const { newProduct, setNewProduct,setError ,error} = useContext(Context)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setNewProduct({...newProduct,[name]:value})
    }
    const className = error[name]?("text-item-container md-has-error"):("text-item-container")
    return (
        <div className={className}> {/*add class md-has-error if error happennd*/}
            <div className="relative flex-grow min-w-0">
                <input autoComplete='off' type={type} name={name} onClick={()=>setError({...error,[name]:''})} onChange={(e)=>{handleChange(e)}} className="inline-input" />
                <div className="absolute top-0 opacity-60 pointer-events-none pl-1 width-full line-clamp-1 break-all" />
            </div>
        </div>
    )
}

export default AddAttrSection