import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CheckoutOrder from "./components/CheckoutOrder/CheckoutOrder";
import InformationContainer from "./components/InformationContainer";
import ProductContainer from "./components/ProductContainer/ProductContainer";
import SearchSettingContainer from "./components/SearchSettingContainer/SearchSettingContainer";
import ShoppingBasket from "./components/ShoppingBasket/ShoppingBasket";
import { useActions } from "./hooks/useActions";

function App() {
  const { fetchBrands, fetchPoducts } = useActions();

  useEffect(() => {
    fetchBrands();
    fetchPoducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <InformationContainer />
                <ProductContainer />
              </div>
            }
          />
          <Route path="/сheckout-order" element={<CheckoutOrder />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
