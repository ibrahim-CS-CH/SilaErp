import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout"
import Home from "../Components/Home"
import Products from "../Components/Product/Products"
import Invoices from "../Components/Invoices/Invoices"
import Suppliers from "../Components/Suppliers/Suppliers"
import Clients from "../Components/Clients/Clients"
import Transactions from "../Components/Transactions"
import Invventories from "../Components/Invventories"
import AddProduct from "../Components/Product/AddProduct"
import Category from "../Components/Category/Category"
import AddCategory from "../Components/Category/AddCategory"
import AddSupplier from "../Components/Suppliers/AddSupplier"
import AddClient from "../Components/Clients/AddClient"
import Login from "../Components/Login"
import RequiredAuth from "../Required/RequiredAuth"
import PersistLogin from "../Components/PersistLogin"
const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth />}>
            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />}/>

              <Route path="products" element={<Products />}/>
              <Route path="invoices" element={<Invoices />}/>
              <Route path="suppliers" element={<Suppliers />}/>
              <Route path="clients" element={<Clients />}/>
              <Route path="tranactions" element={<Transactions />}/>
              <Route path="inventories" element={<Invventories />}/>
              <Route path="add-product" element={<AddProduct />}/>
              <Route path="categories" element={<Category />}/>
              <Route path="add-category" element={<AddCategory />}/>
              <Route path="add-supplier" element={<AddSupplier />}/>
              <Route path="add-client" element={<AddClient />}/>
            </Route>
          </Route>

        </Route>
        {/* <Route path="/" element={<Layout />} > */}
          {/* <Route path="home" element={<Home />}/>
          <Route path="products" element={<Products />}/>
          <Route path="invoices" element={<Invoices />}/>
          <Route path="suppliers" element={<Suppliers />}/>
          <Route path="clients" element={<Clients />}/>
          <Route path="tranactions" element={<Transactions />}/>
          <Route path="inventories" element={<Invventories />}/>
          <Route path="add-product" element={<AddProduct />}/>
          <Route path="categories" element={<Category />}/>
          <Route path="add-category" element={<AddCategory />}/>
          <Route path="add-supplier" element={<AddSupplier />}/>
          <Route path="add-client" element={<AddClient />}/> */}
        {/* </Route> */}
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default CustomRoutes