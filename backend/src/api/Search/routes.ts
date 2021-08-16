import { Router } from "express";
import homeController from "./controller";

const searchRoutes = Router();

searchRoutes.get("/", homeController.show);

export default searchRoutes;
