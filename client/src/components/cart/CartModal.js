import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/reducer/CartModalReducer";
import { clearCart } from "../../redux/reducer/CartReducer";

const CartModal = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute w-full h-full flex justify-center items-center"
      onClick={() => dispatch(closeModal())}
    >
      <form
        action=""
        onSubmit={(event) => event.preventDefault()}
        onClick={(event) => event.stopPropagation()}
        className="text-white flex justify-center items-center flex-col bg-red-500"
      >
        <h3>Voulez-vous vraiment vider votre panier ?</h3>
        <div>
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            className="bg-green-500"
          >
            Oui
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Non
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartModal;
