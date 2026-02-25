import React from 'react';
import { useLocation } from 'react-router-dom';
import { route } from '@/routes';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className="relative min-h-[100dvh] flex flex-col">
      <header className="fixed top-0 right-0 left-0 z-40">
        <Header />
      </header>
      <main className={`${(location.pathname != route('index')) && 'pt-20 px-3 md:px-6 lg:px-8'} pb-14 grow`}>
        { children }
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
