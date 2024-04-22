import create from 'zustand';
import { devtools } from 'zustand/middleware';

type PokeStore = {
  pokename: string;
  updatePoke: (newPokeName: string) => void;
};

export const usePokeStore = create<PokeStore>(
  devtools((set) => ({
    pokename: 'Default',
    updatePoke: (newPokeName) => set((state) => ({ pokename: newPokeName }))
  }))
);
