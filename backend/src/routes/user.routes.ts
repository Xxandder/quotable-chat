import { Router } from "express";
import passport from "passport";
import { userController } from "../controllers/user.controller";

const router: Router = Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(req.user)
})

router.post('/register', userController.register)


export { router as userRouter };
