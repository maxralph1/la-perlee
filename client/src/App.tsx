import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import { route } from '@/routes';
import Index from '@/views/public/Index.tsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ route('index') } element={ <Index /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
