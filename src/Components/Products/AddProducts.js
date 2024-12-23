"use client";

import Modal from "../Modal";
import ProductsForm from "./ProductsForm";

function AddProducts() {
  return (
    <Modal>
      <Modal.Open>
        <button className=" border border-gray-200 bg-gray-50 shadow-sm rounded-md  flex items-center px-3 py-2 text-sm font-medium  transition-all text-gray-800 hover:bg-[#4557ff] hover:text-white">
          Add Products
        </button>
      </Modal.Open>
      <Modal.Window>
        <ProductsForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddProducts;
