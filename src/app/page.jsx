import Link from "next/link";
import Menubar from "../../components/menubar";
import Mainslide from "../../components/mainslide";
import Business from "../../components/business";

function Page() {
  return (
    <div>
      <Menubar></Menubar>
      <Mainslide></Mainslide>
      <Business></Business>
    </div>
  );
}
export default Page;
