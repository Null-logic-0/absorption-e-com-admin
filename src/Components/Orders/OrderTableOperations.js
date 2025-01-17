import SortBy from "../SortBy/SortBy";

function OrderTableOperations() {
  return (
    <>
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "date", label: "Sort by Date" },
        ]}
      />
    </>
  );
}

export default OrderTableOperations;
