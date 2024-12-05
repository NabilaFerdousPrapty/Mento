import React from "react";
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

const NewDocumentButton = () => {
  return (
    <div>
      <Button className="bg-slate-900 text-white px-4 py-2">
        New Document
      </Button>
    </div>
  );
};

export default NewDocumentButton;
