"use client";
import Image from "next/image";
import { useRef, useState } from "react";

function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleClearImage() {
    setPickedImage(null);
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="image" className="font-semibold text-sm">
        {label}
      </label>
      <div>
        <div className="group w-[140px] h-[140px] border-[#4c5663] border-2 flex justify-center items-center text-center relative">
          {!pickedImage && (
            <button
              type="button"
              onClick={handlePickClick}
              className=" text-gray-600 font-medium text-md"
            >
              Pick an Image
            </button>
          )}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="selected image"
              fill
              className="object-cover cursor-pointer"
            />
          )}
          {pickedImage && (
            <button
              onClick={handleClearImage}
              className="absolute z-1000 top-2 right-2 bg-gray-500 text-white font-bold text-sm w-6 h-6 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              X
            </button>
          )}
        </div>
      </div>
      <input
        className="hidden"
        type="file"
        id={name}
        accept="image/png, image/jpeg, "
        name={name}
        ref={imageInput}
        onChange={handleImageChange}
        required
      />
    </div>
  );
}

export default ImagePicker;
