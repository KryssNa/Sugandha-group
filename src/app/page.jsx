import BannerThree from "@/components/BannerThree";
import BrandThree from "@/components/BrandThree";
import DealsSection from "@/components/DealsSection";
import FooterOne from "@/components/FooterOne";
import Header from "@/components/Header";
import NewArrivalThree from "@/components/NewArrivalThree";
import Recommended from "@/components/Recommended";
import TestimonialOne from "@/components/TestimonialOne";
import Trending from "@/components/Trending";
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
      <Header />

      {/* BannerThree */}
      <BannerThree />

      {/* BrandThree */}
      <BrandThree />

      {/* PromotionalThree
      // <PromotionalThree /> */}

      {/* FeatureThree */}
      {/* <FeatureThree /> */}

      {/* TextSlider */}
      {/* <TextSlider /> */}

      {/* Trending */}
      <Trending />

      {/* DealsSection */}
      <DealsSection />

      {/* DiscountThree */}
      {/* <DiscountThree /> */}

      {/* NewArrivalThree */}
      <NewArrivalThree />

      {/* Recomendation */}
      <Recommended />

      {/* Gift certificates */}

      {/* PopularProductsThree */}
      {/* <PopularProductsThree /> */}

      {/* ShippingThree */}
      {/* <ShippingThree /> */}

      {/* TestimonialOne */}
      <TestimonialOne />

      {/* InstagramSection */}
      {/* <InstagramSection /> */}

      {/* NewsletterThree */}
      {/* <NewsletterThree /> */}

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
