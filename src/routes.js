import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castContreller from "./controllers/castController.js";
import authController from "./controllers/authController.js";

// 2. Rourtes
const routes = Router();

routes.use(homeController);
routes.use("/movies", movieController)
routes.use("/casts", castContreller);
routes.use("/auth", authController)

// Add not found Pgae -> 404 Page
routes.get("/*splat", (req, res) => {
    res.render("404")
})

export default routes;