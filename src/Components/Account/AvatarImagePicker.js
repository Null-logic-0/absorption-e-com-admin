"use client";
import Image from "next/image";
import defaultImg from "../../../public/default-user.jpg";
import { LuImagePlus } from "react-icons/lu";
import { useRef, useState } from "react";

function AvatarImagePicker({ name, avatar }) {
  const [pickedImage, setPickedImage] = useState(avatar || defaultImg || null);
  const [isImageUpdated, setIsImageUpdated] = useState(false);
  const imageRef = useRef();

  function handleImageClick(e) {
    e.preventDefault();
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      setIsImageUpdated(false);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
      setIsImageUpdated(true);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <>
      <div className="flex flex-col items-center  group cursor-pointer">
        <Image
          src={avatar && pickedImage}
          alt="avatar"
          width={100}
          height={100}
          quality={100}
          onClick={handleImageClick}
          loading="lazy"
          className=" object-cover w-[100px] h-[100px] rounded-full shadow-md group-hover:border-2 group-hover:border-gray-800 transition-all"
        />
        <button
          className="bg-white rounded-full  p-1 bg-opacity-70 relative bottom-16 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleImageClick}
        >
          <LuImagePlus className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <input
        className="hidden"
        type="file"
        id={name}
        accept="image/png, image/jpeg"
        name={name}
        ref={imageRef}
        onChange={handleImageChange}
      />
      <input
        type="hidden"
        name="defaultImage"
        value={pickedImage || defaultImg || avatar}
      />
    </>
  );
}

export default AvatarImagePicker;
