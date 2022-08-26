import React from "react";

const ViewModeBar = ()=>{
    return(
        <div className="controls mb-auto ml-auto" style={{'--left':'0px'}}>
            <div className="item hover:bg-slate-300 active ">
                <svg data-v-20f285ec="" data-v-326a31c8="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div className="item hover:bg-slate-300">
                <svg data-v-20f285ec="" data-v-326a31c8="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M21 3H3v7h18V3Zm0 11H3v7h18v-7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
            <div className="item hover:bg-slate-300">
                <svg data-v-20f285ec="" data-v-326a31c8="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec="" d="M10 3H3v7h7V3Zm11 0h-7v7h7V3Zm0 11h-7v7h7v-7Zm-11 0H3v7h7v-7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </div>
        </div>
    )
}

export default ViewModeBar