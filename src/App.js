import './App.css';
import Navbar from './navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Footer from './footer/Footer';

const Homepage = lazy(() => import('./homepage/Homepage'))




const LazyLoadingWrapper = ({ Component }) => {
  return (
    <Suspense fallback={
      <div className='spinbox'>
        <div className='spiner'></div>
      </div>
    }>

      <Component />
      <Footer />
    </Suspense>
  )
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<LazyLoadingWrapper Component={Homepage} />} /> 
        {/* <Route path='/services' element={ <LazyLoadingWrapper Component={Services} /> } /> */}
       </Routes>


    </div>
  );
}

export default App;
