import create from "zustand";

const useCartStore = create((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (item) => set((state) => ({ cart: state.cart.filter((i) => i.id !== item.id) })),
    clearCart: () => set(() => ({ cart: [] })),
}));

export default useCartStore;