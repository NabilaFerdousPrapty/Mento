"use server";
import {auth} from "@clerk/nextjs/server"
import { Import } from "lucide-react";
import { adminDB } from "@/firebase-admin";
 
export async function createNewDocument() {
  auth.protect();
  const  {sessionClaims}=await auth();
  const docCollection=adminDB.collection("documents");
   const docRef=await docCollection.add({
   
      title:"New Document",

    });
    adminDB.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(docRef.id).set({
      userId:sessionClaims?.email,
      role:"owner",
      createdAt:new Date(),
      roomId:docRef.id
},{
  merge:true
});
return {docId:docRef.id};
}