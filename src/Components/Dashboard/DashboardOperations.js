import Filter from "../Products/Filter";

function DashboardOperations() {
  return (
    <div className="flex gap-2 items-center">
      <Filter
        filterField="filter"
        options={[
          {
            value: "last 7 days",
            label: "Last 7 days",
          },
          {
            value: "last 30 days",
            label: "Last 30 days",
          },
          {
            value: "last 90 days",
            label: "Last 90 days",
          },
          {
            value: "one year",
            label: "One year",
          },
        ]}
      />
    </div>
  );
}

export default DashboardOperations;
