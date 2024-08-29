import { create } from 'zustand';

interface IState {
    activeId: number;
    setActiveId: (activeid: number) => void;
}

export const useCategoryStore = create<IState>()((set) => ({
    activeId: 1,
    setActiveId: (activeId) => set({ activeId }),
}));
