import React, { useState } from "react";
import Sidebar from "@/components/SideBar/Sidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import CartModal from "@/components/CartModal/CartModal";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const Store = () => {
  const { theme, setTheme } = useTheme();
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [viewOption, setViewOption] = useState<string>("all");

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleAddToCart = (product: any, quantity: number) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const medicines = [
    {
      id: 1,
      name: "Pain Relievers",
      price: "$10",
      image: "/images/medicine1.jpg",
    },
    {
      id: 2,
      name: "Antibiotics",
      price: "$20",
      image: "/images/medicine2.jpg",
    },
  ];

  const equipments = [
    {
      id: 3,
      name: "Blood Pressure Monitor",
      price: "$50",
      image: "/images/equipment1.jpg",
    },
    {
      id: 4,
      name: "Thermometer",
      price: "$20",
      image: "/images/equipment2.jpg",
    },
  ];

  const dailyEssentials = [
    { id: 5, name: "Face Masks", price: "$5", image: "/images/essential1.jpg" },
    {
      id: 6,
      name: "Hand Sanitizer",
      price: "$10",
      image: "/images/essential2.jpg",
    },
  ];

  const filteredProducts = () => {
    switch (viewOption) {
      case "medicines":
        return medicines;
      case "equipments":
        return equipments;
      case "dailyEssentials":
        return dailyEssentials;
      default:
        return [...medicines, ...equipments, ...dailyEssentials];
    }
  };

  const isDarkMode = theme === "dark";
  const textColor = isDarkMode ? "text-white" : "text-black";

  return (
    <div
      className={`h-screen flex ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar */}
      <Sidebar
        toggleTheme={toggleTheme}
        textColor={textColor}
        bgSidebar={isDarkMode ? "bg-gray-800" : "bg-blue-200"}
        handleSignOut={() => {
          /* Your sign-out logic here */
        }}
      />

      {/* Main Content */}
      <main className="flex-grow p-8 overflow-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">STORE</h2>
          <div className="flex space-x-4">
            <FaShoppingCart
              className="text-3xl cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>

        {/* View Options */}
        <div className="flex space-x-4 mb-8">
          {["all", "medicines", "equipments", "dailyEssentials"].map(
            (option) => (
              <button
                key={option}
                className="px-4 py-2 bg-blue-300 text-white rounded-full hover:bg-blue-400 transition duration-300"
                onClick={() => setViewOption(option)}
              >
                {option === "all"
                  ? "View All"
                  : option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            )
          )}
        </div>

        {/* Product Grid */}
        <ProductGrid
          products={filteredProducts()}
          onAddToCart={handleAddToCart}
          isDarkMode={theme === "dark"}
        />

        {/* Cart Modal */}
        {cartOpen && (
          <CartModal
            cart={cart}
            setCartOpen={setCartOpen}
            onRemoveFromCart={handleRemoveFromCart}
            theme={theme ?? "light"}
          />
        )}
      </main>
    </div>
  );
};

export default Store;
