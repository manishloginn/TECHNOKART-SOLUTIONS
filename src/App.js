import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import { Route,  Routes } from 'react-router-dom';
import {  lazy, Suspense } from 'react';

const Homepage = lazy(() => import('./homepage/Homepage'))




const LazyLoadingWrapper = ({Component}) => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Component />
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
