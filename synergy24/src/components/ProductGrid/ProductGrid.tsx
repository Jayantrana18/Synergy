import React, { useState } from "react";
import {
  FaPills,
  FaMedkit,
  FaThermometer,
  FaHandHoldingMedical,
  FaHandsWash,
} from "react-icons/fa";
import { FaDroplet, FaMaskFace } from "react-icons/fa6";

const ProductGrid = ({
  products,
  onAddToCart,
  isDarkMode,
}: {
  products: any[];
  onAddToCart: (product: any, quantity: number) => void;
  isDarkMode: boolean;
}) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleAddToCart = (product: any) => {
    onAddToCart(product, quantities[product.id] || 1);
    setQuantities((prevState) => ({
      ...prevState,
      [product.id]: 1,
    }));
  };

  const handleQuantityChange = (productId: number, action: string) => {
    setQuantities((prevState) => {
      const currentQuantity = prevState[productId] || 1;
      const newQuantity =
        action === "increment" ? currentQuantity + 1 : currentQuantity - 1;
      return {
        ...prevState,
        [productId]: newQuantity < 1 ? 1 : newQuantity > 99 ? 99 : newQuantity,
      };
    });
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className={`flex flex-col items-center ${
            isDarkMode ? "bg-gray-700" : "bg-blue-200"
          } rounded-lg p-4 shadow-lg hover:shadow-xl transition duration-300`}
        >
          {product.name === "Pain Relievers" && (
            <FaPills className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}
          {product.name === "Antibiotics" && (
            <FaMedkit className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}
          {product.name === "Blood Pressure Monitor" && (
            <FaDroplet className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}
          {product.name === "Thermometer" && (
            <FaThermometer className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}

          {product.name === "Face Masks" && (
            <FaMaskFace className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}
          {product.name === "Hand Sanitizer" && (
            <FaHandsWash className="w-48 h-48 object-cover mb-4 rounded-lg" />
          )}
          <h3
            className={`font-bold text-lg ${
              isDarkMode ? "text-gray-300" : "text-black"
            }`}
          >
            {product.name}
          </h3>
          <p className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            {product.price}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <button
                className={`px-2 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-600 text-white"
                    : "bg-blue-300 text-white"
                } ${
                  isDarkMode ? "hover:bg-gray-500" : "hover:bg-blue-400"
                } transition duration-300`}
                onClick={() => handleQuantityChange(product.id, "decrement")}
              >
                -
              </button>
              <span className="mx-2">{quantities[product.id] || 1}</span>
              <button
                className={`px-2 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-600 text-white"
                    : "bg-blue-300 text-white"
                } rounded-full ${
                  isDarkMode ? "hover:bg-gray-500" : "hover:bg-blue-400"
                } transition duration-300`}
                onClick={() => handleQuantityChange(product.id, "increment")}
              >
                +
              </button>
            </div>
            <button
              className={`ml-4 px-6 py-2 ${
                isDarkMode ? "bg-gray-600 text-white" : "bg-blue-300 text-white"
              } rounded-full ${
                isDarkMode ? "hover:bg-gray-500" : "hover:bg-blue-400"
              } transition duration-300`}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
