import { create } from 'zustand'

interface Bears{
    id:number;
    name:string;
}
interface BearState{
    blackBears:number;
    polarBears:number;
    pandaBears:number;
    bears:Bears[];
    increaseBlackBears:(by:number)=>void;
    increasePolarBears:(by:number)=>void;
    increasePandarBears:(by:number)=>void;
    doNothing:()=>void;
    addBear:()=>void;
    clearBear:()=>void;
    computed:{
        totalBears:number;
    }
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 20,
  polarBears:5,
  pandaBears:10,
  bears:[{id:1,name:"Oso 1"}],
  increaseBlackBears:(by:number)=>set((state)=>({blackBears:state.blackBears+by})),
  increasePolarBears:(by:number)=>set((state)=>({polarBears:state.polarBears+by})),
  increasePandarBears:(by:number)=>set((state)=>({pandaBears:state.pandaBears+by})),
  doNothing:()=>set(state=>({bears:[...state.bears]})),
  addBear:()=>set(state=>({bears:[...state.bears,{id: state.bears.length+1,name:`Oso #${state.bears.length+1}`}]})),
  clearBear:()=>set({bears:[]}),
  computed:{
    get totalBears(){
        return get().bears.length+get().blackBears+get().polarBears+get().pandaBears;
    }
  }
}))

 