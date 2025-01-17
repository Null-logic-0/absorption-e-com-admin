import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Order({ order }) {
  const {
    customer_id: { fullName, email, adress, city, country, phoneNumber },
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
      </div>
    </>
  );
}

export default Order;
