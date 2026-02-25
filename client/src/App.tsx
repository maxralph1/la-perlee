import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { route } from '@/routes';
import AboutUs from '@/views/public/AboutUs.tsx';
import Collection from '@/views/public/Collection.tsx';
import ContactUs from '@/views/public/ContactUs.tsx';
import Product from '@/views/public/Product.tsx';
import Shop from '@/views/public/Shop.tsx';
import Index from '@/views/public/Index.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ route('about-us') } element={ <AboutUs /> } />
        <Route path={ route('collection') } element={ <Collection /> } />
        <Route path={ route('contact-us') } element={ <ContactUs /> } />
        <Route path={ route('product') } element={ <Product /> } />
        <Route path={ route('shop') } element={ <Shop /> } />
        <Route path={ route('index') } element={ <Index /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
