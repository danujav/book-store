import { create } from "zustand";

type State = {
    startingPrice: number,
    endingPrice: number
}

type Action = {
    updatePrices: (start: State['startingPrice'], end: State['endingPrice']) => void
}

export const usePriceStore = create<State & Action>((set) => ({
    startingPrice: 0,
    endingPrice: 0,
    updatePrices: (start, end) => set(() => ({
        startingPrice: start,
        endingPrice: end
    }))
}));