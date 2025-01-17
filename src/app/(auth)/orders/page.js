import { getOrderItems, getOrders } from "@/_lib/data-services";
import Heading from "@/Components/Heading";
import Orders from "@/Components/Orders/Orders";
import OrderTableOperations from "@/Components/Orders/OrderTableOperations";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

async function OrdersPage() {
  const ordersData = await getOrderItems();

  const filteredOrders = Object.values(
    ordersData.reduce((acc, order) => {
      const key = `${order.customer_id}-${order.time}`;
      if (!acc[key]) {
        acc[key] = order;
      }
      return acc;
    }, {})
  );

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>Orders</Heading>
        <div className="flex gap-4 items-center">
          <OrderTableOperations />
        </div>
      </div>

      <Suspense fallback={<Spinner />}>
        <Orders orders={filteredOrders} />
      </Suspense>
    </>
  );
}

export default OrdersPage;
