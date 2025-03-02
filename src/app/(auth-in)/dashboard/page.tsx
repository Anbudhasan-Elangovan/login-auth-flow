"use client"
import { logout } from "../../(auth-out)/sign-in/action";

export default function Dashboard() {
  return <><button onClick={() => logout()} className="flex cursor-pointer border p-2 bg-red-500 text-white">Log out</button></>;
}
