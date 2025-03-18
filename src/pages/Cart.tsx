import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg">
              <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Remove</button>
            </div>
          ))}
          <div className="text-right text-lg font-bold">Total: ${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
