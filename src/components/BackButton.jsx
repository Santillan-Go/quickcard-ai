import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const BackButton = ({ href = "/" }) => {
  return (
    <Link
      href={href}
      className="absolute top-4 left-4 text-[#70d1ce] hover:underline"
    >
      <FaArrowLeft size={26} className="" />
    </Link>
  );
};
