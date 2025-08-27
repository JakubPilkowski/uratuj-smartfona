import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Steps from "../components/Steps/Steps";
import Accessories from "../components/Accessories/Accessories";
// import Instagram from "../components/Instagram/Instagram";
import Footer from "../components/Footer/Footer";
import FloatingContact from "../components/FloatingContact/FloatingContact";
import FloatingMap from "../components/FloatingMap/FloatingMap";
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp";
import FloatingFacebook from "../components/FloatingFacebook/FloatingFacebook";
import FloatingInstagram from "../components/FloatingInstagram/FloatingInstagram";
import PromotionDialog from "../components/PromotionDialog/PromotionDialog";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Uratuj Smartfona - Profesjonalny serwis smartfonów w Olsztynie
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Steps />
      <Accessories />
      {/* <Instagram /> */}
      <Footer />

      <FloatingMap />
      <FloatingContact />
      <FloatingWhatsApp />
      <FloatingFacebook />
      <FloatingInstagram />
      <PromotionDialog />
    </>
  );
};

export default HomePage;
