import axios from "axios";
import { StateStorage, createJSONStorage } from "zustand/middleware";


const firebaseUrl='https://zustanddashboard-default-rtdb.europe-west1.firebasedatabase.app/zustand';

const firebaseApi:StateStorage={
    getItem: async function(name: string): Promise<string|null>  {
        try {
            const {data}=await axios(`${firebaseUrl}/${name}.json`)
            return data;
        } catch (error) {
            throw error;
        }
    },
    setItem:async (name: string, value: string) => { 
        try {
            const data=JSON.stringify(value)
            await axios.put(`${firebaseUrl}/${name}.json`,data)
        } catch (error) {
            throw error;
        }
    },
    removeItem: function (name: string): unknown {
        console.log("removeItem",name)
        return name;
    }
}

export const firebaseStorage=createJSONStorage(()=>firebaseApi)