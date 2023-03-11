import BestSellerDetail from 'pages/BestSeller/BestSellerDetail';
import BestSellerPage from 'pages/BestSeller/BestSellerPage';
import CartPage from 'pages/Cart/CartPage';
import MainPage from 'pages/MainPage/MainPage';
import Root from 'pages/Root';
import SearchPage from 'pages/Search/SearchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children:[
      {index:true, element:<MainPage/>},
      {path:'/cart', element:<CartPage/>},
      {path:'/search', element:<SearchPage/>},
    ]
  },
  {
    path: '',
    children:[
      {path:'/bestseller', element:<BestSellerPage/>},
      {path:'/bestseller/:details', element:<BestSellerDetail/>},
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
