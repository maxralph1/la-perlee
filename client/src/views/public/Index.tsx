import { useEffect, useState } from 'react';
import Layout from '@/components/public/Layout.tsx';
import { useTranslation } from 'react-i18next';
import Img1 from '@/assets/images/img1.jpg';
import Img2 from '@/assets/images/img2.jpg';
import Img3 from '@/assets/images/img3.jpeg';

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
      <section className="hero h-[100dvh] flex flex-col justify-center gap-y-12 md:gap-y-36 relative">
        <h2 className="lowercase text-6xl md:text-8xl xl:text-9xl font-bold px-3 md:px-6 lg:px-8 z-10">{translate('Handmade natural scented candles.')}</h2>
        <section className="featured-candles">
          {heroTexts.map((item, i) => (
            <article className="h-full">
              <section className="relative">
                <section
                  key={item.id}
                  className={`absolute top-0 bottom-0 left-0 px-3 md:px-6 lg:px-8 transition-opacity duration-1000 ease-in-out ${
                    i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  } h-full flex flex-col`}
                >
                  <h3 className="order-2 font-semibold text-xl md:text-3xl z-10">{item.title}</h3>
                  <p className="order-3 max-w-md md:text-2xl z-10">{item.description}</p>
                  <div className="order-1 outline outline-amber-700 rounded-sm h-2 mb-4 w-28 z-10">
                    <span 
                      className="bg-amber-500 h-2 rounded-sm block transition-all duration-1000"
                      style={{ width: `${((index + 1) / heroTexts.length) * 100}%` }}
                    ></span>
                  </div>
                </section>
              </section>
              <img src={item.img} className={`absolute top-0 bottom-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                    i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`} />
              <div class='absolute inset-0 bg-gray-900 opacity-30 pointer-events-none' />
            </article>
          ))}
        </section>
        <div className="z-20 absolute right-3 md:right-6 lg:right-8  bottom-12 md:bottom-16">
          <a href="#" className="lowercase font-bold border border-2 rounded-full px-3 md:px-4.5 py-1 md:py-1.5">Shop now</a>
        </div>
      </section>
      
      <section className="pt-20 px-3 md:px-6 lg:px-8 h-[100dvh]">
        <h2 className="lowercase font-bold text-4xl md:text-5xl xl:text-6xl h-[17.5%]">Shop</h2>
        <section className="h-[82.5%] pb-2">
          <ul className="h-full flex flex-col justify-between gap-y-4">
            <li className="flex-1 flex justify-between items-center border-t">
              <a href="#" className="lowercase text-2xl">Holiday Collection</a>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </li>
            <li className="flex-1 flex justify-between items-center border-t">
              <a href="#" className="lowercase text-2xl">Summer Collection</a>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </li>
            <li className="flex-1 flex justify-between items-center border-t">
              <a href="#" className="lowercase text-2xl">Winter Collection</a>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            </li>
          </ul>
        </section>
      </section>
    </Layout>
  )
}