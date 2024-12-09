"use server";
import {auth} from "@clerk/nextjs/server"
import { Import } from "lucide-react";
import { adminDB } from "@/firebase-admin";
 
export async function createNewDocument() {
  auth.protect();
  const  {sessionClaims}=await auth();
  const docCollection=adminDB.collection("documents")
}