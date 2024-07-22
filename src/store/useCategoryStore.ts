import { create } from "zustand";

type State = {
    categories: string[]
}

type Action = {
    addCategories: (categories: string[]) => void
}

export const useCategoryStore = create<State & Action>((set) => ({
    categories: [],
    addCategories: (categories: string[]) => set(() => ({ categories: categories }))
}))