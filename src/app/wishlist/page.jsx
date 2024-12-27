import BottomFooter from "@/components/BottomFooter";
import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import ShippingOne from "@/components/ShippingOne";
import WishListSection from "@/components/WishListSection";
import ColorInit from "@/helper/ColorInit";
import Preloader from "@/helper/Preloader";
import ScrollToTopInit from "@/helper/ScrollToTopInit";

export const metadata = {
  title: "Sugandha Express Yourself through Fragrance",
  description:
    "Discover your signature scent at Sugandha. From luxurious perfumes to exotic fragrances, find the perfect aroma that tells your unique story. Premium quality scents at affordable prices. Shop now and express your personality through fragrance.",
};

const page = () => {
  return (
    <>
      {/* ColorInit */}
      <ColorInit color={true} />

      {/* ScrollToTop */}
      <ScrollToTopInit color='#FA6400' />

      {/* Preloader */}
      <Preloader />

      {/* Header */}
      <Header category={true} />

      {/* Breadcrumb */}
      <Breadcrumb title={"My Wishlist"} />

      {/* WishListSection */}
      <WishListSection />

      {/* ShippingOne */}
      <ShippingOne />

      {/* FooterOne */}
      <FooterOne />

      {/* BottomFooter */}
      <BottomFooter />
    </>
  );
};

export default page;
