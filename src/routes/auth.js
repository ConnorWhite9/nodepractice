import { Router } from "express";
import * as authControllers from "../controllers/auth.js";


const router = Router();

//Actual routes for the app. Similar to flasks app routes.
router.post("/signup", authControllers.signUpController);
router.get("/user/:user_id", authControllers.getUserController);
router.post("/login", authControllers.loginController);
export default router;