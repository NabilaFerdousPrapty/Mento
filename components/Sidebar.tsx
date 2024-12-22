import React from "react";
import { Button } from "./ui/button";
import NewDocumentButton from "./NewDocumentButton";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThree } from "react-icons/io5";
const Sidebar = () => {
  const menuOptions = (
    <>
      <NewDocumentButton />

      <Button className="w-full" variant="ghost">
        All Documents
      </Button>
    </>
  );
  return (
    <div className="p-2 md:p-5  bg-gray-100 border-2 rounded-lg border-gray-200">
      <div className="mt-2 md:hidden">
        <Sheet>
          <SheetTrigger>
            <IoReorderThree className="text-3xl text-black bg-slate-100 rounded-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>{menuOptions}</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">
        <NewDocumentButton />
      </div>
    </div>
  );
};

export default Sidebar;
