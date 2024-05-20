
"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import

export default function EditTopic({ params }) {
  const [newFirstName, setNewFirstName] = useState(""); // Corrected variable names
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newDob, setNewDob] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newProfession, setNewProfession] = useState("");
  const [newMaritalStatus, setNewMaritalStatus] = useState("");
  const [newAnniversaryDate, setNewAnniversaryDate] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newState, setNewState] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newZipCode, setNewZipCode] = useState("");
  const router = useRouter(); // Initialize useRouter

  const { id } = params; // Destructure id from params
  console.log("id", id);

  const handleOnsubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch(`/api/lead`, {
        method: "PATCH", // Use PATCH method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          updates: { newfirstName: newFirstName, newlastName: newLastName, newemail: newEmail, newmobile: newMobile, newdob: newDob, newage: newAge, newgender: newGender, newprofession: newProfession, newmaitalstatus: newMaritalStatus, newanniversarydate: newAnniversaryDate, newaddress: newAddress, newcountry: newCountry, newstate: newState, newcity: newCity, newzipcode: newZipCode },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        router.push("/admin/lead");
        console.log("Lead updated successfully");
      } else {
        console.log(data.message || "Failed to update lead");
      }
    } catch (error) {
      console.log("Failed to update lead. Please try again later.");
    }
  };

  return (
    <>
      {/* <form onSubmit={handleOnsubmit} className="flex flex-col gap-3">
        <input
          onChange={(e) => setNewFirstName(e.target.value)}
          value={newFirstName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="First Name"
        />

        <input
          onChange={(e) => setNewLastName(e.target.value)}
          value={newLastName}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Last Name"
        />

        <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
          Update Lead
        </button>
      </form> */}
      <section>
      <h1 className="uppercase text-center font-serif dark:text-black font-extrabold underline text-2xl">Update Lead</h1>
      <div className="p-4 mt-3 font-serif dark:text-black">
        <form onSubmit={handleOnsubmit} className="flex flex-col gap-3 px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block">First Name </label>
          <input
            onChange={(e) => setNewFirstName(e.target.value)}
            value={newFirstName}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter First Name" 
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last Name</label>
          <input
            onChange={(e) => setNewLastName(e.target.value)}
            value={newLastName}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="email"
          placeholder="Enter Email" 
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block">Mobile</label>
        <input
          onChange={(e) => setNewMobile(e.target.value)}
          value={newMobile}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="tel"
          placeholder="Enter Mobile" 
        />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 dark:text-black">
        <div>
          <label htmlFor="dob" className="block">Date of Birth</label>
          <input
            onChange={(e) => setNewDob(e.target.value)}
            value={newDob}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="age" className="block">Age</label>
          <input
            onChange={(e) => setNewAge(e.target.value)}
            value={newAge}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="number"
            placeholder="Enter Age" 
          />
        </div>
        <div>
          <label htmlFor="gender" className="block">Gender</label>
          <select
            onChange={(e) => setNewGender(e.target.value)}
            value={newGender}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white "
          >
          <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="profession" className="block">Profession</label>
          <input
            onChange={(e) => setNewProfession(e.target.value)}
            value={newProfession}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter Profession"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
        <div>
          <label htmlFor="maritalStatus" className="block dark:text-black">Marital Status</label>
          <select
            onChange={(e) => setNewMaritalStatus(e.target.value)}
            value={newMaritalStatus}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          > 
            <option>Select MaritalStatus</option>
            <option>Single</option>
            <option>Married</option>
          </select>
        </div>
        <div>
          <label htmlFor="anniversaryDate" className="block dark:text-black">Anniversary Date</label>
          <input
            onChange={(e) => setNewAnniversaryDate(e.target.value)}
            value={newAnniversaryDate}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="date"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="block">Address</label>
        <input
          onChange={(e) => setNewAddress(e.target.value)}
          value={newAddress}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="text"
          placeholder="Enter Address"     
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="country" className="block">Country</label>
          <input
            onChange={(e) => setNewCountry(e.target.value)}
            value={newCountry}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter Country"
          />
        </div>
        <div>
          <label htmlFor="state" className="block">State</label>
          <input
            onChange={(e) => setNewState(e.target.value)}
            value={newState}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter State"
          />
        </div>
        <div>
          <label htmlFor="city" className="block">City</label>
          <input
            onChange={(e) => setNewCity(e.target.value)}
            value={newCity}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter City"
          />
        </div>
      <div>
        <label htmlFor="zipCode" className="block">Zip Code</label>
        <input
          onChange={(e) => setNewZipCode(e.target.value)}
          value={newZipCode}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="text"
          placeholder="Enter Zip Code"
        />
      </div>
      </div>
      
      <div className="flex items-center gap-4 mt-4">
        <a href="/admin/lead" className="border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:border-blue-500">Close</a>
        <button type="submit" className="border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:border-blue-500">Update Lead</button>
      </div>
    </form>
        </div>
      
      </section>
    </>

  
  );
}


export async function PATCH(request) {
  try {
    const { id, updates } = await request.json(); // Assuming updates contain only fields to be updated

    const res = await fetch(`/api/lead`, {
      method: "PATCH", // Use PATCH method
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        updates, // Send the updates object directly
      }),
    });

    const data = await res.json();
    if (res.ok) {
      return new Response(JSON.stringify({ message: "Lead updated" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: data.message || "Failed to update lead" }), { status: 500 });
    }
  } catch (error) {
    console.error("Error updating lead:", error);
    return new Response(JSON.stringify({ error: "Failed to update lead" }), { status: 500 });
  }
}


