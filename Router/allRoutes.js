import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "La galerie", "/pages/galerie.html",[]),
    new Route("/habitats", "Les habitats", "/pages/habitats.html",[]),
    new Route("/contact", "Contact", "/pages/contact.html",[]),
    new Route("/admin", "Admin", "/pages/auth/admin.html",[]),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", ["disconnected"], "js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html",["disconnected"], "js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html",["client","admin"]),
    new Route("/editPassworld", "Changement de mot de passe", "/pages/auth/editPassword",["client","admin"]),
    new Route("/allResa", "Mes réservations", "/reservations/allResa.html",["client"]),
    new Route("/reserver", "Réserver", "/reservations/reserver.html",["client"]),





];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";