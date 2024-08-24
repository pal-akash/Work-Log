import Calendar from "@/components/Calendar";
import Navbar from "@/components/Navbar";
import { NewLog } from "@/components/NewLog";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5 space-y-10">
      <Navbar />
      <NewLog />
      <Calendar />
    </div>
  );
}
