import create from 'zustand'

const SavedStore = create(set => ({
    saved: [],
    add: (item) => set(state => ({saved: [...state.saved, item]})),
    remove: (item) => set(state => ({saved: state.saved.filter(i => i.id !== item.id)})),
}))

export default SavedStore