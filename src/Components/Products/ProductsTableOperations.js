import SortBy from "../SortBy/SortBy";
import AddProducts from "./AddProducts";
import Filter from "./Filter";

function ProductsTableOperations() {
  return (
    <>
      <AddProducts />
      <div className="flex gap-2 items-center">
        <Filter
          filterField="discount"
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "no-discount",
              label: "No discount",
            },
            {
              value: "with-discount",
              label: "With discount",
            },
          ]}
        />
      </div>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "price-asc", label: "Sort by Price (low-first)" },
          { value: "price-desc", label: "Sort by Price (high-first)" },
          { value: "maxCapacity-asc", label: "Sort by Capacity (low-first)" },
          {
            value: "maxCapacity-desc",
            label: "Sort by Capacity (high-first)",
          },
        ]}
      />
    </>
  );
}

export default ProductsTableOperations;
