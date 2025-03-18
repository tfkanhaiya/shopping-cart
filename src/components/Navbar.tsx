import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Fake Store
      </Link>
      <Link to="/cart" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
        <ShoppingCart className="w-5 h-5" />
        <span>Cart</span>
      </Link>
    </nav>
  );
};

export default Navbar;
