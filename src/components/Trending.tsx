"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Tab, Product, productData } from '../api/product';
import { AlertCircle, Heart, Eye, Shuffle, Plus, ShoppingCart } from 'lucide-react';

const Trending = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [activeTab, setActiveTab] = useState<string>('pills-sale');

  useEffect(() => {
    const loadCountdown = async () => {
      const { getCountdown } = await import("../helper/Countdown");
      setTimeLeft(getCountdown());
    };
    loadCountdown();
    const interval = setInterval(loadCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderProductCard = (product: Product) => (
    <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
      <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
        {/* Product Image Section */}
        <div className="product-card__thumb rounded-8 bg-gray-50 position-relative">
          <Link href={`/product/${product.slug}`} className="w-100 h-100 flex-center">
            <img 
              src={product.images[0].src} 
              alt={product.images[0].alt}
              className="w-auto max-w-unset"
            />
          </Link>

          {/* Discount and Hot Tags */}
          {product.discount && (
            <div className="position-absolute inset-block-start-0 inset-inline-start-0 mt-16 ms-16 z-1 d-flex flex-column gap-8">
              <span className="text-main-two-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-xs fw-semibold">
                -{product.discount.percentage}%
              </span>
              <span className="text-neutral-600 w-40 h-40 d-flex justify-content-center align-items-center bg-white rounded-circle shadow-sm text-xs fw-semibold">
                {product.discount.label}
              </span>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="group bg-white p-2 rounded-pill z-1 position-absolute inset-inline-end-0 inset-block-start-0 me-16 mt-16 shadow-sm">
            <button type="button" className="expand-btn w-40 h-40 text-md d-flex justify-content-center align-items-center rounded-circle hover-bg-main-two-600 hover-text-white" title="Expand">
              <Plus size={20} />
            </button>
            <div className="expand-icons gap-20 my-20">
              <button type="button" className="text-neutral-600 text-xl flex-center hover-text-main-two-600 wishlist-btn " title="Add to Wishlist">
                <Heart size={20} />
              </button>
              <button type="button" className="text-neutral-600 text-xl flex-center hover-text-main-two-600" title="View">
                <Eye size={20} />
              </button>
              <button type="button" className="text-neutral-600 text-xl flex-center hover-text-main-two-600" title="Shuffle">
                <Shuffle size={20} />
              </button>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="countdown position-absolute start-50 inset-block-end-0 mb-20 translate-middle-x w-100">
            <ul className="countdown-list style-four flex-center flex-wrap gap-8">
              <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-lg bg-neutral-600">
                <span className="text-2xl text-main-two-600 fw-medium">
                  {timeLeft.days}
                </span>
                Days
              </li>
              <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-lg bg-neutral-600">
                <span className="text-2xl text-main-two-600 fw-medium">
                  {timeLeft.hours}
                </span>
                Hour
              </li>
              <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-lg bg-neutral-600">
                <span className="text-2xl text-main-two-600 fw-medium">
                  {timeLeft.minutes}
                </span>
                Min
              </li>
              <li className="countdown-list__item flex-align flex-column text-sm fw-medium text-white rounded-lg bg-neutral-600">
                <span className="text-2xl text-main-two-600 fw-medium">
                  {timeLeft.seconds}
                </span>
                Sec
              </li>
            </ul>
          </div>
        </div>

        {/* Product Content Section */}
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
                <span key={index} className="text-15 fw-medium text-warning-600 d-flex">
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

          {/* Fulfillment Badge
          <span className="py-2 px-8 text-xs rounded-pill text-main-two-600 bg-main-two-50 mt-16">
            {product.fulfillment}
          </span> */}

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
    </div>
  );

  return (
    <section className="trending-products-three py-120 overflow-hidden">
      <div className="container container-lg">
        {/* Section Header */}
        <div className="section-heading mb-24">
          <div className="flex-between flex-wrap gap-8">
            <h5 className="mb-0 text-uppercase">Premium Products</h5>
            <ul className="nav common-tab style-two nav-pills" role="tablist">
              {productData.map((tab: Tab) => (
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
          </div>
        </div>

        {/* Products Grid */}
        <div className="tab-content">
          {productData.map((tab: Tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
            >
              <div className="row g-12">
                {tab.products.map((product) => renderProductCard(product))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;