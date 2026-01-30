import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <div className="relative flex justify-between pt-5 pb-1 mx-3 md:mx-6 lg:mx-8 border-b-2">
      <section className="flex gap-x-3">
        <h1 className="font-bold">La Perlée</h1>
        <div className={`${navOpen ? 'max-md:opacity-100 max-md:translate-y-0 pointer-events-auto' : 'max-md:opacity-0 max-md:-translate-y-4 pointer-events-none transition-all duration-700 ease-in-ouy'} absolute top-16 right-1 md:relative md:top-0 md:right-0`}>
          <ul className="flex flex-col md:flex-row gap-3 max-md:p-3 max-md:border-2 max-md:rounded-sm text-end md:text-start">
            <li className="font-semibold"><a href="#">Shop</a></li>
            <li className="font-semibold"><a href="#">About Us</a></li>
            <li className="font-semibold"><a href="#">Contact</a></li>
          </ul>
        </div>
      </section>
      <section className="flex gap-x-4">
        <ul className="flex gap-2">
          <li>
            <a href="#">
              <svg viewBox="0 2 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-800 dark:text-orange-200"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.029 16.5295L19.5 19.0005" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-orange-200"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-orange-200"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.74181 20.5545C4.94143 22 7.17414 22 11.6395 22H12.3607C16.8261 22 19.0589 22 20.2585 20.5545M3.74181 20.5545C2.54219 19.1091 2.95365 16.9146 3.77657 12.5257C4.36179 9.40452 4.65441 7.84393 5.7653 6.92196M3.74181 20.5545C3.74181 20.5545 3.74181 20.5545 3.74181 20.5545ZM20.2585 20.5545C21.4581 19.1091 21.0466 16.9146 20.2237 12.5257C19.6385 9.40452 19.3459 7.84393 18.235 6.92196M20.2585 20.5545C20.2585 20.5545 20.2585 20.5545 20.2585 20.5545ZM18.235 6.92196C17.1241 6 15.5363 6 12.3607 6H11.6395C8.46398 6 6.8762 6 5.7653 6.92196M18.235 6.92196C18.235 6.92196 18.235 6.92196 18.235 6.92196ZM5.7653 6.92196C5.7653 6.92196 5.7653 6.92196 5.7653 6.92196Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            </a>
          </li>
        </ul>
        <div className="block md:hidden">
          <button 
            type="button" 
            onClick={() => setNavOpen(!navOpen)}>
            {(navOpen) ? (
              <span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-orange-200"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </span>
            ) : (
              <span>
                <svg width="174px" height="174px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-orange-200"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="5" width="16" height="5" rx="1" stroke="#222222" stroke-linejoin="round"></rect> <rect x="4" y="14" width="16" height="5" rx="1" stroke="#222222" stroke-linejoin="round"></rect> </g></svg>
              </span>
            )}
          </button>
        </div>
      </section>
    </div>
  )
}