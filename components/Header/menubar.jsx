"use client";
import { isCancel } from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function Menubar() {
  const menubarList = [
    { name: "회사소개", path: "/" },
    { name: "사업소개", path: "/" },
    { name: "시공사례", path: "/" },
    { name: "제품소개", path: "/" },
    { name: "고객센터", path: "/" },
  ];
  const [isScroll, setIsscroll] = useState(true);
  const [updatecroll, setUpdateScroll] = useState(0);
  useEffect(() => {
    const scrolllHandler = () => {
      if (window.scrollY === 0) {
        setIsscroll(true);
      } else setIsscroll(false);
      setUpdateScroll(window.scrollY);
    };
    window.addEventListener("scroll", scrolllHandler);
  }, [updatecroll]);

  return (
    <div
      className={
        isScroll
          ? "fixed top-0 w-full z-30 transition-colors duration-700 bg-transparent"
          : "fixed top-0 w-full z-30 transition-colors duration-700 bg-white shadow-2xl "
      }
    >
      <nav className="w-[1200px] h-[70px] m-auto flex flex-row items-center justify-between">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <img src="/logo.png" className="w-[50px] h-[50px]"></img>
            <p
              className={
                isScroll
                  ? "text-lg text-white font-semibold"
                  : "text-lg text-black transition-colors duration-700"
              }
            >
              에너지플랜 Energyplan
            </p>
          </Link>
        </div>
        <ul
          className="flex flex-row items-center justify-center gap-12
        "
        >
          {menubarList.map((menulist, index) => (
            <li
              key={index}
              className={
                isScroll
                  ? "group relative text-white"
                  : "group relative text-black transition-colors duration-700"
              }
            >
              <Link className="text-lg font-medium" href={menulist.path}>
                {menulist.name}
              </Link>
              <span
                className={
                  isScroll
                    ? "absolute -bottom-1 left-1/2 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"
                    : "absolute -bottom-1 left-1/2 w-0 h-1 bg-green-900 transition-all duration-300 group-hover:w-full group-hover:left-0"
                }
              ></span>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-center gap-2">
          <button
            className={
              isScroll
                ? "cursor-pointer px-4 py-1 bg-[#dc404a] text-white rounded-[5px] hover:bg-white hover:text-green-900"
                : "cursor-pointer px-4 py-1 bg-[#dc404a] text-white rounded-[5px] hover:bg-transparent hover:border border-green-900 hover:text-green-900"
            }
          >
            <Link href="/login">로그인</Link>
          </button>
          <button
            className={
              isScroll
                ? "cursor-pointer px-4 py-1 bg-[#dc404a] text-white rounded-[5px] hover:bg-white hover:text-green-900"
                : "cursor-pointer px-4 py-1 bg-[#dc404a] text-white rounded-[5px] hover:bg-transparent hover:border border-green-900 hover:text-green-900"
            }
          >
            <Link href="/signup">회원가입</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}
export default Menubar;
