import { getProducts } from "@/_lib/data-services";
import ProductsTable from "@/Components/Products/ProductsTable";

async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <div>
        <h1 className="font-bold text-3xl">All Products</h1>
      </div>
      <ProductsTable data={products} />
    </>
  );
}

export default ProductsPage;
