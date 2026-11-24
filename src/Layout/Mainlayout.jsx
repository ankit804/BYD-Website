import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar';

function Layout() {
    return (
        <div className="main-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;
