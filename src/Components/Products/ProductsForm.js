import FormSubmit from "../FormSubmit";
import Input from "../Input";
import ImagePicker from "./ImagePicker";

function ProductsForm() {
  return (
    <form className="flex flex-col gap-5 p-5 ">
      <div className="flex items-center  gap-4">
        <ImagePicker label="Upload image*" name="image" />
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            name="productname"
            id="productname"
            htmlFor="productname"
            label="Product name*"
          />
          <div className="flex items-center  gap-4">
            <Input
              type="number"
              name="price"
              id="price"
              htmlFor="price"
              label="Price $"
            />
            <Input
              type="number"
              name="discount"
              id="discount"
              htmlFor="discount"
              label="% Discount %"
            />
          </div>
        </div>
      </div>
      <div>
        <textarea
          cols={4}
          className="border-[#4c5663] border w-full h-[200px] bg-transparent resize-none"
          name="description"
          id="description"
        />
      </div>

      <FormSubmit>Create</FormSubmit>
    </form>
  );
}

export default ProductsForm;
