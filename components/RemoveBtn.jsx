
"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removelead = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/lead?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.push("/admin/lead");
       // router.refresh();
      }
    }
  };

  return (
    <button onClick={removelead} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}