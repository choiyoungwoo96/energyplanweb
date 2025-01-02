import Link from "next/link";
import Menubar from "../../components/menubar";
import Mainslide from "../../components/mainslide";
import Business from "../../components/business";
import Construction from "../../components/construction";

function Page() {
  return (
    <div>
      <Menubar></Menubar>
      <Mainslide></Mainslide>
      <Business></Business>
      <Construction></Construction>
    </div>
  );
}
export default Page;
