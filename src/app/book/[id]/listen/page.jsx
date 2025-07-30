import { BackButton } from "@/components/BackButton";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BackButton />
      <h1 className="text-4xl font-bold text-blue-600">Listen Page</h1>
    </div>
  );
};

export default page;
