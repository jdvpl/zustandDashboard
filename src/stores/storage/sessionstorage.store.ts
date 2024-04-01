import { StateStorage, createJSONStorage } from "zustand/middleware";


const storageApi:StateStorage={
    getItem: (name: string) => {
        const storedData = sessionStorage.getItem(name);
    
        return storedData;
    },
    setItem: (name: string, value: string) => { 
        sessionStorage.setItem(name, value);
    },
    removeItem: function (name: string): unknown {
        console.log("removeItem",name)
        return name;
    }
}

export const customSessionStorage=createJSONStorage(()=>storageApi)