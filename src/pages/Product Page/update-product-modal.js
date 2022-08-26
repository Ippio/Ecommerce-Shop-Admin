import BorderLine from '../../components/border-line'
import AddAttrSection from './Update Product Modal/AddMainAttrSection'
import { AddImgContainer } from './Update Product Modal/AddImgSection'
import ImageInput from './Update Product Modal/img-input'
import SaveSection from './Update Product Modal/SaveSection'
import AddSubAttrSection from './Update Product Modal/AddSubAttrSection'
import BrandSelectBox from './Update Product Modal/BrandSelectBox'
import { useContext, useState } from 'react'
import { Context } from '../product-page'
import listProductType from '../../data/ProductType'

const UpdateModal = () => {
    const {state} = useContext(Context)
    const [error, setError] = useState({})
    const display = (state.modalToggle)?(''):'none'
    const [image,setImage] =  useState(null)
    let preview = ''
    // console.log(state)
    const replaceUrl = (str)=>{
        str = str.replace(/\\/g,"/")
        return str
    }
    try{
        preview =(state.product)?(URL.createObjectURL(state.product.urlPicture)):('')
    }catch(error){
        const url = 'http://localhost:5001/'
        preview = (state.product.urlPicture)?(url.concat(replaceUrl(state.product.urlPicture))):('')
    }
    return (
        <div data-v-5bbf12c8 data-v-7c7abafc className="md-modal self-center justify-center flex-wrap" style={{ alignItems: 'center', display: display }}>
            <div data-v-5bbf12c8 data-v-b48205a2 class="md-modal__shade no-blur"></div>
            <div data-v-5bbf12c8 data-v-3ad5e20a className="md-modal__box flex-grow" style={{ maxWidth: 'calc(1440px - 3rem)', maxHeight: 'calc(100% - 3rem)' }}>
                {/* <!----> */}
                <div data-v-7c7abafc className="bg-background rounded flex flex-col" style={{}}>
                    <div data-v-4a6a7272 className='container mb-4 p-6 wide'>
                        <Header name="Cập nhật sản phẩm" setError={setError}></Header>
                        <div className='mb-2'>
                            {/* <!Body> */}
                            {/* Form */}
                            <div className='mb-4' style={{}}>
                                <AddAttrSection label="Tên sản phẩm" name='nameExt' error={error.nameExt} setError={setError}></AddAttrSection>
                                <AddAttrSection label="Tên" name='name' error={error.name} setError={setError}></AddAttrSection>
                                <BrandSelectBox listProductType={listProductType}></BrandSelectBox>
                                <AddAttrSection label="Giá" name='price' error={error.price}></AddAttrSection>
                                <AddAttrSection label="Số lượng" name='quantity' error={error.quantity}></AddAttrSection>
                                <BorderLine></BorderLine>
                                <BorderLine></BorderLine>
                                {/* <!Thuộc tính> */}
                                <AddSubAttrSection label = "Thuộc tính sản phẩm"></AddSubAttrSection>
                                {/* <!Thuộc tính> */}
                                <BorderLine></BorderLine>
                                {/* <!Add Img> */}
                                <div className='grid gap-3 mt-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 3xl:grid-cols-6'>
                                    <AddImgContainer image={image} setImage={setImage} preview={preview}></AddImgContainer>
                                </div>
                                <ImageInput></ImageInput>
                                {/* <!Add Img> */}
                                <BorderLine></BorderLine>
                                {/* <!Save Section> */}
                                <div class="actions-cover"></div>
                                <div class="actions-shadow"></div>
                                <SaveSection setError={setError}></SaveSection>
                                {/* <!Save Section> */}
                            </div>
                            {/* Form */}
                            {/* <Body> */}
                        </div>
                    </div>
                </div>
                {/* <!----> */}
            </div>
        </div>
    )
}

const Header = ({setError}) => {
    const {state,dispatch} = useContext(Context)
    const closeModal = ()=>{ 
        dispatch({type:'toggleModal', value:!state.modalToggle,product:null})
        setError({})
    }
    return (
        <div data-v-7c7abafc className='flex text-xl font-bold'>
            Product type
            <button onClick={()=>closeModal()} data-v-6b3fd699 className='rounded relative md-btn flex items-center px-3 ml-auto flex-shrink-0 justify-center  rounded-full px-0' style={{ minHeight: '32px', minWidth: '32px' }}>
                <div data-v-6b3fd699="" class="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                <span data-v-6b3fd699="" class="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="med text-currentColor icon"><path data-v-20f285ec="" d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
            </button>
        </div>
    )
}

export default UpdateModal