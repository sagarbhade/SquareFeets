import Footer from "../components/Footer";
import HowItWorks from "../components/HomeSection1";
import Intro from "../components/Intro";
import SFNav from "../components/Navbar";
import Roles from "../components/Roles";

export default function Home() {
  return (
    <div>
      <SFNav />
      <Intro />
      <HowItWorks />
      <Roles />
      {/* <Footer /> */}
    </div>
  );
}
