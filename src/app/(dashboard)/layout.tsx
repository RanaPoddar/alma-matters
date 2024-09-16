import Menu from "@/Components/dashboard/Menu";
import Navbar from "@/Components/dashboard/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[20%] xl:w-[22%] p-4">
        <Link
          href="#"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
                          <Image src="/logo.png" alt="logo" width={250} height={50} />
          {/* <span className="hidden lg:block font-bold text-primaryBlue text-2xl md:ml-10">AlmaMatters</span> */}
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[80%] xl:w-[78%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
