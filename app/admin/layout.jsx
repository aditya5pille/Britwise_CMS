
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/register");
  return (
    <>
    

<div className="lg:flex lg:h-screen overflow-hidden">
    <Sidebar />
    <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <Header />
      <div className="p-4 body">
      {children}
      
      </div>
    </div>
  </div>     
  </>
  );
}


