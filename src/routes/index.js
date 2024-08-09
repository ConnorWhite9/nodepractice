import { Router } from "express"; 
import authRoutes from "./auth.js";

const apiRouter = Router();

//Sets up configuration to use router similar to flask init file.
apiRouter.use("/auth", authRoutes);

export default apiRouter;

