// Types and Interfaces
export interface Rating {
  score: number;
  count: number;
}

export interface Price {
  current: number;
  original: number;
  unit: string;
}

export interface Discount {
  percentage: number;
  label: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  images: ProductImage[];
  rating: Rating;
  price: Price;
  discount?: Discount;
  tags: string[];
  fulfillment: string;
  status: "in_stock" | "out_of_stock" | "low_stock";
  features: string[];
}

export interface Tab {
  id: string;
  label: string;
  products: Product[];
}

// Product Data
export const productData: Tab[] = [
  {
    id: "pills-sale",
    label: "On Sale",
    products: [
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
      {
        id: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        title: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
        slug: "EMPORIO-ARMANI-STRONGER-WITH-YOU-AMBER-100ml",
        category: "Perfumes",
        images: [
          {
            src: "assets/images/oroducts/armani.png",
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
  {
    id: "pills-featured",
    label: "Featured Products",
    products:[{
      id: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
      title: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
      slug: "EMPORIO-ARMANI-STRONGER-WITH-YOU-AMBER-100ml",
      category: "Perfumes",
      images: [
        {
          src: "assets/images/oroducts/armani.png",
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
    },]
  },
  {
    id: "pills-rated",
    label: "Best Rated",
    products: [{
      id: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
      title: "EMPORIO ARMANI STRONGER WITH YOU AMBER 100ml",
      slug: "EMPORIO-ARMANI-STRONGER-WITH-YOU-AMBER-100ml",
      category: "Perfumes",
      images: [
        {
          src: "assets/images/oroducts/armani.png",
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
    },]
  },
];

// Utility functions for data management
export const getProductById = (id: string): Product | undefined => {
  return productData
    .flatMap((tab) => tab.products)
    .find((product) => product.id === id);
};

export const getProductsByTab = (tabId: string): Product[] => {
  const tab = productData.find((t) => t.id === tabId);
  return tab ? tab.products : [];
};

export const getDiscountedProducts = (): Product[] => {
  return productData
    .flatMap((tab) => tab.products)
    .filter((product) => product.discount && product.discount.percentage > 0);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return productData
    .flatMap((tab) => tab.products)
    .filter(
      (product) =>
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
};

export const filterProductsByPrice = (
  minPrice: number,
  maxPrice: number
): Product[] => {
  return productData
    .flatMap((tab) => tab.products)
    .filter(
      (product) =>
        product.price.current >= minPrice && product.price.current <= maxPrice
    );
};

export const sortProducts = (
  products: Product[],
  sortBy: "price" | "rating" | "name",
  order: "asc" | "desc" = "asc"
): Product[] => {
  const sortedProducts = [...products];

  sortedProducts.sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case "price":
        comparison = a.price.current - b.price.current;
        break;
      case "rating":
        comparison = a.rating.score - b.rating.score;
        break;
      case "name":
        comparison = a.title.localeCompare(b.title);
        break;
    }
    return order === "asc" ? comparison : -comparison;
  });

  return sortedProducts;
};
