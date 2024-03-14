import { FiShoppingCart } from "react-icons/fi";
import { useShoppingCart } from "./context/cartContext";
import ShoppingCartBasket from "./ShoppingCartBasket";
import { Link } from "react-router-dom";

const shoppingBasket = () => {
  const { cartQuanitity } = useShoppingCart();

  return (
    <>
      <div className="flex flex-row justify-end">
        <Link to="shopping/basket">
          <button className="relative" onClick={ShoppingCartBasket}>
            <FiShoppingCart size={28} className="ml-5" />
            <div
              className="bg-rose-500 text-[#fff] items-center justify-center rounded-lg w-5 h-5 text-sm absolute"
              style={{ right: 0, bottom: 0, transform: "translate(50%, 40%)" }}
            >
              {cartQuanitity}
            </div>
          </button>
        </Link>
      </div>
    </>
  );
};

export default shoppingBasket;
