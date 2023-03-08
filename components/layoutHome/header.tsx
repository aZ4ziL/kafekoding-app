import Navigation from "@/components/layoutHome/navigation";
import bannerPic from "@/public/banner.jpg";
import Image from "next/image";
import headerStyles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <>
      <Navigation />
      <div className={headerStyles.header}>
        <Image src={bannerPic} alt="banner picture" />
        <div className={headerStyles.header_box}>
          <h1>Welcome To Kafekoding</h1>
          <p>Kafekoding adalah sebuah komunitas yang bergerak dibidang IT.</p>
        </div>
      </div>
    </>
  );
};

export default Header;
