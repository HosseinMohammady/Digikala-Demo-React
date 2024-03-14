import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Option from "./option";
import ProductsDetails from "./productsDetails";
import styled from "styled-components";
import { ShoppingCartProvider } from "./context/cartContext";
import ShoppingCartBasket from "./ShoppingCartBasket";

const AppContainer = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <ShoppingCartProvider>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="option" element={<Option />} />
            <Route path="/product/:id" element={<ProductsDetails />} />{" "}
            <Route path="shopping/basket" element={<ShoppingCartBasket />} />
            <Route
              path="/product/:id/shopping/basket"
              element={<ShoppingCartBasket />}
            />{" "}
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ShoppingCartProvider>
  );
}

export default App;
