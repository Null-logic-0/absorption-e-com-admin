import Filter from "../Products/Filter";
import SortBy from "../SortBy/SortBy";

function OrderTableOperations() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Filter
          filterField="filter"
          options={[
            {
              value: "all",
              label: "All",
            },
            {
              value: "pending",
              label: "Pending",
            },
            {
              value: "completed",
              label: "Completed",
            },
            {
              value: "cash",
              label: "Cash",
            },
            {
              value: "credit-card",
              label: "Credit-card",
            },
          ]}
        />
      </div>
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
