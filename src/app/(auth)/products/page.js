import { getProducts } from "@/_lib/data-services";
import Heading from "@/Components/Heading";
import AddProducts from "@/Components/Products/AddProducts";
import Products from "@/Components/Products/Products";
import ProductsTableOperations from "@/Components/Products/ProductsTableOperations";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>All Products</Heading>
        <div className="flex items-center gap-4">
          <ProductsTableOperations />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <Products products={products} />
      </Suspense>
    </>
  );
}

export default ProductsPage;
