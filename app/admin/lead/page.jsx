"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "@/components/RemoveBtn";


export default function Lead() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    handlegetLead();
  }, []);
  const handlegetLead = async () => {
    try {
      const res = await fetch("/api/lead");

      if (res.ok) {
        const data = await res.json();
        setData(data.leads);
        console.log("data", Data);

        // console.log(data);
      }
      // else
      // {
      //   console.log("error")
      // }
    } catch (error) {
      console.log("Error loading lead: ", error);
    }
  };

  return (
    <>
      <div className="p-4 mt-3">
        <Link
          className="font-serif border text-black border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 "
          href={"/admin/addlead"}
        >
          Add Leads
        </Link>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full border text-black">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Index
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            {Data.map((emp, index) => (
              <tr key={index} className="border">
                <td className="px-6 py-4 whitespace-no-wrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {emp.firstName}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{emp.lastName}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{emp.email}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{emp.mobile}</td>
                <td className="px-6 py-4 whitespace-no-wrap">{emp.gender}</td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  <div className="flex gap-2">
                  <Link href={`editTopic/${emp._id}`}>
                <HiPencilAlt size={19} />
              </Link>
                    <RemoveBtn id={emp._id} />
                  </div>
                </td>
              </tr>
            ))}
            <tbody></tbody>
          </table>
        </div>
      </div>

      
    </>
  );
}