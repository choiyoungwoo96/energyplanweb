import { create } from "zustand";

const useAuthStore = create((set) => ({
  isLogin: false,
  login: (token) => {
    localStorage.setItem("accessToken", token);
    set({ isLogin: true });
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isLogin: false });
  },
  checkLoginStatus: () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      set((state) => {
        if (state.isLogin) return state;
        return { isLogin: true };
      });
    }
    console.log("checkLoinStatus");
  },
}));
export default useAuthStore;
