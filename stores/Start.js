import create from "zustand";

const StartStore = create((set) => ({
    start: true,
    setStart: (start) => set(
        (state) => ({ start: false })
    ),
}));


export default StartStore;