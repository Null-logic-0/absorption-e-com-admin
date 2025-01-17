import { getOrderItems } from "@/_lib/data-services";
import Heading from "@/Components/Heading";
import OrderInfo from "@/Components/Orders/OrderInfo";
import OrderItemsTable from "@/Components/Orders/OrderItemsTable";

async function OrderPage({ params }) {
  const { orderSlug } = await params;
  const orderItemData = await getOrderItems();

  const totalPrice = orderItemData.reduce((sum, item) => {
    const { price } = item.product_id;

    return sum + price;
  }, 0);

  return (
    <>
      <Heading>Order #{orderSlug}</Heading>
      <OrderInfo id={orderSlug} />
      <OrderItemsTable
        data={orderItemData}
        id={orderSlug}
        totalPrice={totalPrice}
      />
    </>
  );
}

export default OrderPage;
