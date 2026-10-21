import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import __Layout from './Layout.jsx';


export const PAGES = {
    "ProductDetail": ProductDetail,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};