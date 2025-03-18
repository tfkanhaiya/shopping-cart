import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { useCart } from '../context/CartContext';

const ProductListing = () => {
  const { data, isLoading, error } = useProducts();
  const { addToCart } = useCart();

  if (isLoading) return <div className="text-center text-gray-700">Loading...</div>;
  if (error || !data) return <div className="text-center text-red-500">Error loading products.</div>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.isArray(data) && data.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductListing;
