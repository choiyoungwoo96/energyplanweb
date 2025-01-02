import Link from "next/link";
import "./menubar.css";

function Menubar() {
  const menubarList = [
    { name: "회사소개", path: "/" },
    { name: "사업소개", path: "/" },
    { name: "시공사례", path: "/" },
    { name: "제품소개", path: "/" },
    { name: "고객센터", path: "/" },
  ];
  return (
    <div>
      <nav className="container__menubar">
        <div className="container_menubar__logoBox">
          <div>
            <Link href="/">에너지플랜</Link>
          </div>
        </div>
        <ul className="container__menubar__list">
          {menubarList.map((menulist, index) => (
            <li key={index} className="container__menubar__list__items">
              <Link href={menulist.path}>{menulist.name}</Link>
            </li>
          ))}
        </ul>
        <div className="container__menubar__list__items__side">
          <Link href="/estimate">견적문의</Link>
        </div>
      </nav>
    </div>
  );
}
export default Menubar;
