import LinkButton from '@/components/public/version-2/LinkButton';
import Layout from '@/components/public/Layout';

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
      
      <section></section>
    </Layout>
  );
}