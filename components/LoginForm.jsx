"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";



export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="px-20">
        <div className="flex ">
          <div className="pb-8 hidden sm:block pt-20">
            <Image
              src="/login.png"
              alt="Login Image"
              width={800}
              height={600}
            />
          </div>
          <div className="font-serif  pt-32">
            <Image
              src="/cropped-New-logo-File.png"
              alt="My Image"
              width={200}
              height={500}
            />
            <span className="flex pt-6">
              <h1 className="text-3xl  font-bold pt-3">Sign In </h1>
              <FcBusinessman size={50} />
            </span>
            <p>Please sign-in your account and start the adventure</p>
            <div>
              <h1 className="pt-8 text-center font-bold text-lg  ">
                Sign-in Form
              </h1>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 pt-4"
              >

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
                  Sign in
                </button>

                {error && (
             <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
               {error}
             </div>
           )}

           <Link className=" text-right" href={"/register"}>
             Don't have an account? <span className="underline">Register</span>
           </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}