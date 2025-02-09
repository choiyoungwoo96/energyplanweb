import Menubar from "../../components/Header/menubar";
import MainVideo from "../../components/Section/MainVideo/mainvideo";
import Business from "../../components/Section/Business/business";
import Construction from "../../components/Section/Construction/construction";
import Information from "../../components/Section/Information/information";
import Profit from "../../components/Section/Profit/profit";

import Partner from "../../components/Section/Partner/partner";
import Inquire from "../../components/Section/Insquire/inquire";
import Notice from "../../components/Section/Notice/notice";
import Footer from "../../components/Footer/footer";

function Page() {
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("accessToken");
      setLogin(!!token);
      console.log("로그인 상태", !!token);
    };
    checkLoginStatus();

    window.addEventListener("storage", checkLoginStatus);
    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, [login]);
  return (
    <div>
      <Menubar></Menubar>
      <MainVideo></MainVideo>
      <Information></Information>
      <Profit></Profit>
      <Business></Business>
      <Construction></Construction>
      <Partner></Partner>
      <Notice></Notice>
      <Inquire></Inquire>
      <Footer></Footer>
    </div>
  );
}

export default Page;
