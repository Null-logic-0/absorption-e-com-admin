import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import { CiCreditCard1 } from "react-icons/ci";
import { TbBrandCashapp } from "react-icons/tb";

function Order({ order }) {
  const {
    id,
    order_status,
    payment_method,

    customer: { fullName, email, adress, city, country, phoneNumber },
    products,
  } = order;

  return (
    <>
      <div className="flex justify-between bg-white p-5 rounded-xl">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-semibold text-gray-800">{fullName}</h3>
          <div className="flex items-center gap-2">
            <MdOutlineEmail className="w-6 h-6" />
            <span className="text-gray-400">{email}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <a href={`tel:${phoneNumber}`} className="text-blue-600">
              {phoneNumber}
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="bg-blue-100 text-blue-700 p-2 font-semibold rounded-xl">
            {country} / {city}
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot />
            {adress}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p
            className={`flex items-center gap-1 p-2 font-semibold rounded-xl ${
              order_status === "completed"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {order_status === "completed" ? (
              <IoMdDoneAll />
            ) : (
              <MdOutlineTimer />
            )}
            {order_status}
          </p>
          <p
            className={`flex items-center gap-1 p-2 font-semibold rounded-xl ${
              payment_method === "credit-card"
                ? "bg-blue-100 text-blue-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {payment_method === "credit-card" ? (
              <CiCreditCard1 />
            ) : (
              <TbBrandCashapp />
            )}
            {payment_method}
          </p>
        </div>
      </div>
    </>
  );
}

export default Order;
