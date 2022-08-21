import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "../../context/index";
import { addItem, removeItem } from "../../redux/reducer/CartReducer";
import { openModal } from "../../redux/reducer/CartModalReducer";
import CartModal from "./CartModal";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart, cartModal: modal } = useSelector((state) => state);

  console.log(modal);

  return (
    <>
      {modal.isActiv && <CartModal />}
      <main>
        <section>
          <ul className="bg-green-500">
            {data.map((item) => {
              return (
                <li
                  key={item.id}
                  className="text-white"
                  onClick={() => dispatch(addItem(item.id))}
                >
                  {item.productName}
                </li>
              );
            })}
          </ul>
          <ul className="bg-orange-500">
            {cart.cartItems.map((item, index) => {
              return (
                <li key={index} className="text-white">
                  {item.productName}
                  <button
                    className="text-red-500 bg-white"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    delete
                  </button>
                </li>
              );
            })}
          </ul>
          <div>
            <button
              onClick={() => dispatch(openModal())}
              className="bg-purple-400 text-white"
            >
              Vider le panier
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
