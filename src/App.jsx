import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './App.css';
import NutritionPage from './pages/NutritionPage';
import ContactPage from './pages/ContactPage';
import SmoothiePage from './pages/SmoothiePage';
import MainPage from './pages/MainPage';
import Layout from './layout/Layout';

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
      <RouterProvider router={router}/>
    </>
  )
}

export default App
