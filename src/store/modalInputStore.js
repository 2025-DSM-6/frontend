import { create } from "zustand";

const useModalInputStore = create((set) => ({
  registrationModal: {
    subject: "수학 1",
    department: "학년 전체",
  },
  setSubject: (value) =>
    set((state) => ({
      registrationModal: {
        ...state.registrationModal,
        subject: value,
      },
    })),
  setDepartment: (value) =>
    set((state) => ({
      registrationModal: {
        ...state.registrationModal,
        department: value,
      },
    })),
}));

export default useModalInputStore;
