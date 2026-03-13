import Button1 from '@/components/public/Button1';
import Article1 from '@/components/public/Article1';
import Layout from '@/components/public/Layout';
import Img1 from '@/assets/images/img1.jpg';

export default function Index() {
  return (
    <Layout>
      <section className="hero h-[100dvh] flex flex-col justify-end px-3 md:px-6 lg:px-8 pb-7">
        <section className="flex flex-col md:grid md:grid-cols-3 items-center gap-x-4 gap-y-7">
          <div className="md:col-start-1 md:col-end-2 text-center md:text-start">
            <h2 className="font-bold text-xl pb-1.5">Rose Candle</h2>
            <p className="min-w-[65px]">This is the pink candle suitable for your occasions.</p>
          </div>
          <div className="md:col-start-3">
            <img 
              src={Img1} 
              className="h-[200px] w-[250px] md:w-full object-cover rounded-xs"
              alt="Image 1"
            />
          </div>
        </section>
        {/**
        <div className="interlude w-full">
          <span className="block text-[clamp(5rem,100vw,22vw)] font-extrabold text-center">La Perlée</span>
        </div>
        */}
        <div className="interlude w-full grid grid-cols-9 font-extrabold text-[clamp(5rem,100vw,22vw)]">
          <div className="col-start-1 col-end-3 grid grid-cols-2">
            <span>L</span>
            <span>a</span>
          </div>
          <div className="col-start-4 col-end-10 grid grid-cols-6 justify-end text-end">
            <span>P</span>
            <span>e</span>
            <span>r</span>
            <span>l</span>
            <span>é</span>
            <span>e</span>
          </div>
        </div>
        <nav>
          <ul className="uppercase font-semibold flex items-center justify-between">
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Collections</a>
            </li>
          </ul>
        </nav>
      </section>
      
      <section className="px-3 md:px-6 lg:px-8 pt-14">
        <div className="flex items-center justify-between pb-4">
          <h2 className="uppercase text-2xl md:text-4xl font-extrabold">Hot Picks</h2>
          <div className="flex items-center gap-0.5">
            <button className="uppercase">See all</button>
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="m9 5 7 7-7 7"/>
            </svg>
          </div>
        </div>
        
        <section className="grid grid-cols-1 md:grid-cols-3 items-center gap-3">
          <Article1 />
          <Article1 />
          <Article1 />
        </section>
      </section>
      
      <section className="px-3 md:px-6 lg:px-8 pt-14">
        <h2 className="uppercase text-2xl md:text-4xl font-extrabold">Collections</h2>
        <ul className="uppercase flex items-center gap-3">
          <Button1 text="All" />
          <Button1 text="Pink Candles" />
          <Button1 text="Blue Candles" />
          <Button1 text="Red Candles" />
        </ul>
      </section>
    </Layout>
  )
}