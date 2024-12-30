"use client";
import Stat from "./Stat";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { TiShoppingCart } from "react-icons/ti";
import { LuClipboardList } from "react-icons/lu";
import { formatCurrency } from "@/_helpers/formatCurrency";
import { useSearchParams } from "next/navigation";
import SalesChart from "./SalesChart";

function Stats({ stats, totalProducts }) {
  const searchParams = useSearchParams();

  // Get filter and sort values from URL params
  const filterValue = searchParams.get("filter") || "last 7 days";
  const sortBy = searchParams.get("sortBy") || "created_at-asc";

  // Get current date
  const now = new Date();

  // Filter the data based on the filterValue
  const filteredData = stats.filter((stat) => {
    const itemDate = new Date(stat.created_at);

    switch (filterValue) {
      case "last 7 days":
        return itemDate >= new Date(now.setDate(now.getDate() - 7));
      case "last 30 days":
        return itemDate >= new Date(now.setDate(now.getDate() - 30));
      case "last 90 days":
        return itemDate >= new Date(now.setDate(now.getDate() - 90));
      case "one year":
        return itemDate >= new Date(now.setFullYear(now.getFullYear() - 1));
      default:
        return true; // No filtering
    }
  });

  // Sort the filtered data based on sortBy
  const sortedData = [...filteredData].sort((a, b) => {
    const [field, direction] = sortBy.split("-");
    const dirMultiplier = direction === "asc" ? 1 : -1;

    return a[field] > b[field] ? dirMultiplier : -dirMultiplier;
  });
  const totalOrders = sortedData.length;
  const totalSales = sortedData.reduce(
    (acc, cur) =>
      (cur.product_id.price - cur.product_id.discount) * cur.quantity + acc,
    0
  );

  const salesChartData = sortedData.reduce((acc, cur) => {
    const date = new Date(cur.created_at).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    const sales =
      (cur.product_id.price - cur.product_id.discount) * cur.quantity;

    const existing = acc.find((item) => item.label === date);
    if (existing) {
      existing.totalSales += sales;
    } else {
      acc.push({ label: date, totalSales: sales });
    }

    return acc;
  }, []);

  return (
    <>
      <div className="flex justify-center gap-8 items-center ">
        <Stat
          title="Total Products"
          color="bg-orange-200"
          icon={<TiShoppingCart className="w-12 h-12 text-orange-800" />}
          value={totalProducts}
        />
        <Stat
          title="Total Orders"
          color="bg-purple-200"
          icon={<LuClipboardList className="w-12 h-12 text-purple-800" />}
          value={totalOrders}
        />
        <Stat
          title="Total Sales"
          color="bg-green-100"
          icon={<HiOutlineBanknotes className="w-12 h-12 text-green-700" />}
          value={formatCurrency(totalSales)}
        />
      </div>
      <SalesChart data={salesChartData} />
    </>
  );
}

export default Stats;
