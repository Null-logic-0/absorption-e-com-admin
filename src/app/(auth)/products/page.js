import { getProducts } from "@/_lib/data-services";
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
        <h1 className="font-bold text-3xl">All Products</h1>
        <div className="flex items-center gap-4">
          <AddProducts />
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
