import { useContext } from 'react'
import { Context } from '../../product-page'
import './style.css'
const AddAttrSection = ({ label, name, error,setError }) => {
    const {state,dispatch} = useContext(Context)
    const onKeyPress=(event) => {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }}
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        dispatch({type:'updateProduct',product:{...state.product,[name]:value}})
    }
    let className = "text-item-container"
    try {
        if(error) className = "text-item-container md-has-error"
    } catch (error) {
    }
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
                            {/* Input */}
                            <div className={className}> {/*add class md-has-error if error happennd*/}
                                <div className="relative flex-grow min-w-0">
                                    {(name==='price' || name ==='quantity')
                                        ?<input onChange={(e)=>handleChange(e)} value={(state.product)?(state.product[name]) : ('')} autoComplete='off' name={name} onKeyPress={(e)=>onKeyPress(e)} className="inline-input" />
                                        :<input onClick={()=>setError('')}  onChange={(e)=>handleChange(e)} value={(state.product)?(state.product[name]) : ('')} autoComplete='off' name={name} className="inline-input" />
                                    }
                                    <div className="absolute top-0 opacity-60 pointer-events-none pl-1 width-full line-clamp-1 break-all" />
                                </div>
                            </div>
                            {/* Input */}
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

export default AddAttrSection