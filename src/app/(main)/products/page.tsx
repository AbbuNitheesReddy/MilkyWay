import { products } from "@/lib/data";
import { ProductCard } from "../_components/product-card";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Fresh Selection</h1>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
          Browse our collection of high-quality dairy products, delivered fresh to you.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
