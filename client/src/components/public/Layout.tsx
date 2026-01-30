import Header from '@/components/public/Header.tsx';
import Footer from '@/components/public/Footer.tsx';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      <header className="fixed top-0 right-0 left-0">
        <Header />
      </header>
      <main className="pt-20 px-3 md:px-6 lg:px-8 flex-1">
        { children }
      </main>
      <Footer />
    </div>
  )
}