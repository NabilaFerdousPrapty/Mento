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
      <Button className="">
        New Document
      </Button>
    </div>
  );
};

export default NewDocumentButton;
