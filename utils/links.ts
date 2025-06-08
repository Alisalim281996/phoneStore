
interface NavBarLinks {
    name: string,
    href: string
}

export const dropDownMenu: NavBarLinks[] = [
    { href: "/", name: "Home" },
    { href: "/about", name: "About" },
    { href: "/products", name: "Products" },
    { href: "/favorites", name: "Favorites" },
    { href: "/reviews", name: "Reviews" },
    { href: "/cart", name: "Cart" },
    { href: "/orders", name: "Orders" },
]

export const Links = {
    HOME: { href: '/', name: "Home" },
    ABOUT: { href: '/about', name: "About" },
    CART: { href: '/cart', name: "Cart" },
    PRODUCTS: { href: '/products', name: "Products" },
} as const

