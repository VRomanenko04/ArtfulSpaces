import { Route, Routes } from "react-router-dom";
import Order from "./pages/order/Order";
import Examples from "./pages/examples/Examples";
import Contact from "./pages/contact/Contact";
import Calculator from "./pages/calculator/Calculator";
import Cabinet from "./pages/cabinet/Cabinet";
import Home from "./pages/home/Home";
import Layout from "./components/smart/Layout";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='examples' element={<Examples/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='calculator' element={<Calculator/>}/>
        <Route path='cabinet' element={<Cabinet/>}/>
      </Route>
    </Routes>
  )
}

export default App;
