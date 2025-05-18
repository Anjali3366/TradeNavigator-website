import React from "react";
import Navbar from "../Navbar";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightiSection";
import Universe from "./Universe";
import Footer from "../Footer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imgUrl="/media/images/kite.png"
        heading="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        btnName1="Try demo"
        link1={<ArrowForwardIcon />}
        btnName2="Learn more"
        link2={<ArrowForwardIcon />}
        iconImg1="/media/images/googlePlayBadge.svg"
        iconImg2="/media/images/appstoreBadge.svg"
      />

      <RightSection
        imgUrl="/media/images/console.png"
        heading="Console "
        description="The central dashboard for your TradeNavigator account. Gain insights into your trades and investments with in-depth reports and visualisations."
        btnName1="Learn more"
        link1={<ArrowForwardIcon />}
      />

      <LeftSection
        imgUrl="/media/images/coin.png"
        heading="Coin"
        btnName1="Coin"
        iconImg1="/media/images/googlePlayBadge.svg"
        iconImg2="/media/images/appstoreBadge.svg"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1={<ArrowForwardIcon fontSize="small" />}
      />

      <RightSection
        imgUrl="/media/images/kiteconnect.png"
        heading="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        btnName1="Kite Connect "
        link1={<ArrowForwardIcon />}
      />

      <LeftSection
        imgUrl="/media/images/varsity.png"
        heading="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        iconImg1="/media/images/googlePlayBadge.svg"
        iconImg2="/media/images/appstoreBadge.svg"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
