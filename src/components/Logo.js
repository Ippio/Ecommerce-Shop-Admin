import React from "react";
import { NavLink } from "react-router-dom";
const Logo = ({display}) => {
    return (
        <NavLink to="/" className="flex items-center cursor-pointer" >
            <img src="https://tải.vn/images/logo.png" alt="" style={{height:'40px', width:'80px', display:display }} className="mr-2"></img>
        </NavLink>
    )
}

export default Logo