"use client"
import { useTransition } from "react";
import { Button } from "./ui/button";
import { createNewDocument } from "@/actions/actions";
function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const handleNewDocument = () => {
    startTransition(async() => {
      const {docId}=await createNewDocument();
    }
  )
    
  };
  return <Button onClick={handleNewDocument}>Create New Document</Button>;
}
export default NewDocumentButton;