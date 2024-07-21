import { create } from "zustand";

type State = {
    cartProductIds: number[]
}

type Action = {
    addToCart: (id: number) => void
    removeFromCart: (id: number) => void
    clearAllItems: () => void
}

export const useCartStore = create<State & Action>((set) => ({
    cartProductIds: [],
    addToCart: (id: number) => set((state) => ({
        cartProductIds: [...state.cartProductIds, id]
    })),
    removeFromCart: (id: number) => set((state) => ({
        cartProductIds: state.cartProductIds.filter(productId => productId !== id)
    })),
    clearAllItems: () => set(() => ({
        cartProductIds: []
    }))
}));