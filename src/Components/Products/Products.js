"use client";
import { useSearchParams } from "next/navigation";
import ProductsTable from "./ProductsTable";

function Products({ products }) {
  const searchParams = useSearchParams();

  const filterValue = searchParams.get("discount") || "all";

  let filteredProducts = products;

  if (filterValue === "no-discount") {
    filteredProducts = products.filter((product) => product.discount === 0);
  } else if (filterValue === "with-discount") {
    filteredProducts = products.filter((product) => product.discount > 0);
  }

  const sortBy = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedProducts = filteredProducts.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  return <ProductsTable filteredData={sortedProducts} />;
}

export default Products;
