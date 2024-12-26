"use client";
import React, { useEffect } from "react";
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
import { useUser } from "@clerk/nextjs";
import { useCollection } from "react-firebase-hooks/firestore";
import { collectionGroup, query, where } from "firebase/firestore";
import { db } from "@/firebase";
const Sidebar = () => {
  const { user } = useUser();

  const { data, loading, error } = useCollection(
    user &&
      query(
        collectionGroup(db, "rooms"),
        where("userId", "==", user.emailAddresses[0].toString())
      )
  );
  useEffect(() => {}, [data]);
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
