import { type StateCreator, create } from "zustand";
import {  persist, devtools } from "zustand/middleware";
import { firebaseStorage } from "../storage/firebasestorage.store";

interface PersonState{
    firstName:string;
    lastName:string;
}
interface Actions{
    setFirstName:(value:string)=>void;
    setLastName:(value:string)=>void;
}



const storeApi:StateCreator<PersonState & Actions>=(set)=>({
    firstName:'',
    lastName:'',
    setFirstName:(firstName:string)=>set({firstName}),
    setLastName:(lastName:string)=>set({lastName}),
});

export const usePersonStore=create<PersonState & Actions>()(
    devtools(
        persist(
            storeApi,
            {name:'personStorage',storage:firebaseStorage}
        )
    )
    

)