import './style.css'
import { useContext, useState } from 'react'
import { Context } from '../../product-page'

const AddSubAttrSection = ({ label }) => {
    const { state } = useContext(Context)
    return (
        <div className='input-container'>
            {/* <Label> */}
            <div className="label">
                <div className="">{label || 'Label'}</div>
            </div>
            {/* <Label> */}
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                {state.product &&
                    state.product.listAttrDetailShort.map((attribute, index) => (
                        <div key={index} className='xl:order-none'>
                            <Input index={index} placeholder={attribute.attributeName} name={'value'} value={attribute.value}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const Input = ({ placeholder,index ,name,value }) => {
    const { state, dispatch } = useContext(Context)
    const attr =  state.product.listAttrDetailShort.filter((attribute,i)=>index === i)
    const [attribute,setAttribute] = useState(attr[0])
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        const listAttrDetailShort = state.product.listAttrDetailShort
        setAttribute({...attribute,[name]:value})
        const newArr = listAttrDetailShort.map((attr,i) => {
            if (index === i) return {...attribute,[name]:value}
            return attr
        })
        dispatch({ type: 'updateProduct', product: { ...state.product, listAttrDetailShort: newArr } })
    }   
    return (
        <div className='md-input'>
            <div className='md-inputwrap md-populated'>
                <input autoComplete='off' onChange={(e)=>{handleChange(e)}}  name={name} value={attribute.value} className='placeholder-current p-4' />
                <div className="md-border" />
                <label className='md-label'>{placeholder || ''}</label>
            </div>
        </div>
    )
}

export default AddSubAttrSection