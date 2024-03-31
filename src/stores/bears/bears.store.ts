import { create } from 'zustand'

interface BearState{
    blackBears:number;
    polarBears:number;
    pandaBears:number;
    increaseBlackBears:(by:number)=>void;
    increasePolarBears:(by:number)=>void;
    increasePandarBears:(by:number)=>void;
}

export const useBearStore = create<BearState>()((set) => ({
  blackBears: 20,
  polarBears:5,
  pandaBears:10,
  increaseBlackBears:(by:number)=>set((state)=>({blackBears:state.blackBears+by})),
  increasePolarBears:(by:number)=>set((state)=>({polarBears:state.polarBears+by})),
  increasePandarBears:(by:number)=>set((state)=>({pandaBears:state.pandaBears+by}))
}))

