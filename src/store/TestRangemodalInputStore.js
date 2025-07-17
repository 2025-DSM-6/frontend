import { create } from "zustand";

const useTestRangeModalInputStore = create((set) => ({
  subject: "",
  department: "",
  memo: "",
  detailedDescription: "",
  setSubject: (value) => set({ subject: value }),
  setDepartment: (value) => set({ department: value }),
  setMemo: (value) => set({ memo: value }),
  setDetailedDescription: (value) => set({ detailedDescription: value }),
  reset: () =>
    set({
      subject: "",
      department: "",
      memo: "",
      detailedDescription: "",
    }),
}));

export default useTestRangeModalInputStore;
