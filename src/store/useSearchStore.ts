import { create } from "zustand";

type State = {
    searchValue: string
}

type Action = {
    updateSearchValue: (value: State['searchValue']) => void
}

export const useSearchStore = create<State & Action>((set) => ({
    searchValue: "",
    updateSearchValue: (value) => set(() => ({ searchValue: value }))
}));