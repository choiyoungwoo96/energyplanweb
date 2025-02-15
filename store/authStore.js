import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  isLogin: false,
  login: async (loginValue) => {
    try {
      const res = await axios.post("/api/auth/login", loginValue, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 200 && res.data.accessToken) {
        localStorage.setItem("accessToken", res.data.accessToken);
        set({ isLogin: true });
      }
    } catch (error) {
      if (error.response?.status === 403) {
        console.log("비밀번호를 잘못입력하셨습니다");
        set({ isLogin: false });
      }
    }
  },
  logout: async (req) => {
    localStorage.removeItem("accessToken");
    const res = await axios.post("/api/auth/logout", req);
    set({ isLogin: false });
  },
  checkLoginStatus: () => {
    const accessToken = localStorage.getItem("accessToken");
    const res = axios.post(
      "/api/auth/accessTokenAuth",
      {},
      {
        headers: {
          Authorization: `Bearer:${accessToken}`,
          "Content-Type": "applcation/json",
        },
      }
    );
    if (accessToken) {
      set((state) => {
        if (state.isLogin) return state;
        return { isLogin: true };
      });
    }
  },
}));
export default useAuthStore;
