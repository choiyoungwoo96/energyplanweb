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
          className="flex flex-row items-center justify-center gap-20
        "
        >
          {menubarList.map((menulist, index) => (
            <li key={index} className="relative group">
              <Link
                className="w-full py-[15px] text-md font-medium hover:text-green-500 transition-all duration-300"
                href={menulist.path}
              >
                {menulist.name}
              </Link>
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer   text-white  hover:bg-transparent border">
          <Link
            href="/estimate"
            className="w-full p-[35px] bg-green-500 rounded-lg"
          >
            견적문의
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Menubar;
