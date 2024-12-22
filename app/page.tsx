import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex-col flex justify-center items-center">
        <h1 className="text-3xl font-bold underline">
          Mento a all new AI productivity tool
        </h1>
       
        <Button>Get Started</Button>
      </div>
    </>
  );
}
