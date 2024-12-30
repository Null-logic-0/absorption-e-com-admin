import { getOrderItems, getProducts } from "@/_lib/data-services";
import DashboardOperations from "@/Components/Dashboard/DashboardOperations";
import Stats from "@/Components/Dashboard/Stats";
import Heading from "@/Components/Heading";
import Spinner from "@/Components/Spinner";
import { Suspense } from "react";

async function MainPage() {
  const data = await getOrderItems();
  const products = await getProducts();

  const totalProducts = products.length;

  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>Dashboard</Heading>
        <DashboardOperations />
      </div>
      <Suspense fallback={<Spinner />}>
        <Stats stats={data} totalProducts={totalProducts} />
      </Suspense>
    </>
  );
}

export default MainPage;
