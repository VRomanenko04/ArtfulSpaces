import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Order from "./pages/order/Order";
import Examples from "./pages/examples/Examples";
import Contact from "./pages/contact/Contact";
import Calculator from "./pages/calculator/Calculator";
import Cabinet from "./pages/cabinet/Cabinet";
import Home from "./pages/home/Home";
import Layout from "./components/smart/Layout";
import { FormContextProvider } from "./context/FormContext";
import Payment from "./pages/payment/Payment";
import OrderRules from "./pages/orderRules/OrderRules";
import ProjectPage from "./components/simple/project-page/ProjectPage";

const App: React.FC = () => {
  return (
    <FormContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='order' element={<Order/>}/>
          <Route path='contact/order' element={<RedirectToOrder />}/>
          <Route path='examples' element={<Examples/>}/>
          <Route path='examples/:projectID' element={<ProjectPage/>}></Route>
          <Route path='contact' element={<Contact/>}/>
          <Route path='calculator' element={<Calculator/>}/>
          <Route path='cabinet' element={<Cabinet/>}/>
          <Route path='payment' element={<Payment/>}/>
          <Route path='howorder' element={<OrderRules/>}/>
        </Route>
      </Routes>
    </FormContextProvider>
  )
};

const RedirectToOrder: React.FC = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/order');
  }, [navigate]);

  return null;
};

export default App;
