import { Context } from '../new-product-page'
import { useContext } from 'react'

const ImageInput = () => {
    const { newProduct, setNewProduct } = useContext(Context)
    const fileSelectedHandle = (e) => {
        setNewProduct({ ...newProduct, urlPicture: e.target.files[0] })
    }
    return (
        <input id="file" type="file" name="file" multiple="multiple" accept="image/jpeg,image/jpg,image/png,image/gif" onChange={(e) => { fileSelectedHandle(e) }} style={{ display: 'none' }} />
    )
}

export default ImageInput