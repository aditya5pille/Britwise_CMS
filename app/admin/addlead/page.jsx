
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react'


export default function AddLead()  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [anniversaryDate, setAnniversaryDate] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !email || !mobile || !age || !address) {
        setError("All fields are required.");
        return;
        
    }
    console.log(firstName, lastName, email, mobile, dob, age, gender, profession, maritalStatus, address, country, state, city, zipCode)
    try {
        const res = await fetch("/api/lead", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            firstName, lastName, email, mobile, dob,
             age, gender, profession, maritalStatus, anniversaryDate,
             address, country, state, city, zipCode }),
        });
  
        if (res.ok) {
          
          router.push("/admin/lead");
        } else {
          throw new Error("Failed to ADD LEAD");
        }
      } catch (error) {
        console.log(error);
      }
  }


  return (
   
        <div className="p-4 mt-3 font-serif dark:text-black">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block">First Name <sup className="text-red-500 text-lg">*</sup></label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter First Name" required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block">Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label htmlFor="email" className="block">Email<sup className="text-red-500 text-lg">*</sup></label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="email"
          placeholder="Enter Email" required
        />
      </div>
      <div>
        <label htmlFor="mobile" className="block">Mobile<sup className="text-red-500 text-lg">*</sup></label>
        <input
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="tel"
          placeholder="Enter Mobile" required
        />
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 dark:text-black">
        <div>
          <label htmlFor="dob" className="block">Date of Birth</label>
          <input
            onChange={(e) => setDob(e.target.value)}
            value={dob}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="date"
          />
        </div>
        <div>
          <label htmlFor="age" className="block">Age<sup className="text-red-500 text-lg">*</sup></label>
          <input
            onChange={(e) => setAge(e.target.value)}
            value={age}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="number"
            placeholder="Enter Age" required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block">Gender</label>
          <select
            onChange={(e) => setGender(e.target.value)}
            value={gender}
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
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
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
            onChange={(e) => setMaritalStatus(e.target.value)}
            value={maritalStatus}
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
            onChange={(e) => setAnniversaryDate(e.target.value)}
            value={anniversaryDate}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="date"
          />
        </div>
      </div>
      <div>
        <label htmlFor="address" className="block">Address<sup className="text-red-500 text-lg">*</sup></label>
        <input
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="text"
          placeholder="Enter Address"     required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="country" className="block">Country</label>
          <input
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter Country"
          />
        </div>
        <div>
          <label htmlFor="state" className="block">State</label>
          <input
            onChange={(e) => setState(e.target.value)}
            value={state}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter State"
          />
        </div>
        <div>
          <label htmlFor="city" className="block">City</label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
            type="text"
            placeholder="Enter City"
          />
        </div>
      <div>
        <label htmlFor="zipCode" className="block">Zip Code</label>
        <input
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-500 dark:text-white"
          type="text"
          placeholder="Enter Zip Code"
        />
      </div>
      </div>
      
      {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2 ">
              {error}
            </div>
          )}
      <div className="flex items-center gap-4 mt-4">
        <a href="/admin/lead" className="border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:border-blue-500">Close</a>
        <button type="submit" className="border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:border-blue-500">Submit</button>
      </div>
    </form>
        </div>
     
  );
}
