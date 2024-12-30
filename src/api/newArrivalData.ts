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
        title: "Summer Sale",
        subtitle: "Up to 50% off on all perfumes",
        discount: "50%",
        backgroundImage: "assets/images/banners/summer-sale.png",
        buttonText: "Shop Now",
        position: "left",
        textColor: "#ffffff",
        extraText: "Limited time offer",
        showDiscountCircle: true,
      },
      {
        id: "promo-2",
        title: "New Arrivals",
        subtitle: "Discover our latest collection",
        discount: "20%",
        backgroundImage: "assets/images/banners/new-arrivals.png",
        buttonText: "Explore",
        position: "right",
        textColor: "#000000",
        extraText: "Fresh and exclusive",
        showDiscountCircle: false,
      },
    ],
    products: [
      {
        id: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        title: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        slug: "EMPORIO-ARMANI-STRONGER-WITH-YOU-AMBER-100ml",
        category: "Perfumes",
        images: [
          {
            src: "assets/images/products/armani.png",
            alt: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
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
        tags: ["scents", "perfume", "floral"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: ["Long-lasting", "Unisex", "Citrus notes"],
      },
      {
        id: "Creed Aventus EDP 100ml",
        title: "Creed Aventus EDP 100ml",
        slug: "Creed-Aventus-EDP-100ml",
        category: "Perfumes",
        images: [
          {
            src: "assets/images/products/creed.png",
            alt: "Creed Aventus EDP 100ml",
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
        tags: ["scents", "perfume", "floral"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: ["Long-lasting", "Unisex", "Citrus notes"],
      },
    ],
  },
  {
    id: "pills-Perfumes",
    label: "Perfumes",
    category: "perfumes",
    products: [
      {
        id: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        title: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        slug: "EMPORIO-ARMANI-STRONGER-WITH-YOU-AMBER-100ml",
        category: "Perfumes",
        images: [
          {
            src: "assets/images/products/armani.png",
            alt: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
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
        tags: ["scents", "perfume", "floral"],
        fulfillment: "Fulfilled by Sugandha",
        status: "in_stock",
        features: ["Long-lasting", "Unisex", "Citrus notes"],
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
