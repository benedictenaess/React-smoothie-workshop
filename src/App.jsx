import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import NutritionPage from './pages/NutritionPage';
import ContactPage from './pages/ContactPage';
import SmoothiePage from './pages/SmoothiePage';
import MainPage from './pages/MainPage';
import Layout from './layout/Layout';
import { FruitsProvider } from './context/FruitsProvider';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<MainPage/>}/>
        <Route path='nutrition' element={<NutritionPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='smoothie' element={<SmoothiePage/>}/>
      </Route>
    )
  );

  return (
    <>
      <FruitsProvider>
        <RouterProvider router={router}/>
      </FruitsProvider>
    </>
  )
}

export default App
