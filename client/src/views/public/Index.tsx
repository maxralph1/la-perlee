import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { route } from '@/routes';
import { useTranslation } from 'react-i18next';
import LinkButton from '@/components/LinkButton';
import Img1 from '@/assets/images/img1.jpg';
import Img2 from '@/assets/images/img2.jpg';
import Img3 from '@/assets/images/img3.jpeg';
import ProductCard1 from '@/components/public/ProductCard1';
import Layout from '@/components/public/Layout';

export default function Index() {
  const [index, setIndex] = useState(0);
  const { t: translate } = useTranslation();
  const heroTexts = [
    {
      id: 1,
      title: "La Bougie Rose",
      description: "A sense of intimacy, togetherness and inner warmth, a world lit by candles and snuggles under blankets.",
      img: Img1
    },
    {
      id: 2,
      title: "La Bougie Red",
      description: "A sense of red, togetherness and inner warmth, a world lit by candles and snuggles under blankets.",
      img: Img2
    },
    {
      id: 3,
      title: "La Bougie Blue",
      description: "A sense of blue, togetherness and inner warmth, a world lit by candles and snuggles under blankets.",
      img: Img3
    }
  ]
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTexts.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroTexts.length]);
  
  return (
    <Layout>
      {/** <h1>{translate('welcome', { name: 'User' })}</h1> */}
      <section className="hero h-[100dvh] grid grid-rows-[1fr_auto_1fr] relative overflow-hidden">
        
        <h2 className="row-start-2 row-end-3 lowercase text-6xl md:text-8xl xl:text-9xl font-bold px-3 md:px-6 lg:px-8 z-10 self-center text-white max-[896px]:landscape:text-5xl max-[896px]:landscape:pt-20">
          {translate('Handmade natural scented candles.')}
        </h2>
        
        <section className="absolute inset-0">
          {heroTexts.map((item, i) => (
            <img 
              key={item.id}
              src={item.img} 
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`} 
              alt={item.title}
            />
          ))}
          <div className='absolute inset-0 bg-gray-900 opacity-10 pointer-events-none' />
        </section>
        
        <section className="featured-candles row-start-3 row-end-4 self-end z-10 pb-12 md:pb-20">
          {heroTexts.map((item, i) => (
            <article key={item.id} className="relative">
              <section
                className={`px-3 md:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
                  i === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                } w-[70vw] flex flex-col text-white`}
              >
                <h3 className="order-2 font-semibold text-xl md:text-3xl z-10">{item.title}</h3>
                <p className="order-3 max-w-md md:text-2xl z-10">{item.description}</p>
                <div className="order-1 outline outline-amber-700  h-1 mb-4 w-28 z-10">
                  <span 
                    className="bg-amber-500 h-1 block transition-all duration-1000"
                    style={{ width: `${((index + 1) / heroTexts.length) * 100}%` }}
                  ></span>
                </div>
              </section>
            </article>
          ))}
        </section>
        
        <div className="z-20 absolute right-3 md:right-6 lg:right-8 bottom-12 md:bottom-20">
          <LinkButton 
            htmlId="shop" 
            text="Shop now" 
            additionalStyling="" 
          />
        </div>
      </section>
      
      <section className="min-h-[200px] max-h-[35vh] flex flex-col text-center justify-center py-3 px-3 md:px-16">
        <p className="text-2xl">Our candles are signatures for every peculiar occasion.</p>
      </section>
      
       <section className="auto-scroll">
        <section className="overflow-hidden">
          <div
            className="flex gap-2.5 overflow-x-auto pb-4 scroll-smooth group"
            style={{
              scrollbarWidth: 'thin',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-2.5 w-max group-hover:[animation-play-state:paused] group-focus:[animation-play-state:paused] animate-[marquee_10s_linear_infinite]">
              {/* First set */}
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
              
              {/* Duplicated for infinite scroll effect */}
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
              <ProductCard1 />
            </div>
          </div>
        </section>
        <div className="flex justify-end pt-8 px-3 md:px-6 lg:px-8">
          <LinkButton 
            htmlId="explore" 
            text="Explore options" 
            additionalStyling="" />
        </div>
      </section>
      
      <section id="shop" className="py-12 px-3 md:px-6 lg:px-8 flex flex-col overflow-hidden">
        <h2 className="pb-4 lowercase font-bold text-4xl md:text-5xl xl:text-6xl flex-shrink-0">Shop</h2>
        <section className="flex-1 min-h-0 pb-2 mt-4">
          <ul className="h-[350px] flex flex-col justify-between gap-y-4 overflow-y-auto">
            <li className="flex-1 flex-shrink-0 flex justify-between items-center border-t py-4">
              <a href="#" className="lowercase text-2xl">Holiday Collection</a>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0">
                <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </li>
            <li className="flex-1 flex-shrink-0 flex justify-between items-center border-t py-4">
              <a href="#" className="lowercase text-2xl">Summer Collection</a>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0">
                <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </li>
            <li className="flex-1 
            flex-shrink-0 flex justify-between items-center border-y py-4">
              <Link to="#" className="lowercase text-2xl">Winter Collection</Link>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0">
                <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  )
}