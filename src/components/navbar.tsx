//navigationnbar componen in next js
//cmponent used:- react functional componenet
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

//routing using app router
export default function NavBar(){

  //conditional routing
  const pathname=usePathname();

  if(pathname.startsWith("/product")){
    return(<>
      <nav className="bg-black p-4 lg:px-48">
        <ul className="flex gap-4 text-gray-100 text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/product">Product List</Link></li>
          <li><Link href="#">Price List</Link></li>
          <li><Link href="/product-one">Product One API</Link></li>
        </ul>
      </nav>
      </>
    )
  }

  return(
        <nav className="bg-blue-500 p-4 lg:px-48 ">
        <div className="flex gap-4 text-gray-100 text-lg">
        {/* <nav> */}
          <Link href="/">Home</Link>||
          <Link href="/customer">Customer</Link>||
          <Link href="/product">Product</Link>||
          <Link href="/product-one">Product One API</Link>||
          <Link href="/order">Order</Link>||
          <Link href="/about">About us</Link>||
          </div> 
        </nav>
    )
}