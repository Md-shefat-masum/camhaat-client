import { Routes, Route } from "react-router-dom";
import { UseAuth } from "./Hooks/UseAuth";
import PrivateRoute from "./Routes/PrivateRoute";

import Admin from "./Views/Admin/Layouts/Admin";
import AdminHome from "./Views/Admin/Pages/AdminHome";
import {
    AdminOrderDetails,
    AdminOrders, AdminProductCreate, AdminProducts, AdminProfile, AdminUsers,
} from "./Views/Admin/Pages/AdminPages"
import {
    FrontendAbout,
    FrontendCart,
    FrontendCheckout,
    FrontendContact,
    FrontendDashboard,
    FrontendHome,
    FrontendLayout,
    FrontendProduct,
    FrontendProductDetails,
    FrontendUserDashboardAccount,
    FrontendUserDashboardHome,
    FrontendUserDashboardOrder,
    FrontendUserDashboardOrderDetails,
} from "./Views/Frontend/Pages/FrontendPages"

import NotFound from "./Views/Errors/NotFound";
import Login from "./Views/Frontend/auth/Login";
import Signup from "./Views/Frontend/auth/Signup";
import AdminRoute from "./Routes/AdminRoute";

function App() {
    const { checked_auth } = UseAuth();
    return (
        <div>
            {checked_auth ?

                <Routes>
                    {/* public routes */}
                    <Route path="signin" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="*" element={<NotFound />} />

                    <Route path="/" element={<FrontendLayout />}>
                        <Route index element={<FrontendHome />} />
                        <Route path="about" element={<FrontendAbout />} />
                        <Route path="contact" element={<FrontendContact />} />
                        <Route path="products" element={<FrontendProduct />} />
                        <Route path="product-details/:product_id" element={<PrivateRoute><FrontendProductDetails /></PrivateRoute>} />
                    </Route>

                    <Route path="/auth" element={<FrontendLayout />}>
                        <Route index element={<PrivateRoute><FrontendDashboard /></PrivateRoute>} />
                        <Route path="carts" element={<PrivateRoute><FrontendCart /></PrivateRoute>} />
                        <Route path="checkout" element={<PrivateRoute><FrontendCheckout /></PrivateRoute>} />
                    </Route>

                    <Route path="/auth" element={<FrontendLayout />}>
                        <Route path="profile" element={<PrivateRoute><FrontendDashboard /></PrivateRoute>} >
                            <Route index element={<PrivateRoute><FrontendUserDashboardHome /></PrivateRoute>} />
                            <Route path="orders" element={<PrivateRoute><FrontendUserDashboardOrder /></PrivateRoute>} />
                            <Route path="order-details/:id" element={<PrivateRoute><FrontendUserDashboardOrderDetails /></PrivateRoute>} />
                            <Route path="account-details" element={<PrivateRoute><FrontendUserDashboardAccount /></PrivateRoute>} />
                        </Route>
                    </Route>

                    {/* admin routes */}
                    <Route path="/dashboard" element={<AdminRoute><Admin /></AdminRoute>}>
                        <Route index element={<AdminHome />}></Route>
                        <Route path="orders" element={<AdminOrders />}></Route>
                        <Route path="order-details/:id" element={<AdminOrderDetails />}></Route>
                        <Route path="profile" element={<AdminProfile />}></Route>
                        <Route path="users" element={<AdminUsers />}></Route>
                        <Route path="products" element={<AdminProducts />}></Route>
                        <Route path="create-product" element={<AdminProductCreate />}></Route>

                    </Route>

                </Routes>
                :
                <section className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                    <div className="loader-box">
                        <div className="loader">
                            <div className="line bg-primary"></div>
                            <div className="line bg-primary"></div>
                            <div className="line bg-primary"></div>
                            <div className="line bg-primary"></div>
                        </div>
                    </div>
                </section>
            }
        </div>
    );
}

export default App;
