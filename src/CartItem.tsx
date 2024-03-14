import { useState } from "react";
import { useShoppingCart } from "./context/cartContext";
import storeItems from "./products.json";
import { SlOptionsVertical } from "react-icons/sl";
import { isDesktop, isMobile, isTablet } from "react-device-detect";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const item = storeItems.find((i) => i.id === id);

  const price = item ? item.price : 0;
  const totalPrice = price * quantity;

  if (item == null) return null;

  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const formattedTotalPrice = totalPrice.toLocaleString();

  return (
    <>
      <div
        className="flex flex-row p-5"
        style={{
          height: isMobile
            ? "350px"
            : isTablet
            ? "250px"
            : isDesktop
            ? "250px"
            : "",
        }}
      >
        <div className=" lg:w-1/6 min-[320px]:w-2/6 h-6/6 max-[500px]:h-4/6 flex flex-col justify-between max-[500px]:mt-10">
          <div className="w-28 h-28 self-center cursor-pointer">
            <img
              src={item.imgUrl}
              alt="product image in your shopping basket"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div>
            <div className="w-full flex flex-column items-center justify-center">
              <div
                className="bg-[#fff] flex justify-between items-center p-2 rounded-lg self-center"
                style={{ border: "1px solid lightgray", width: "75%" }}
              >
                <button
                  className="text-rose-600 text-2xl"
                  onClick={() => increaseCartQuantity(Number(id))}
                >
                  +
                </button>
                <span className="text-rose-600 text-2xl">{quantity}</span>
                <button
                  className="text-rose-600 text-2xl"
                  onClick={() => decreaseCartQuantity(Number(id))}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-between mr-2 max-[500px]:mt-10 max-[500px]:h-4/6 max-[500px]:mr-5">
          <p className="text-basic font-semibold">{item.description}</p>
          <div className="flex mb-2">
            <p className="text-xl font-semibold">{formattedTotalPrice}</p>
            <span className="text-lg font-medium mr-1">تومان</span>
          </div>
        </div>

        {!isMobile ? (
          <div className="w-4/6 flex flex-col justify-between items-end ">
            <SlOptionsVertical color="#777" className="cursor-pointer  " />
            <span className="text-sm font-medium text-cyan-500 cursor-pointer block max-[500px]:w-32">
              انتقال به خرید بعدی &gt;
            </span>
          </div>
        ) : isTablet ? (
          <div className="w-4/6 flex flex-col justify-between items-end ">
            <SlOptionsVertical color="#777" className="cursor-pointer  " />
            <span className="text-sm font-medium text-cyan-500 cursor-pointer block max-[500px]:w-32">
              انتقال به خرید بعدی &gt;
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default CartItem;
