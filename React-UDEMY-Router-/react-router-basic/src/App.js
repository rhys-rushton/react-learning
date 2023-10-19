import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// This is where we define the routes we want to support in the application.
// Pass an array of route definition objects.
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {path: '/',  element: <HomePage/>},
      {path: '/products', element: <ProductsPage/>},
    ]
  }
]);

function App() {

  return <RouterProvider router = {router} />;
}

export default App;
