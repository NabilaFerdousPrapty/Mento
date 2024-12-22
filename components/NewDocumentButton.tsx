"use client"
import { useTransition } from "react";
import { Button } from "./ui/button";
import { createNewDocument } from "@/actions/actions";
import { useRouter } from "next/navigation";
function NewDocumentButton() {
  const [isPending, startTransition] = useTransition();
  const Router = useRouter();
  const handleNewDocument = () => {
    startTransition(async() => {
      const {docId}=await createNewDocument();
      Router.push(`/document/${docId}`);
    }
  )
    
  };
  return <Button className="bg-gray-800 text-white hover:bg-black border-2 border-white" onClick={handleNewDocument}>
    {
      isPending ? "Creating ..." : "New Document"
    }
  </Button>;
}
export default NewDocumentButton;