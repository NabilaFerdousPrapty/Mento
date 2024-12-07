import React, { useTransition } from "react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/router";

const NewDocumentButton = () => {
  const [ispending,startTransition]=useTransition();
  const router=useRouter()
  const handleCreateDocument = () => {
    startTransition(async()=>{
      const {docId}=await createNewDocument()
      router.push(`/doc/${docId}`)

    })
  };
  return (
    <div>
      <Button onClick={handleCreateDocument} disabled={ispending} className="">
        {ispending ? "Creating..." : "New Document"}
      </Button>
    </div>
  );
};

export default NewDocumentButton;
