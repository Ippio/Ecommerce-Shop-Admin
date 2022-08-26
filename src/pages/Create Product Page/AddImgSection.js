import './style.css'
import { Context } from '../new-product-page'
import { useContext } from 'react'
export const AddImgContainer = ({ preview }) => {
    const { newProduct,setNewProduct} = useContext(Context)
    return (
        <div className="wrap flex-grow-0">
            <div className="page-sizer">
                {(preview)
                    ? (<div className='page' style={{ backgroundImage: `url(${preview})`}}>
                        {/* Close Icon */}
                        <div className='close' onClick={()=>setNewProduct({ ...newProduct, urlPicture:''})}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="small text-white icon"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        {/* Close Icon */}
                    </div>)
                    : (<label htmlFor="file" className="page placeholder">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M12 5v14m-7-7h14"></path></svg>
                        <div class="text-center">Click to add image</div>
                    </label>)
                }
            </div>
        </div>
    )
}

// const ImageContainer = () => {
//     return (
//         <div className="wrap flex-grow-0">
//             <div className="page-sizer">
//                 <label className="page placeholder">
//                     <div className='page' style={{ backgroundImage: '' }}>
//                         {/* Close Icon */}
//                         <div className='close'>
//                             <svg data-v-20f285ec="" data-v-31ea508b="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="small text-white icon"><path d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//                         </div>
//                         {/* Close Icon */}
//                     </div>
//                 </label>
//             </div>
//         </div>
//     )
// }
