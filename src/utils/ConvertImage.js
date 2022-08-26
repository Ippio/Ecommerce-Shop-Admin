const convertImage = (value)=>{
    const formData = new FormData()
    formData.append('image',value,value.name)
    return formData
}
export default convertImage