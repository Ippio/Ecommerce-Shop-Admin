import './style.css'
import { useContext } from 'react'

import { Context } from '../new-product-page'
const AddSubAttrSection = ({ label }) => {
    const { newProduct, setNewProduct } = useContext(Context)
    const handleChange = (e) => {
        const id = e.target.id
        const name = e.target.name
        const value = e.target.value
        const listAttrDetailShort = newProduct.listAttrDetailShort
        const listAttribute = listAttrDetailShort.map((attribute) => {
            if (Number(attribute.displayOrder) === Number(id)) attribute[name] = value
            return attribute
        })
        setNewProduct({ ...newProduct, listAttrDetailShort: [...listAttribute] })
    }
    return (
        <div className='input-container'>
            {/* <Label> */}
            <div className="label">
                <div className="">{label || 'Label'}</div>
            </div>
            {/* <Label> */}
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8'>
                {newProduct.listAttrDetailShort.map((attribute, index) => (
                    <div key={index} className='xl:order-none'>
                        <Input id={attribute.displayOrder} placeholder={attribute.attributeName} name={'value'} handleChange={handleChange} />
                    </div>
                ))}
            </div>
        </div>
    )
}

const Input = ({ placeholder, name, handleChange, id }) => {
    const className = (name) ? ("md-inputwrap md-populated") : ("md-inputwrap")
    // const {newProduct} = useContext(Context) 
    // newProduct.listAttrDetailShort.forEach((attribute)=>{
    //     if(attribute.attributeName === name) value = attribute
    // })
    return (
        <div className='md-input'>
            <div className={className}>
                <input autoComplete='off' name={name} id={id} onChange={(e) => handleChange(e)} className='placeholder-current p-4' />
                <div className="md-border" />
                <label className='md-label'>{placeholder || ''}</label>
            </div>
        </div>
    )
}

export default AddSubAttrSection