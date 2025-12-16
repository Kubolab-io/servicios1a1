import SearchProp from "@/components/elements/SearchProp";
import WhatsAppButton from "@/components/elements/WhatsAppButton";
import AboutOne from "@/sections/home-one/AboutOne";
import Banner from "@/sections/home-one/Banner";
import ContactOne from "@/sections/home-one/ContactOne";
import FooterOne from "@/sections/home-one/FooterOne";
import Header from "@/sections/home-one/Header";
import OfficeLocation from "@/sections/home-one/OfficeLocation";
import ServicesOne from "@/sections/home-one/ServicesOne";
import SlidingTextOne from "@/sections/home-one/SlidingTextOne";
import StrickyNavHomeOne from "@/sections/home-one/StrickyNavHomeOne";

export default function Home() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Banner />
      <SlidingTextOne />
      <AboutOne />
      <ServicesOne />
      <OfficeLocation />
      <ContactOne />
      <FooterOne />
      <StrickyNavHomeOne />
      <SearchProp />
      <WhatsAppButton />
    </div>
  );
}
