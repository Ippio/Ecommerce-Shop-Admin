
export const VNDFormat=(number)=>{
    const result = Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number)
    return result
}