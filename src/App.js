import AuthorPage from 'pages/Author/AuthorPage';
import BestSellerDetail from 'pages/BestSeller/BestSellerDetail';
import BestSellerPage from 'pages/BestSeller/BestSellerPage';
import LikePage from 'pages/Like/LikePage';
import MainPage from 'pages/MainPage/MainPage';
import Root from 'pages/Root';
import SearchPage from 'pages/Search/SearchPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { Provider } from "react-redux";
import store from 'utils/store';


const router = createBrowserRouter([
  {
    path: '/',
    element:<Root/>,
    children:[
      {index:true, element:<MainPage/>},
      {path:'/like', element:<LikePage/>},
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
  {
    path: '',
    children:[
      {path:'/author', element:<AuthorPage/>},
      {path:'/author/:details', element:<BestSellerDetail/>},
    ]
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router}>
          <GlobalStyle/>
        </RouterProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
