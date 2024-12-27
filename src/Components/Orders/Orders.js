"use client";
import { useSearchParams } from "next/navigation";
import OrdersTable from "./OrdersTable";

function Orders({ orders }) {
  const searchParams = useSearchParams();

  const filterValue = searchParams.get("filter") || "all";
  const sortBy = searchParams.get("sortBy") || "created_at-asc";
  // Filter orders based on `filterValue`
  let filteredOrders = orders.filter((order) => {
    switch (filterValue) {
      case "pending":
        return order.order_status === "pending"; // Show only pending orders
      case "completed":
        return order.order_status === "completed"; // Show only completed orders
      case "cash":
        return order.payment_method === "cash"; // Show only cash payments
      case "credit-card":
        return order.payment_method === "credit-card"; // Show only credit card payments
      default:
        return true;
    }
  });

  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (field === "created_at") {
      // Sort by created_at (date)
      return (new Date(a.created_at) - new Date(b.created_at)) * modifier;
    } else if (field === "name") {
      // Sort by customer name (fullName)
      const nameA = a.customers?.fullName || "";
      const nameB = b.customers?.fullName || "";
      return nameA.localeCompare(nameB) * modifier;
    }
    return 0; // If no match, no sorting applied
  });

  return <OrdersTable data={sortedOrders} />;
}

export default Orders;
