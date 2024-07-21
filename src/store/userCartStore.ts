import { Book, Books } from "@/utils/schemas/books.schema";
import { create } from "zustand";

type State = {
    cartProducts: Books
}

type Action = {
    addToCart: (book: Book) => void
    removeFromCart: (id: number) => void
    clearAllItems: () => void
}

export const useCartStore = create<State & Action>((set) => ({
    cartProducts: [],
    addToCart: (book: Book) => set((state) => ({
        cartProducts: [...state.cartProducts, book]
    })),
    removeFromCart: (id: number) => set((state) => ({
        cartProducts: state.cartProducts.filter(book => book.id !== id)
    })),
    clearAllItems: () => set(() => ({
        cartProducts: []
    }))
}));