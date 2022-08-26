import { Route, Routes } from "react-router-dom";
import LoginPage from '../pages/login-page'
import ProductPage from '../pages/product-page'
import CreateNewProductPage from '../pages/new-product-page'
import NotFound from '../pages/404'
import UserPage from "../pages/user-page";
import RequireAuth from "./RequireAuth";
import OrderPage from "../pages/order-page";
import Home from "../pages/home";
// const ROLES = {
//     'User': 2001,
//     'Editor': 1984,
//     'Admin': 5150
// }

const RouterSetup = () => {
    return (
            <Routes>
                {/* public route */}
                <Route exact path="/login" element={<LoginPage />}></Route>
                {/* protected route */} 
                <Route element={<RequireAuth />}>
                    <Route path="/product/:productType" element={<ProductPage/>}></Route>
                    <Route path="/product/create" element={<CreateNewProductPage />}></Route>
                    <Route path="/user" element={<UserPage/>}></Route>
                    <Route path="/order" element={<OrderPage/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                </Route>
                {/* catch all */}
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
    )
}

export default RouterSetup