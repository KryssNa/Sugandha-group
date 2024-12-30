// Types and Interfaces
export interface FeaturedProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  discountPercentage: number;
  image: string;
  backgroundImage: string;
}

export interface ProductBadge {
  text: string;
  type: "best-seller" | "new" | "sale" | "sold";
  color: string;
}

export interface RecommendedProduct {
  id: string;
  title: string;
  image: string;
  badge: ProductBadge;
  discount: {
    percentage: number;
    originalPrice: number;
    currentPrice: number;
  };
  rating: {
    score: number;
    count: number;
  };
  fulfillment: string;
  delivery: {
    date: string;
  };
  slug: string;
}

// Recommended Products Data
export const featuredProduct: FeaturedProduct = {
  id: "chanel-no-5",
  title: "Chanel No. 5 Eau de Parfum",
  subtitle: "FROM",
  price: 150,
  discountPercentage: 10,
  image: "assets/images/thumbs/perfume-img.png",
  backgroundImage: "assets/images/bg/perfume-bg.png",
};

export const recommendedProducts: RecommendedProduct[] = [
  {
    id: "chanel-no-5",
    title: "Chanel No. 5 Eau de Parfum",
    image: "assets/images/products/armani1.png",
    badge: {
      text: "Best Seller",
      type: "best-seller",
      color: "bg-tertiary-600",
    },
    discount: {
      percentage: 10,
      originalPrice: 200,
      currentPrice: 180,
    },
    rating: {
      score: 4.9,
      count: 15000,
    },
    fulfillment: "Fulfilled by Sugandha",
    delivery: {
      date: "Aug 05",
    },
    slug: "chanel-no-5",
  },
];

// Slider Settings
export const sliderSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
