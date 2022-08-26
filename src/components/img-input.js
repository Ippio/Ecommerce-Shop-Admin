const ImageInput = () => {
    const handleFileChange = ()=>{
        const file = e.target.file[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload=()=>{
            setnewProduct({...newProduct,urlPicture:file.name})
        }   
    }
    return (
        <input id="file" type="file" name="file" multiple="multiple" accept="image/jpeg,image/jpg,image/png,image/gif" onChange={()=>{}} style={{display:'none'}}/>
    )
}

export default ImageInput