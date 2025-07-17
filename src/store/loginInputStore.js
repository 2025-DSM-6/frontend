import { create } from 'zustand';

const useLoginInputStore = create((set) => ({
  username: '',
  password: '',
  setUsername: (username) => set({ username }),
  setPassword: (password) => set({ password }),
  resetInputs: () => set({ username: '', password: '' }),
}));

export default useLoginInputStore;