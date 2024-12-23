"use client";
import { createOrUpdateProduct } from "@/_lib/actions";
import FormSubmit from "../FormSubmit";
import Input from "../Input";
import ImagePicker from "./ImagePicker";
import Tetxtarea from "../Tetxtarea";
import { useActionState, useState } from "react";
import FormError from "../FormError";

function ProductsForm({ product }) {
  const [formState, formAction] = useActionState(createOrUpdateProduct, {
    errors: {},
  });
  const [formData, setFormData] = useState({
    id: product?.id || "",
    title: product?.title || "",
    price: product?.price || "",
    discount: product?.discount || "",
    description: product?.description || "",
    image: product?.image || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-8 p-5 " action={formAction}>
      {formData.id && (
        <input
          type="hidden"
          name="id"
          defaultValue={formData.id}
          id="id"
          onChange={handleChange}
        />
      )}
      <div className="flex items-center  gap-4">
        <div>
          <ImagePicker
            label="Upload image*"
            name="image"
            defaultImage={formData.image}
          />
          <FormError error={formState.errors.image} />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <Input
              type="text"
              name="title"
              id="title"
              htmlFor="title"
              defaultValue={formData.title}
              onChange={handleChange}
              label="Product name*"
            />
            <div className="absolute">
              <FormError error={formState.errors.title} />
            </div>
          </div>
          <div className="flex items-center  gap-4">
            <div>
              <Input
                type="number"
                name="price"
                id="price"
                htmlFor="price"
                defaultValue={formData.price}
                onChange={handleChange}
                label="Price $"
              />
              <div className="absolute">
                <FormError error={formState.errors.price} />
              </div>
            </div>
            <Input
              type="number"
              name="discount"
              defaultValue={formData.discount}
              onChange={handleChange}
              id="discount"
              htmlFor="discount"
              label="% Discount %"
            />
          </div>
        </div>
      </div>
      <div>
        <Tetxtarea
          name="description"
          placeholder="Desccribe your product"
          id="description"
          defaultValue={formData.description}
          onChange={handleChange}
        />
        <div className="absolute ">
          <FormError error={formState.errors.description} />
        </div>
      </div>

      <FormSubmit>{formData.id ? "Edit" : "Create"}</FormSubmit>
    </form>
  );
}

export default ProductsForm;
