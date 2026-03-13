import { useState } from 'react';
import { Link } from 'react-router-dom';
import { route } from '@/routes';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();
  const [siteLanguage, setSiteLanguage] = useState('fr');
  const isMobile = window.innerWidth <= 768;
  const [navOpen, setNavOpen] = useState(false);
  const [searchInputOpen, setSearchInputOpen] = useState(false);
  
  const toggleLanguage = (lang: string) => {
    setSiteLanguage(lang)
    i18n.changeLanguage(lang);
  };
  
  async function searchProduct(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputValue = (e.currentTarget.elements.namedItem('search-text') as HTMLInputElement)?.value;

    if (inputValue?.length) {
      // console.log("Input found:", inputValue);
      // Process keyword search
      // await ...
      // await e.target.reset();
      await e.currentTarget.reset();
    }
  }
  
  return (
    <div className="relative flex justify-between pt-5 pb-1 mx-3 md:mx-6 lg:mx-8">
      <section className="w-full grid grid-cols-2 md:grid-cols-3 items-center justify-between gap-x-3">
        <h1 className="order-2 md:justify-self-center font-extrabold text-amber-600 text-xl dark:text-amber-500">
          <Link to={ route('index') }>
            La Perlée
          </Link>
        </h1>
        <div className={`order-1 transition-all duration-700 ease-in-out ${(navOpen) ? 'max-md:opacity-100 max-md:translate-y-0 pointer-events-auto' : `max-md:opacity-0 max-md:-translate-y-20 ${isMobile && `pointer-events-none`}`} absolute top-16 right-1 md:relative md:top-0 md:right-0`}>
          <ul className="flex flex-col md:flex-row gap-3 max-md:p-3 max-md:border-2 max-md:rounded-sm text-end md:text-start text-amber-600 dark:text-amber-500 max-md:bg-gray-100">
            <li className="font-semibold uppercase">
              <Link to={ route('shop') }>
                Shop
              </Link>
            </li>
            <li className="font-semibold uppercase">
              <Link to={ route('about-us') }>
                About Us
              </Link>
            </li>
            <li className="font-semibold uppercase">
              <Link to={ route('contact-us') }>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <section className="order-3 justify-self-end flex items-center gap-x-4">
          <div className="">
            <button 
              type="button" 
              onClick={() => {
                if (siteLanguage == 'fr') {
                  // setSiteLanguage('en');
                  toggleLanguage('en');
                } 
                if (siteLanguage == 'en') {
                  // setSiteLanguage('fr');
                  toggleLanguage('fr');
                } 
              }} 
              className="">
              {(siteLanguage == 'fr') ? (
                <span>
                  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji h-6 w-6" preserveAspectRatio="xMidYMid meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></g></svg>
                </span>
              ) : (
                <span>
                  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji h-6 w-6" preserveAspectRatio="xMidYMid meet" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#00247D" d="M0 9.059V13h5.628zM4.664 31H13v-5.837zM23 25.164V31h8.335zM0 23v3.941L5.63 23zM31.337 5H23v5.837zM36 26.942V23h-5.631zM36 13V9.059L30.371 13zM13 5H4.664L13 10.837z"></path><path fill="#CF1B2B" d="M25.14 23l9.712 6.801a3.977 3.977 0 0 0 .99-1.749L28.627 23H25.14zM13 23h-2.141l-9.711 6.8c.521.53 1.189.909 1.938 1.085L13 23.943V23zm10-10h2.141l9.711-6.8a3.988 3.988 0 0 0-1.937-1.085L23 12.057V13zm-12.141 0L1.148 6.2a3.994 3.994 0 0 0-.991 1.749L7.372 13h3.487z"></path><path fill="#EEE" d="M36 21H21v10h2v-5.836L31.335 31H32a3.99 3.99 0 0 0 2.852-1.199L25.14 23h3.487l7.215 5.052c.093-.337.158-.686.158-1.052v-.058L30.369 23H36v-2zM0 21v2h5.63L0 26.941V27c0 1.091.439 2.078 1.148 2.8l9.711-6.8H13v.943l-9.914 6.941c.294.07.598.116.914.116h.664L13 25.163V31h2V21H0zM36 9a3.983 3.983 0 0 0-1.148-2.8L25.141 13H23v-.943l9.915-6.942A4.001 4.001 0 0 0 32 5h-.663L23 10.837V5h-2v10h15v-2h-5.629L36 9.059V9zM13 5v5.837L4.664 5H4a3.985 3.985 0 0 0-2.852 1.2l9.711 6.8H7.372L.157 7.949A3.968 3.968 0 0 0 0 9v.059L5.628 13H0v2h15V5h-2z"></path><path fill="#CF1B2B" d="M21 15V5h-6v10H0v6h15v10h6V21h15v-6z"></path></g></svg>
                </span>
              )}
            </button>
          </div>
          <ul className="flex gap-2 text-amber-600 dark:text-amber-500">
            <li>
              <form onSubmit={searchProduct} className="flex items-center">
                <input id="search-text" name="search-text" type="text" className={`${searchInputOpen ? 'w-20 sm:w-24 md:w-28 lg:w-32' : 'w-0'} transition-all duration-700 ease-in-out border-b-2 focus:outline-none`} />
                <button type="submit" 
                  onClick={() => setSearchInputOpen(!searchInputOpen)} 
                  className="">
                    <svg viewBox="0 2 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M17.029 16.5295L19.5 19.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </button>
              </form>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z" stroke="currentColor" strokeWidth="1.5"></path> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              </a>
            </li>
          </ul>
          <div className="block md:hidden">
            <button 
              type="button" 
              onClick={() => setNavOpen(!navOpen)} 
              className="text-amber-600 dark:text-amber-500">
              {(navOpen) ? (
                <span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
                </span>
              ) : (
                <span>
                  <svg width="174px" height="174px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="5" width="16" height="5" rx="1" stroke="currentColor" strokeLinejoin="round"></rect> <rect x="4" y="14" width="16" height="5" rx="1" stroke="currentColor" strokeLinejoin="round"></rect> </g></svg>
                </span>
              )}
            </button>
          </div>
        </section>
      </section>
    </div>
  )
}