import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div className="layout">
            <header className="layout-header">
                <nav>
                    <ul>
                        <li>
                            <Link to="/"> Home</Link>
                        </li>
                        <li>
                            <Link to="/login"> Login</Link>
                        </li>
                        <li>
                            <Link to="/about"> About</Link>
                        </li>
                        <li>
                            <Link to="/contact"> Contact</Link>
                        </li>
                        <li>
                            <Link to="/logout"> Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;