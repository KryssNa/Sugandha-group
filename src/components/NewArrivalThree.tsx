"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { CategoryTab, newArrivalData } from '../api/newArrivalData';
import { Heart, Eye, Shuffle, Plus, ShoppingCart } from 'lucide-react';

const PromoBanner = ({ banner }) => (
  <div className="rounded-24 overflow-hidden border border-main-two-600 p-16 bg-color-three h-100">
    <div
      className="bg-img w-100 h-100 min-h-485 rounded-24 overflow-hidden"
      style={{
        backgroundImage: `url(${banner.backgroundImage})`,
      }}
    >
      <div className="py-32 pe-32 text-end">
        <span className={`text-uppercase fw-semibold text-neutral-600 ${banner.textSize || 'text-md'}`}>
          {banner.subtitle}
        </span>
        <h5 className={`mb-0 ${banner.textColor ? `text-${banner.textColor}` : ''} fw-medium`}>
          {banner.title}
        </h5>
        <Link
          href="/shop"
          className="btn btn-black rounded-pill gap-8 mt-32 flex-align d-inline-flex"
        >
          {banner.buttonText}
          <span className="text-xl d-flex">
            <ShoppingCart size={20} />
          </span>
        </Link>
      </div>
      {banner.showDiscountCircle && (
        <div className="bg-neutral-600 rounded-circle p-lg-5 p-md-4 p--24 max-w-260 max-h-260 w-100 h-100 ms-auto">
          <div className="bg-white bg-opacity-10 w-100 h-100 rounded-circle flex-center">
            <h3 className="text-white mb-0 fw-medium">
              {banner.discount} <br /> Off
            </h3>
          </div>
        </div>
      )}
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
    <div className="product-card__thumb rounded-8 bg-gray-50 position-relative">
      <Link
        href={`/product/${product.slug}`}
        className="w-100 h-100 flex-center"
      >
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="w-auto max-w-unset"
        />
      </Link>
      
      {/* Discount and Hot Tags */}
      {product.discount && (
        <div className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 flex flex-col gap-8">
          <span className="text-main-two-600 w-40 h-40 flex-center bg-white rounded-circle shadow-sm text-xs fw-semibold">
            -{product.discount.percentage}%
          </span>
          <span className="text-neutral-600 w-40 h-40 flex-center bg-white rounded-circle shadow-sm text-xs fw-semibold">
            {product.discount.label}
          </span>
        </div>
      )}

      {/* Quick Action Buttons */}
      <div className="group bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
        <button className="expand-btn w-40 h-40 text-md flex-center rounded-circle hover-bg-main-two-600 hover-text-white">
          <Plus size={20} />
        </button>
        <div className="expand-icons gap-20 my-20">
          <button className="text-neutral-600 text-xl flex-center hover-text-main-two-600">
            <Heart size={20} />
          </button>
          <button className="text-neutral-600 text-xl flex-center hover-text-main-two-600">
            <Eye size={20} />
          </button>
          <button className="text-neutral-600 text-xl flex-center hover-text-main-two-600">
            <Shuffle size={20} />
          </button>
        </div>
      </div>
    </div>

    {/* Product Content */}
    <div className="product-card__content mt-16 w-100">
      <h6 className="title text-lg fw-semibold my-16">
        <Link href={`/product/${product.slug}`} className="link text-line-2">
          {product.title}
        </Link>
      </h6>
      
      {/* Rating Section */}
      <div className="flex-align gap-6">
        <div className="flex-align gap-8">
          {[...Array(5)].map((_, index) => (
            <span key={index} className="text-15 fw-medium text-warning-600 flex">
              <i className="ph-fill ph-star" />
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

      {product.fulfillment && (
        <span className="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16">
          {product.fulfillment}
        </span>
      )}

      {/* Price Section */}
      <div className="product-card__price mt-16 mb-30">
        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
          ${product.price.original}
        </span>
        <span className="text-heading text-md fw-semibold">
          ${product.price.current}
          <span className="text-gray-500 fw-normal">/{product.price.unit}</span>
        </span>
      </div>

      {/* Add to Cart Button */}
      <Link
        href="/cart"
        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
      >
        Add To Cart <ShoppingCart size={20} />
      </Link>
    </div>
  </div>
);

const NewArrivalThree = () => {
  const [activeTab, setActiveTab] = useState('pills-all');

  return (
    <section className="new-arrival-three py-120 overflow-hidden">
      <div className="container container-lg">
        {/* Section Header */}
        <div className="section-heading text-center">
          <h5 className="mb-0 text-uppercase">New Arrivals</h5>
        </div>

        {/* Category Tabs */}
        <ul
          className="nav common-tab style-two nav-pills justify-content-center mb-40"
          role="tablist"
        >
          {newArrivalData.map((tab: CategoryTab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Content */}
        <div className="tab-content">
          {newArrivalData.map((tab: CategoryTab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${
                activeTab === tab.id ? 'show active' : ''
              }`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <div className="new-arrival-three-wrapper">
                {/* First Row with Promo Banner */}
                <div className="row gy-4">
                  {tab.promoBanners?.map((banner, index) => {
                    if (banner.position === 'left') {
                      return (
                        <React.Fragment key={banner.id}>
                          <div className="col-xl-4">
                            <PromoBanner banner={banner} />
                          </div>
                          <div className="col-xl-8">
                            <div className="row gy-4">
                              {tab.products.slice(0, 3).map((product) => (
                                <div key={product.id} className="col-lg-4 col-sm-6">
                                  <ProductCard product={product} />
                                </div>
                              ))}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Second Row with Right Promo Banner */}
                <div className="mt-24">
                  <div className="row gy-4">
                    <div className="col-xl-8">
                      <div className="row gy-4">
                        {tab.products.slice(3, 6).map((product) => (
                          <div key={product.id} className="col-lg-4 col-sm-6">
                            <ProductCard product={product} />
                          </div>
                        ))}
                      </div>
                    </div>
                    {tab.promoBanners?.map((banner) => {
                      if (banner.position === 'right') {
                        return (
                          <div key={banner.id} className="col-xl-4">
                            <PromoBanner banner={banner} />
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivalThree;