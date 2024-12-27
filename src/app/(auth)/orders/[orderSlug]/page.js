import { getOrderItems } from "@/_lib/data-services";
import Heading from "@/Components/Heading";
import OrderInfo from "@/Components/Orders/OrderInfo";
import OrderItemsTable from "@/Components/Orders/OrderItemsTable";

async function OrderPage({ params }) {
  const { orderSlug } = await params;
  const orderItemData = await getOrderItems();

  const orderItem = orderItemData.filter(
    (item) => item.order_id === +orderSlug
  );

  const totalPrice = orderItem.reduce((sum, item) => {
    const { price } = item.product_id;
    const { quantity } = item;

    const itemTotal = price * quantity;

    return sum + itemTotal;
  }, 0);

  return (
    <>
      <Heading>Order #{orderSlug}</Heading>
      <OrderInfo id={orderSlug} />
      <OrderItemsTable
        data={orderItem}
        totalPrice={totalPrice}
        id={orderSlug}
      />
    </>
  );
}

export default OrderPage;
