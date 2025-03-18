import { Card, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
  addToCart: (product: any) => void;
}

const ProductCard: React.FC<ProductProps> = ({ product, addToCart }) => {
  return (
    <Card className="shadow-lg p-4">
      <CardContent>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-full object-contain mb-4"
        />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)}</p>
        <Button onClick={() => addToCart(product)} className="mt-3">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

