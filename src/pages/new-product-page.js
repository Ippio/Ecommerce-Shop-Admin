import PageTitle from '../layouts/page-title'
import BorderLine from '../components/border-line'
import SelectBox from './Create Product Page/SelectBox'
import AddAttrSection from './Create Product Page/AddMainAttrSection'
import { AddImgContainer } from './Create Product Page/AddImgSection'
import ImageInput from './Create Product Page/img-input'
import SaveSection from './Create Product Page/SaveSection'
import AddSubAttrSection from './Create Product Page/AddSubAttrSection'
import { createContext, useState } from 'react'
import listProductType from '../data/ProductType'
import BrandSelectBox from './Create Product Page/BrandSelectBox'

export const Context = createContext()
const productType = listProductType.reduce((arr, type) => {
  const item = {
    id:type.id,
    name: type.name,
    nameAscii: type.nameAscii,
    subName: type.subName
  }
  arr.push(item)
  return arr
}, [])
const NewProductForm = () => {
  const [error, setError] = useState({
    name: null,
    nameExt: null,
    brand: null,
    price: null,
  }) 
  const [newProduct, setNewProduct] = useState({
    name: null,
    nameAscii: null,
    nameExt: null,
    productNameAscii: '',
    productType: productType[0],
    brand: '',
    price: null,
    quantity:null,
    listAttrDetailShort: listProductType[0].listAttrDetailShort,
    freeShipping: false,
    urlPicture: ''
  })
  //set up preview img
  const preview = (newProduct.urlPicture) ? (URL.createObjectURL(newProduct.urlPicture)) : ('')
  //////////////////////
  return (
    <Context.Provider value={{ listProductType, newProduct, setNewProduct, setError, error }}>
      <div data-v-4a6a7272 className='container mb-4 p-6 wide'>
        <PageTitle title="Add New Product"></PageTitle>
        <div className='mb-2'>
          {/* <!Body> */}
          <div data-v-2e4d6ddf data-v-bbf0a5f8 className='mb-4'>
            <SelectBox label="Loại sản phẩm" ></SelectBox>
          </div>
          <BorderLine></BorderLine>
          {/* Form */}
          <div className='mb-4' style={{}}>
            <AddAttrSection label="Tên sản phẩm" name='nameExt' error={error.nameExt}></AddAttrSection>
            <AddAttrSection label="Tên" name='name' error={error.name}></AddAttrSection>
            <BrandSelectBox err={error.brand}></BrandSelectBox>
            <AddAttrSection label="Giá" name='price' error={error.price}></AddAttrSection>
            <AddAttrSection label="Số lượng" name='quantity' error={error.quantity}></AddAttrSection>
            <BorderLine></BorderLine>
            {/* <!Thuộc tính> */}
            <AddSubAttrSection></AddSubAttrSection>
            {/* <!Thuộc tính> */}
            <BorderLine></BorderLine>
            {/* <!Add Img> */}
            <div className='grid gap-3 mt-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6'>
              <AddImgContainer preview={preview}></AddImgContainer>
            </div>
            <ImageInput></ImageInput>
            {/* <!Add Img> */}
            <BorderLine></BorderLine>
            {/* <!Save Section> */}
            <div class="actions-cover"></div>
            <div class="actions-shadow"></div>
            <SaveSection></SaveSection>
            {/* <!Save Section> */}
          </div>
          {/* Form */}
          {/* <Body> */}
        </div>
      </div>
    </Context.Provider>
  )
}

export default NewProductForm