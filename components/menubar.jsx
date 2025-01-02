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
          <Link href="/">에너지플랜</Link>
        </div>
        <ul
          className="flex flex-row items-center justify-center
        "
        >
          {menubarList.map((menulist, index) => (
            <li key={index} className="">
              <Link className="p-[15px]" href={menulist.path}>
                {menulist.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-[10px] px-[15px] bg-[#2d6a4f] text-white rounded-[10px]">
          <Link href="/estimate">견적문의</Link>
        </div>
      </nav>
    </>
  );
}
export default Menubar;
