import Link from "next/link";

function Menubar() {
  const menubarList = [
    { name: "회사소개", path: "/" },
    { name: "사업소개", path: "/" },
    { name: "시공사례", path: "/" },
    { name: "제품소개", path: "/" },
    { name: "고객센터", path: "/" },
  ];
  return (
    <>
      <nav className="w-[1200px] h-[70px] m-auto bg-transparent flex flex-row items-center justify-between">
        <div>
          <Link href="/" className="flex items-center justify-center">
            <img src="/logo.png" className="w-[50px] h-[50px]"></img>
            <p className="text-lg text-green-500 font-black">
              에너지플랜 Energyplan
            </p>
          </Link>
        </div>
        <ul
          className="flex flex-row items-center justify-center gap-6 gap-20
        "
        >
          {menubarList.map((menulist, index) => (
            <li key={index} className="">
              <Link className="p-[15px] text-2xl" href={menulist.path}>
                {menulist.name}
              </Link>
              <span className="absolute -bottom-1 left-1/2 w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer py-[10px] px-[15px] bg-green-500 text-white rounded-[10px] hover:bg-transparent border border-green-500 hover:text-green-900">
          <Link href="/estimate">견적문의</Link>
        </div>
      </nav>
    </>
  );
}
export default Menubar;
