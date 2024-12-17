function FormError({ error }) {
  if (!error) return null;
  return <p className="text-red-500 text-sm  pt-1">{error}</p>;
}

export default FormError;
