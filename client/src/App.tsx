import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { route } from '@/routes';
import AboutUs from '@/views/public/AboutUs';
import Collection from '@/views/public/Collection';
import ContactUs from '@/views/public/ContactUs';
import Product from '@/views/public/Product';
import Shop from '@/views/public/Shop';
import Index from '@/views/public/Index';

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
