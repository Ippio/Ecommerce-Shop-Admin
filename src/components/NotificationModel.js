const NotificationModal = ({msg,show,closeModal}) => {
    const display = (show)?'':'none'
    return (
        <div
            x-show="modalOpen"
            x-transition
            className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
            style={{display:display}}
        >
            <div
                className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
            >
                <h3 className="pb-2 text-xl font-bold text-dark sm:text-2xl">
                    Request Sent Successfully
                </h3>
                <span
                    className="mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary"
                ></span>
                <p className="mb-10 text-base leading-relaxed text-body-color">
                    {msg ||"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"}
                </p>
                <div className="-mx-3 flex flex-wrap justify-center">
                    <div className="w-1/2 px-3">
                        <button onClick={closeModal}
                            className=" block w-full rounded-lg border mx-auto border-[#E9EDF9] p-3 text-center text-base font-medium text-dark transition bg-primary hover:border-orange-600 active:bg-orange-700 hover:text-white"
                        >
                            Close
                        </button>
                    </div>
                    {/* <div className="w-1/2 px-3">
                        <button
                            className="block w-full rounded-lg border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                        >
                            View Details
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default NotificationModal