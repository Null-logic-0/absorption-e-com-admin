import { getOrders } from "@/_lib/data-services";
import Heading from "@/Components/Heading";
import Orders from "@/Components/Orders/Orders";
import OrderTableOperations from "@/Components/Orders/OrderTableOperations";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

async function OrdersPage() {
  const orders = await getOrders();

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>Orders</Heading>
        <div className="flex gap-4 items-center">
          <OrderTableOperations />
        </div>
      </div>

      <Suspense fallback={<Spinner />}>
        <Orders orders={orders} />
      </Suspense>
    </>
  );
}

export default OrdersPage;
