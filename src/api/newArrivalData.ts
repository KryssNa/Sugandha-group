import { Product } from "./product";

// Types and Interfaces
export interface PromoBanner {
  id: string;
  title: string;
  subtitle: string;
  discount: string;
  backgroundImage: string;
  buttonText: string;
  position: "left" | "right";
  textColor?: string;
  extraText?: string;
  showDiscountCircle?: boolean;
}

export interface CategoryTab {
  id: string;
  label: string;
  category: string;
  products: Product[];
  promoBanners?: PromoBanner[];
}

// New Arrival Data
export const newArrivalData: CategoryTab[] = [
  {
    id: "pills-all",
    label: "All",
    category: "all",
    promoBanners: [
      {
        id: "promo-1",
        title: "Get 85% Off",
        subtitle: "Summer offer",
        discount: "85%",
        backgroundImage: "assets/images/thumbs/new-arrival-promo-img1.png",
        buttonText: "Shop Now",
        position: "left",
      },
      {
        id: "promo-2",
        title: "Spring Collection",
        subtitle: "Get extra discount on first order",
        discount: "45%",
        backgroundImage: "assets/images/thumbs/new-arrival-promo-img2.png",
        buttonText: "Shop Now",
        position: "right",
        textColor: "white",
        showDiscountCircle: true,
      },
    ],
    products: [
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      // More products...
    ],
  },
  {
    id: "pills-Jacket",
    label: "Jacket",
    category: "jacket",
    products: [
      // Jacket category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
  {
    id: "pills-Shoes",
    label: "Shoes",
    category: "shoes",
    products: [
      // Shoes category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
  {
    id: "pills-Hats",
    label: "Hats",
    category: "hats",
    products: [
      // Hats category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
  {
    id: "pills-Goggles",
    label: "Goggles",
    category: "goggles",
    products: [
      // Goggles category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
  {
    id: "pills-Bags",
    label: "Bags",
    category: "bags",
    products: [
      // Bags category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
  {
    id: "pills-Jeans",
    label: "Jeans",
    category: "jeans",
    products: [
      // Jeans category products
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
      {
        id: "instax-mini-12",
        title: "Instax Mini 12 Instant Film Camera - Green",
        slug: "instax-mini-12-camera",
        category: "Electronics",
        images: [
          {
            src: "assets/images/thumbs/trending-three-img1.png",
            alt: "Instax Mini 12 Camera",
          },
        ],
        rating: {
          score: 4.8,
          count: 12000,
        },
        price: {
          current: 14.99,
          original: 28.99,
          unit: "Qty",
        },
        discount: {
          percentage: 29,
          label: "HOT",
        },
        tags: ["electronics", "camera", "instant-photo"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: [],
      },
    ],
  },
];

// Utility functions
export const getCategoryProducts = (category: string): Product[] => {
  const tab = newArrivalData.find((t) => t.category === category);
  return tab ? tab.products : [];
};

export const getCategoryBanners = (category: string): PromoBanner[] => {
  const tab = newArrivalData.find((t) => t.category === category);
  return tab?.promoBanners || [];
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") {
    return newArrivalData.flatMap((tab) => tab.products);
  }
  return getCategoryProducts(category);
};

export const searchNewArrivals = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return newArrivalData
    .flatMap((tab) => tab.products)
    .filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
};
