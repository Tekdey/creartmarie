import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../data";
import {
  increaseItem,
  decreaseItem,
  clearItem,
  calculateTotal,
  removeItem,
} from "../../redux/reducer/CartReducer";
import { openModal } from "../../redux/reducer/CartModalReducer";
import CartModal from "./CartModal";
import { ChevronDown, ChevronUp, CloseIcon } from "../../icons";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, cartModal: modal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);

  if (cart.cartItems.length === 0) {
    return (
      <h3 className="uppercase font-semibold text-5xl text-white text-center">
        Panier vide ...
      </h3>
    );
  }

  return (
    <>
      {modal.isActiv && <CartModal />}
      <main className="flex flex-col justify-center items-center">
        <h1 className="uppercase font-semibold text-3xl  xs:text-4xl md:text-5xl text-white text-center">
          Votre panier
        </h1>
        <section className="w-full sm:w-10/12 xl:w-7/12">
          <ul>
            {cart.cartItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center justify-between h-sm border-b-[0.15em] border-solid border-slate-100 h-[100px] bg-white"
                >
                  <img
                    src={`/assets/image/${item.image}.jpg`}
                    className="h-20 w-20 rounded-md"
                    alt={item.productName}
                  />
                  <ul className="flex flex-col justify-center w-[70%]">
                    <li className="font-normal text-slate-600">
                      {item.category}
                    </li>
                    <li className="font-semibold ">{item.productName}</li>
                    <li className="font-normal text-sm text-red-500 block sm:hidden">
                      supprimer
                    </li>
                  </ul>
                  <span className=" w-[15%] flex items-center justify-center whitespace-nowrap">
                    {item.price} €
                  </span>
                  <div className="flex flex-col justify-center items-center gap-1 w-[5%] mx-2 sm:mx-10">
                    <button
                      className="font-bold"
                      onClick={() => dispatch(increaseItem({ id: item.id }))}
                    >
                      <ChevronUp />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className="font-bold"
                      onClick={() => {
                        if (item.amount > 1) {
                          dispatch(decreaseItem({ id: item.id }));
                        } else {
                          dispatch(removeItem({ id: item.id }));
                        }
                      }}
                    >
                      <ChevronDown />
                    </button>
                  </div>
                  <button
                    className="justify-center items-center gap-10 text-red-500 cursor-pointer w-[5%] hidden sm:flex"
                    onClick={() => dispatch(removeItem({ id: item.id }))}
                  >
                    <CloseIcon />
                  </button>
                </li>
              );
            })}
          </ul>

          <footer className="flex flex-col items-center">
            <hr className="border-t-[0.15em] border-solid border-black w-full mt-10" />
            <div className="cart-total w-full">
              <h4 className="capitalize flex justify-between py-5 font-semibold tracking-[0.2em]">
                <p>total</p>
                <span>{cart.total.toFixed(2)} €</span>
              </h4>
            </div>
            <button
              onClick={() => dispatch(openModal())}
              className="border-2 border-solid bg-white text-red-500 uppercase font-semibold text-xl p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors"
            >
              Vider le panier
            </button>
          </footer>
        </section>
      </main>
    </>
  );
};

export default Cart;
