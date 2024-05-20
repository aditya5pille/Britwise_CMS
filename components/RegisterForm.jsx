"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <>
      <div className="px-20 ">
        <div className="flex">
          <div className="pt-20 hidden sm:block ">
            <Image
              src="/register.png"
              alt="Register Image"
              width={800}
              height={1000}
            />
          </div>
          <div className="font-serif md:pl-8 pt-20">
            <Image
              src="/cropped-New-logo-File.png"
              alt="My Image"
              width={200}
              height={500}
            />
            <span className="flex pt-6">
              <h1 className="text-3xl  font-bold pt-3">Welcome </h1>
              <FcBusinessman size={50} />
            </span>
            <p>Please create your account and start the adventure</p>
            <div>
              <h1 className="pt-8 text-center font-bold text-lg  ">
                Registration Form
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 pt-4"
              >
                <div className="relative flex items-center border border-indigo-600 rounded h-10">
                  <FaUser size={20} className="absolute left-3 text-gray-500" />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                    className="pl-10 pr-3 h-full w-full rounded focus:outline-none"
                  />
                </div>

                <div className="relative flex items-center border border-indigo-600 rounded h-10">
                  <MdOutlineMail
                    size={20}
                    className="absolute left-3 text-gray-500"
                  />
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="pl-10 pr-3 h-full w-full rounded focus:outline-none"
                  />
                </div>

                <div className="relative flex items-center border border-indigo-600 rounded h-10">
                  <RiLockPasswordFill
                    size={20}
                    className="absolute left-3 text-gray-500"
                  />
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="pl-10 pr-3 h-full w-full rounded focus:outline-none"
                  />
                </div>

                <button className="bg-sky-300 text-black font-bold cursor-pointer px-6 py-2 ">
                  Register
                </button>

                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                    {error}
                  </div>
                )}

                <Link className="md:text-right" href={"/"}>
                  Already have an account?{" "}
                  <span className="underline">Login</span>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
