import { getSingleOrder } from "@/_lib/data-services";
import Order from "./Order";
import { formatDate } from "@/_helpers/formatDate";

async function OrderInfo({ id }) {
  const order = await getSingleOrder(id);
  return (
    <>
      <p className="text-lg font-semibold text-gray-500">
        {formatDate(order.created_at)}
      </p>
      <Order order={order} />
    </>
  );
}

export default OrderInfo;
