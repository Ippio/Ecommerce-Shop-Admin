import { useContext } from "react"
import { Context } from "../../product-page"

const ImageInput = () => {
    const {state,dispatch} = useContext(Context)
    const fileSelectedHandle = (e)=>{
        dispatch({type:'updateProduct',product:{...state.product,urlPicture:e.target.files[0]}})
    }
    return (
        <input onChange={(e)=>fileSelectedHandle(e)} id="file" type="file" name="file" multiple="multiple" accept="image/jpeg,image/jpg,image/png,image/gif" style={{ display: 'none' }} />
    )
}

export default ImageInput