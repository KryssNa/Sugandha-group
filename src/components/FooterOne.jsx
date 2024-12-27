import Link from "next/link";

const FooterOne = () => {
  return (
    <footer className='footer py-80'>
      <img
        src='assets/images/bg/footer.jpeg'
        alt='BG'
        className='body-bottom-bg'
      />
      <div className='container container-lg'>
        <div className='footer-item-wrapper d-flex align-items-start flex-wrap'>
          <div className='footer-item'>
            <div className='footer-item__logo'>
              <Link href='/'>
                {" "}
                <img src='assets/images/logo/logo.png' alt='' />
              </Link>
            </div>
            <p className='mb-24'>
              
              Discover your unique scent with us.
            </p>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-map-pin' />
              </span>
              <span className='text-md text-gray-900 '>
                Kathmandu, Nepal
              </span>
            </div>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-phone-call' />
              </span>
              <div className='flex-align gap-16 flex-wrap'>
                <a
                  href='tel:+9779811787940'
                  className='text-md text-gray-900 hover-text-main-600'
                >
                  +977 9811787940
                </a>
                <span className='text-md text-main-600 '>or</span>
                <Link
                  href='tel:+9779811787940'
                  className='text-md text-gray-900 hover-text-main-600'
                >
                  +977 9811787940
                </Link>
              </div>
            </div>
            <div className='flex-align gap-16 mb-16'>
              <span className='w-32 h-32 flex-center rounded-circle bg-main-600 text-white text-md flex-shrink-0'>
                <i className='ph-fill ph-envelope' />
              </span>
              <Link
                href='/mailto:support24@sugandha.com'
                className='text-md text-gray-900 hover-text-main-600'
              >
                support24@sugandha.com
              </Link>
            </div>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>Information</h6>
            <ul className='footer-menu'>
              
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Privacy Policy
                </Link>
              </li>
              
              <li className=''>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>Customer Support</h6>
            <ul className='footer-menu'>
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Help Center
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  href='/contact'
                  className='text-gray-600 hover-text-main-600'
                >
                  Contact Us
                </Link>
              </li>
              
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Policies &amp; Rules
                </Link>
              </li>
              <li className=''>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Online Shopping
                </Link>
              </li>
            </ul>
          </div>
          <div className='footer-item'>
            <h6 className='footer-item__title'>My Account</h6>
            <ul className='footer-menu'>
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  My Account
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Order History
                </Link>
              </li>
              <li className='mb-16'>
                <Link
                  href='/shop'
                  className='text-gray-600 hover-text-main-600'
                >
                  Shoping Cart
                </Link>
              </li>
              
              <li className=''>
                <Link
                  href='/wishlist'
                  className='text-gray-600 hover-text-main-600'
                >
                  Wishlist
                </Link>
              </li>
            </ul>
          </div>
          =
          <div className='footer-item'>
            <h6 className=''>Shop on The Go</h6>
            <p className='mb-16'>Sugandha is available on social media. Get your perfume now.</p>
            =
            <ul className='flex-align gap-16'>
              <li>
                <Link
                  href='/https://www.facebook.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'
                >
                  <i className='ph-fill ph-facebook-logo' />
                </Link>
              </li>
              <li>
                <Link
                  href='/https://www.twitter.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'
                >
                  <i className='ph-fill ph-twitter-logo' />
                </Link>
              </li>
              <li>
                <Link
                  href='/https://www.linkedin.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'
                >
                  <i className='ph-fill ph-instagram-logo' />
                </Link>
              </li>
              <li>
                <Link
                  href='/https://www.pinterest.com'
                  className='w-44 h-44 flex-center bg-main-100 text-main-600 text-xl rounded-circle hover-bg-main-600 hover-text-white'
                >
                  <i className='ph-fill ph-linkedin-logo' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
