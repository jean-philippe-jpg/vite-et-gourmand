import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "accueil", "/pages/home.html", [],  ),
new Route("/contact", "contact", "/pages/contact.html",  [], "js/auth/contact.js"),
new Route("/signin", "signin", "/pages/auth/signin.html", ["disconnected"],"js/auth/signin.js"),
new Route("/signup", "signup", "/pages/auth/signup.html", ["disconnected"], "js/auth/signup.js"),
new Route("/menus", "menus", "/pages/menus.html", [], "js/auth/menus.js"), 
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "vite et gourmand";