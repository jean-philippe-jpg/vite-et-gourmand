import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "accueil", "/pages/home.html"),
new Route("/contact", "contact", "/pages/contact.html", "js/contact.js"),
new Route("/connexion", "connexion", "/pages/connexion.html", "/js/connexion.js"),
new Route("/signup", "signup", "/pages/signup.html", "/js/signup.js"),
new Route("/menus", "menus", "/pages/menus.html", "/js/menus.js"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "vite et gourmand";