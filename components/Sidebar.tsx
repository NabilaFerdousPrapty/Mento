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
  return (
    <div className="p-2 md:p-5  bg-gray-100">
      <div className="hidden md:block">
        <NewDocumentButton />
      </div>
      <div className="mt-5">
        <Sheet>
          <SheetTrigger>
            <IoReorderThree className="text-3xl text-blue-500" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Sidebar;
