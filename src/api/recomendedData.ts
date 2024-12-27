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
  id: "insta360-go-3s",
  title: "Insta360 GO 3S Action Camera - White",
  subtitle: "FROM",
  price: 430,
  discountPercentage: 20,
  image: "assets/images/thumbs/recommended-img.png",
  backgroundImage: "assets/images/bg/recommended-bg.png",
};

export const recommendedProducts: RecommendedProduct[] = [
  {
    id: "instax-mini-12-1",
    title: "Instax Mini 12 Instant Film Camera - Green",
    image: "assets/images/thumbs/product-two-img1.png",
    badge: {
      text: "Best Seller",
      type: "best-seller",
      color: "bg-tertiary-600",
    },
    discount: {
      percentage: 19,
      originalPrice: 28.99,
      currentPrice: 14.99,
    },
    rating: {
      score: 4.8,
      count: 12000,
    },
    fulfillment: "Fulfilled by Sugandha",
    delivery: {
      date: "Aug 02",
    },
    slug: "instax-mini-12-green",
  },
  {
    id: "instax-mini-12-2",
    title: "Instax Mini 12 Instant Film Camera - Green",
    image: "assets/images/thumbs/product-two-img2.png",
    badge: {
      text: "New",
      type: "new",
      color: "bg-warning-600",
    },
    discount: {
      percentage: 19,
      originalPrice: 28.99,
      currentPrice: 14.99,
    },
    rating: {
      score: 4.8,
      count: 12000,
    },
    fulfillment: "Fulfilled by Sugandha",
    delivery: {
      date: "Aug 02",
    },
    slug: "instax-mini-12-green-2",
  },
  {
    id: "instax-mini-12-3",
    title: "Instax Mini 12 Instant Film Camera - Green",
    image: "assets/images/thumbs/product-two-img3.png",
    badge: {
      text: "Sale 50%",
      type: "sale",
      color: "bg-danger-600",
    },
    discount: {
      percentage: 19,
      originalPrice: 28.99,
      currentPrice: 14.99,
    },
    rating: {
      score: 4.8,
      count: 12000,
    },
    fulfillment: "Fulfilled by Sugandha",
    delivery: {
      date: "Aug 02",
    },
    slug: "instax-mini-12-green-3",
  },
  // ... add more products as needed
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
