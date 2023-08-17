import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const handleShowCart = () => {
    setIsCartShown(true)
  }

  const handleCloseCart = () => {
    setIsCartShown(false)
  }

  return (
    <CartProvider>
      <Header showCart={handleShowCart}/>
      {isCartShown && <Cart onClose={handleCloseCart} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
