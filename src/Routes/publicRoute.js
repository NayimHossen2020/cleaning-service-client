import Home from '../Pages/Home/Home';
import About from '../Pages/About';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';

const publicRoute = [
    { path: "/", name: "Home", Component: Home },
    { path: "/home", name: "Home", Component: Home },
    { path: "/about", name: "About", Component: About },
    { path: "/services", name: "Services", Component: Services },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/login", name: "Login", Component: Login }
];

export default publicRoute;