import Layout from '@/components/public/Layout.tsx';
import ProductCard1 from '@/components/public/ProductCard1.tsx';
import LinkButton from '@/components/LinkButton.tsx';
import Img1 from '@/assets/images/img1.jpg';

export default function Collection() {
  return (
    <Layout>
      <h2 className="font-bold text-5xl md:text-7xl lg:text-6xl">Christmas Collection</h2>
      <div className="flex justify-end">
        <LinkButton 
          htmlId="explore" 
          text="Explore options" 
          additionalStyling="" />
      </div>
      
      <section className="pt-8 overflow-hidden">
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
    </Layout>
  );
}