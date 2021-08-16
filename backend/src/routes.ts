import { Router } from "express";
import homeRoutes from "./api/Home/routes";
import searchRoutes from "./api/Search/routes";

const router = Router();

router.use("/home", homeRoutes);
router.use("/search", searchRoutes);

export default router;
