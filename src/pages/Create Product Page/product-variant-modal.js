import Input from '../../components/ui/input-withplacehoder'
import ImgInput from '../../components/ui/img-input'
import ImgSection from '../../components/ui/add-img-section'
import SelectBox from '../../components/ui/select-box-with-placeholder'
const Modal = () => {
    return (
        <div data-v-5bbf12c8 data-v-7c7abafc className="md-modal self-center justify-center flex-wrap" style={{ alignItems: 'center' }}>
            <div data-v-5bbf12c8 data-v-b48205a2 class="md-modal__shade no-blur"></div>
            <div data-v-5bbf12c8 data-v-3ad5e20a className="md-modal__box flex-grow" style={{ maxWidth: 'calc(1440px - 3rem)', maxHeight: 'calc(100% - 3rem)' }}>
                {/* <!----> */}
                <div data-v-7c7abafc className="bg-background rounded flex flex-col" style={{}}>
                    <Header name='Storagae'></Header>
                    <div data-v-7c7abafc className='text-sm px-6 pb-5 first:pt-4'>
                        {/* <!----> */}
                        <div className='my-2' style={{minWidth:'300px'}}>
                            <SelectBox></SelectBox>
                        </div>
                        <div data-v-bbf0a5f8 data-v-2e4d6ddf className='grid grid-cols-2 gap-4 '>
                            <Input label='Color'></Input>
                            <Input label='Quantity'></Input>
                        </div>
                        {/* <!----> */}
                        <div className='grid grid-cols-5'>
                            <ImgSection></ImgSection>
                            <ImgInput></ImgInput>
                        </div>
                    </div>
                    <SaveSectione></SaveSectione>
                </div>
                {/* <!----> */}
            </div>
        </div>
    )
}

const SaveSectione = () => {
    return (
        <div className='flex flex-wrap gap-4 items-end justify-end mt-auto p-4 pt-0'>
            <button data-v-6b3fd699 data-v-2e4d6ddf className="rounded relative md-btn flex items-center px-3 justify-center text-black bg-accent hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    Cancel
                </span>
            </button>
            <button data-v-6b3fd699 data-v-2e4d6ddf className="rounded relative md-btn flex items-center px-3 justify-center text-black dark:text-white bg-primary hover:bg-accent-darken active:bg-accent-darken2 dark:bg-accent-lighten2 dark:hover:bg-accent-lighten dark:active:bg-accent px-6" style={{ minHeight: '48px', minWidth: '220px' }}>
                <span data-v-6b3fd699 className="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}>
                    Save
                </span>
            </button>
        </div>
    )
}

const Header = () => {
    return (
        <div data-v-7c7abafc className='flex text-xl px-6 py-4'>
            Product Variant
            <button data-v-6b3fd699 className='rounded relative md-btn flex items-center px-3 ml-auto flex-shrink-0 justify-center  rounded-full px-0' style={{ minHeight: '32px', minWidth: '32px' }}>
                <div data-v-6b3fd699="" class="bg opacity-0 hover:opacity-20 active:opacity-40 dark:hover:opacity-30 dark:active:opacity-10 bg-shade-mid"></div>
                <span data-v-6b3fd699="" class="flex items-center justify-center font-medium select-none" style={{ pointerEvents: 'none' }}><svg data-v-20f285ec="" data-v-6b3fd699="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="med text-currentColor icon"><path data-v-20f285ec="" d="M18 6 6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg> </span>
            </button>
        </div>
    )
}

export default Modal