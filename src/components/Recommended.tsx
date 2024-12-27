"use client";

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { ChevronLeft, Star, ChevronRight } from 'lucide-react';
import { 
  featuredProduct, 
  recommendedProducts, 
  sliderSettings,
  type RecommendedProduct 
} from '../api/recomendedData';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const ProductCard = ({ product }: { product: RecommendedProduct }) => (
  <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
    <Link
      href={`/product-details-two/${product.slug}`}
      className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
    >
      <span className={`product-card__badge ${product.badge.color} px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0`}>
        {product.badge.text}
      </span>
      <img
        src={product.image}
        alt={product.title}
        className="w-auto max-w-unset"
      />
    </Link>
    <div className="product-card__content mt-16">
      <span className="text-main-600 bg-main-50 text-sm fw-medium py-4 px-8">
        {product.discount.percentage}%OFF
      </span>
      <h6 className="title text-lg fw-semibold my-16">
        <Link
          href={`/product-details-two/${product.slug}`}
          className="link text-line-2"
        >
          {product.title}
        </Link>
      </h6>
      
      {/* Rating Section */}
      <div className="flex-align gap-6">
        <div className="flex-align gap-8">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-15 fw-medium text-warning-600 d-flex">
              <Star size={16} fill="currentColor" />
            </span>
          ))}
        </div>
        <span className="text-xs fw-medium text-gray-500">
          {product.rating.score}
        </span>
        <span className="text-xs fw-medium text-gray-500">
          ({(product.rating.count / 1000).toFixed(1)}K)
        </span>
      </div>

      {/* Fulfillment Badge */}
      <span className="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16">
        {product.fulfillment}
      </span>

      {/* Price Section */}
      <div className="product-card__price mt-16 mb-30">
        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
          ${product.discount.originalPrice}
        </span>
        <span className="text-heading text-md fw-semibold">
          ${product.discount.currentPrice}
          <span className="text-gray-500 fw-normal">/Qty</span>
        </span>
      </div>

      {/* Delivery Info */}
      <span className="text-neutral-600">
        Delivered by <span className="text-main-600">{product.delivery.date}</span>
      </span>
    </div>
  </div>
);

const FeaturedProductCard = () => (
  <div className="position-relative rounded-16 bg-light-purple overflow-hidden p-28 z-1 text-center h-100">
    <img
      src={featuredProduct.backgroundImage}
      alt="background"
      className="position-absolute inset-block-start-0 inset-inline-start-0 z-n1 w-100 h-100 cover-img"
    />
    <div className="py-xl-4 text-center">
      <span className="h6 mb-20 text-white">{featuredProduct.title}</span>
      <div className="flex-center gap-12 text-white">
        <span>{featuredProduct.subtitle}</span>
        <h4 className="mb-8 text-white">${featuredProduct.price}</h4>
        <span className="badge-style-two position-relative me-8 bg-main-two-600 text-white text-sm py-2 px-8 rounded-4">
          {featuredProduct.discountPercentage}% off
        </span>
      </div>
    </div>
    <img
      src={featuredProduct.image}
      alt={featuredProduct.title}
      className="mt-48 d-xxl-block d-none"
    />
  </div>
);

const Recommended = () => {
  // Custom arrow components for slider
  const NextArrow = ({ className, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      title='Next'
      className={`${className} slick-next slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
    >
      <ChevronRight size={24} />
    </button>
  );

  const PrevArrow = ({ className, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      title='Previous'
      className={`${className} slick-prev slick-arrow flex-center rounded-circle border border-gray-100 hover-border-neutral-600 text-xl hover-bg-neutral-600 hover-text-white transition-1`}
    >
      <ChevronLeft size={24} />
    </button>
  );

  const settings = {
    ...sliderSettings,
    nextArrow: <NextArrow className="" onClick={() => {}} />,
    prevArrow: <PrevArrow className="" onClick={() => {}} />
  };

  return (
    <section className="recommended">
      <div className="container container-lg">
        <div className="row g-12">
          {/* Featured Product Column */}
          <div className="col-xxl-4">
            <FeaturedProductCard />
          </div>

          {/* Recommended Products Column */}
          <div className="col-xxl-8">
            <div className="border border-gray-100 p-24 rounded-16">
              {/* Section Header */}
              <div className="section-heading mb-24">
                <div className="flex-between flex-wrap gap-8">
                  <h5 className="mb-0">Recommended For You</h5>
                  <div className="flex-align mr-point gap-16">
                    <Link
                      href="/shop"
                      className="text-sm fw-medium text-gray-700 hover-text-main-600 hover-text-decoration-underline"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Products Slider */}
              <div className="recommended-slider">
                <Slider {...settings}>
                  {recommendedProducts.map((product) => (
                    <div key={product.id}>
                      <ProductCard product={product} />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommended;