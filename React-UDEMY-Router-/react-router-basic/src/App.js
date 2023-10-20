import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// This is where we define the routes we want to support in the application.
// Pass an array of route definition objects.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: '/',  element: <HomePage/>},
      {path: '/products', element: <ProductsPage/>},
      {path: '/products/:productId', element: <ProductDetailPage/>},
    ]
  }
]);

function App() {

  return <RouterProvider router = {router} />;
}

export default App;
