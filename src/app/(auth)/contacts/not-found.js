import GobackButton from "@/Components/GobackButton";

function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <h1 className="text-black text-6xl font-semibold">
        404 Error,page not found
      </h1>
      <p className="font-medium text-2xl text-[#4557ff]">
        Please go back contacts page
      </p>

      <GobackButton />
    </div>
  );
}

export default NotFound;
