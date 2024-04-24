"use client"

import { redirect } from "next/navigation"


//redirect

export default function NotFound(){
redirect('/')   
return (
      <div>PAGE NOT FOUND <b>404</b></div>
    )
}
  