import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar';

function Layout() {
    return (<>
        <main className="main-layout">
            <Navbar />
            <Outlet />
        </main>
    </>)
}

export default Layout;