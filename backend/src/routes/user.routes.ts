import { Router } from "express";
import passport from "passport";

const router: Router = Router();

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.json(req.user)
})

export { router as userRouter };
