import HomePage from "./pages/HomePage";
import NotFountPage from "./pages/NotFountPage";
import ProductsPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

export const routes = [
    {
        path: "/home",
        exact: true,
        main: () => <HomePage />
    },
    {
        path: "/product",
        exact: false,
        main: () => <ProductsPage />
    },
    {
        path: "/about",
        exact: false,
        main: () => <AboutPage />
    },
    {
        path: "/contact",
        exact: false,
        main: () => <ContactPage />
    },
    {
        path: "",
        exact: false,
        main: () => <NotFountPage />
    }
];

export const links = [
    {
        to: "/home",
        label: "Home",
        activeOnlyWhenExact: true
    },
    {
        to: "/product",
        label: "Out Products",
        activeOnlyWhenExact: false
    },
    {
        to: "/about",
        label: "About Us",
        activeOnlyWhenExact: false
    },
    {
        to: "/contact",
        label: "Contact",
        activeOnlyWhenExact: false
    },
]