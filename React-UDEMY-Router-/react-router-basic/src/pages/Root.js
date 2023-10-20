import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';



// This is a layout wrapper that gets wrapped around all other routes.
// Outlet Marks the place where child route elements should be rendered
function RootLayout() {
    return (
        <>
            <MainNavigation/>
            <main >
            <Outlet />           
            </main>
            
        </>
    )




}

export default RootLayout;