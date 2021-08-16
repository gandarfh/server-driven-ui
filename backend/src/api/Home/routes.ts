import { Router } from "express";
import homeController from "./controller";

const homeRoutes = Router();

homeRoutes.get("/", homeController.show);

export default homeRoutes;
