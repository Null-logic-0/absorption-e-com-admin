function FormSubmit({ children }) {
  return (
    <button
      type="submit"
      className="bg-[#000000] p-2 rounded w-full text-white font-semibold text-lg hover:bg-[#4557ff] cursor-pointer"
    >
      {children}
    </button>
  );
}

export default FormSubmit;
