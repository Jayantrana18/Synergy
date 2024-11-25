import React, { useState } from "react";

const CartModal = ({
  cart,
  setCartOpen,
  onRemoveFromCart,
  theme,
}: {
  cart: any[];
  setCartOpen: (open: boolean) => void;
  onRemoveFromCart: (id: number) => void;
  theme: string;
}) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  const calculateTotal = () =>
    cart.reduce(
      (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
      0
    );

  return (
    <div
      className={`fixed top-0 right-0 w-2/5 h-full ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      } p-6 shadow-lg`}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Your Cart</h3>
        <button className="text-2xl" onClick={() => setCartOpen(false)}>
          &times;
        </button>
      </div>
      <div className="mt-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <span>{item.name}</span>
            <span>x{item.quantity}</span>
            <span>
              ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
            </span>
            <button
              onClick={() => onRemoveFromCart(item.id)}
              className={`text-red-500 ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              Remove
            </button>
          </div>
        ))}
        {cart.length > 0 ? (
          <>
            <div className="mt-4">
              <strong>Total: ${calculateTotal().toFixed(2)}</strong>
            </div>
            <div className="mt-4">
              <label>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />{" "}
                Cash
              </label>
              <label className="ml-4">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />{" "}
                Card/UPI (Unavailable)
              </label>
              {paymentMethod === "card" && (
                <p className="text-red-500">
                  Card/UPI is unavailable in your region.
                </p>
              )}
            </div>
          </>
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
