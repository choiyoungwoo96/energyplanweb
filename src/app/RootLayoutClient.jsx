"use client";
import { useEffect } from "react";
import useAuthStore from "../../store/authStore";

export default function RootLayoutClient({ children }) {
  const checkLoginStatus = useAuthStore((state) => state.checkLoginStatus);
  useEffect(() => {
    checkLoginStatus();
  }, [checkLoginStatus]);
  return <>{children}</>;
}
